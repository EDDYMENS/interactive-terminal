const WebSocket = require('ws')
var os = require('os');
var pty = require('node-pty');

const wss = new WebSocket.Server({ port: 6060 })

console.log("Socket is up and running...")

var shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';
var ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    //   cwd: process.env.HOME,
    env: process.env,
});
wss.on('connection', ws => {
    console.log("new session")
    ws.on('message', command => {
        ptyProcess.write(command);
    })

    ptyProcess.on('data', function (data) {
        ws.send(data)
        console.log(data);

    });
})