# Interactive Web-Based Terminal

An interactive terminal that runs in the browser using WebSockets, built with Node.js and xterm.js.

## Features
- Real-time terminal interaction via WebSockets.
- Supports full terminal interactivity (e.g., Vim, Nano).
- Options for shared or individual terminal sessions.

## Requirements
- Node.js - v16 or higher.
- NPM

## Setup Process

The project consists of two parts, the **backend** (Node.js server) and the **frontend** (xterm.js terminal interface), just like a typical web application.

### Project Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/EDDYMENS/interactive-terminal.git
   ```

2. Navigate to the project directory:
   ```bash
   cd interactive-terminal
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm run start
   ```

5. The demo runs on port `6060` by default. You can modify this by editing the port number in the configuration section of the `/src/server.js` file.

### Frontend
The frontend automatically loads in your browser at `http://localhost:6060` when the server starts. The client-side code is located in `/src/client.js`.

## Customization

- **Port Configuration**: To change the default port, update the port number in the `/src/server.js` file.
- **Shared or Individual Sessions**: The terminal can either run as a shared session for all users or create an individual session per user. This can be configured by setting the boolean value of `setSharedTerminalMode(false);` in `server.js`.

## Documentation & Tutorial

For a detailed breakdown of how the different parts of this code work and how to extend the functionality, refer to the [complete tutorial](https://www.eddymens.com/blog/creating-a-browser-based-interactive-terminal-using-xtermjs-and-nodejs) on [Eddymens.com](https://www.eddymens.com).

## Changelog

### [v2](https://github.com/EDDYMENS/interactive-terminal/tree/v2)
- Introduced the option for both shared and individualized sessions.
- Cosmetic changes and restructuring of the demo code.

### [v1](https://github.com/EDDYMENS/interactive-terminal/tree/v1)
- Added support for copy-pasting in the terminal.
- Enabled full terminal interactivity (e.g., Vim support).
- Initial release.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.