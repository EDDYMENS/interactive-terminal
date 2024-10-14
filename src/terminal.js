import os from 'os';
import pty from 'node-pty';

let sharedPtyProcess = null;
let sharedTerminalMode = false;

const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

const spawnShell = () => {
    return pty.spawn(shell, [], {
        name: 'xterm-color',
        env: process.env,
    });
};

export const setSharedTerminalMode = (useSharedTerminal) => {
    sharedTerminalMode = useSharedTerminal;
    if (sharedTerminalMode && !sharedPtyProcess) {
        sharedPtyProcess = spawnShell();
    }
};

export const handleTerminalConnection = (ws) => {
    let ptyProcess = sharedTerminalMode ? sharedPtyProcess : spawnShell();

    ws.on('message', command => {
        const processedCommand = commandProcessor(command);
        ptyProcess.write(processedCommand);
    });

    ptyProcess.on('data', (rawOutput) => {
        const processedOutput = outputProcessor(rawOutput);
        ws.send(processedOutput);
    });

    ws.on('close', () => {
        if (!sharedTerminalMode) {
            ptyProcess.kill();
        }
    });
};

// Utility function to process commands
const commandProcessor = (command) => {
    return command;
};

// Utility function to process output
const outputProcessor = (output) => {
    return output;
};
