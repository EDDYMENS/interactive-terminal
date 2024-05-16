const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const pty = require("node-pty");
const fs = require("fs-extra");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors({ origin: "*" }));

const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

app.use(express.static("public"));

let terminals = {};

// Create a route to generate a new terminal
app.get("/new", (req, res) => {
  const terminalId = uuidv4();
  terminals[terminalId] = createTerminal(terminalId);
  res.redirect(`/terminal/${terminalId}`);
});

// Handle dynamic terminal pages
app.get("/terminal/:id", (req, res) => {
  res.sendFile(__dirname + "/public/terminal.html");
});

// Function to create a new terminal
const createTerminal = (id) => {
  const shell = "bash";
  const ptyProcess = pty.spawn(shell, [], {
    name: "xterm-color",
    env: process.env,
  });

  // Ensure logs directory exists and create a log file for the terminal output
  const logDir = "logs";
  fs.ensureDirSync(logDir);
  const logFilePath = `${logDir}/${id}.log`;
  const logFile = fs.createWriteStream(logFilePath, { flags: "a" });

  ptyProcess.on("data", function (rawOutput) {
    var processedOutput = outputProcessor(rawOutput);
    if (io.sockets.adapter.rooms.get(id)) {
      io.to(id).emit("output", processedOutput);
    }
    logFile.write(processedOutput); // Log the output to the respective file
  });

  ptyProcess.on("exit", (code, signal) => {
    logFile.end(`Terminal ${id} exited with code ${code} and signal ${signal}\n`);
  });

  return ptyProcess;
};

const commandProcessor = function (command) {
  return command + "\n";
};

const outputProcessor = function (output) {
  return output;
};

// Handle Socket.IO connections
io.on("connection", (socket) => {
  socket.on("join", (terminalId) => {
    socket.join(terminalId);
    console.log(`Socket joined terminal: ${terminalId}`);

    // Send back the historical data
    const logFilePath = `logs/${terminalId}.log`;
    if (fs.existsSync(logFilePath)) {
      const history = fs.readFileSync(logFilePath, 'utf8');
      socket.emit("output", history); // Send the contents of the log file
    }
  });

  socket.on("command", (data) => {
    const { terminalId, command } = data;
    const processedCommand = commandProcessor(command);
    if (terminals[terminalId]) {
      terminals[terminalId].write(processedCommand);
    }
  });

  socket.on("disconnect", () => {
    console.log("Session disconnected");
  });

  socket.on("error", (error) => {
    console.error("Socket.IO error:", error);
  });
});

const port = 6060;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
