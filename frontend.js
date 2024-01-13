
const socket = new WebSocket("ws://localhost:6060");

var term = new window.Terminal({
    cursorBlink: true
});
term.open(document.getElementById('terminal'));

function init() {
    if (term._initialized) {
        return;
    }

    term._initialized = true;

    term.prompt = () => {
        term.write('\r\n$ ');
    };
    prompt(term);

    term.onKey(key => {
        runCommand(term, key.key);
    });
}

function prompt(term) {
    term.write('\r\n$ ');
}
socket.onmessage = (event) => {
    term.write(event.data);

}

function runCommand(term, command) {
    socket.send(command);

}

init();
