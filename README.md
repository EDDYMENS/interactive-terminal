# Interactive web-based terminal

## Requirements:
- NodeJS >= v16 and NPM

## Setup process
There are two parts to this, the frontend and backend, just like a typical web application.

To get the backend running use the following steps:

- `cd` into the directory.
- Run `npm install` to pull in dependencies.
- Run `npm run start` to start the WebSocket.

The demo runs on port `6060`. Feel free to change this within the config section of the `/src/server.js` file.

I have a [complete tutorial](https://www.eddymens.com/blog/creating-a-browser-based-interactive-terminal-using-xtermjs-and-nodejs) detailing how different parts of the code work.

# Changelog
- [v2](https://github.com/EDDYMENS/interactive-terminal/tree/v2)
    - Allow for both shared and individualized sessions 
    - Cosmetic changes (Restructured demo code)
- [v1](https://github.com/EDDYMENS/interactive-terminal/tree/v1)
    -  Added copy paste support
    -  Allow full interactiveness e.g: Vim support
    -  Initial release
