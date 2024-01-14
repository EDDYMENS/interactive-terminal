# Interactive web-based terminal

## Requirements:
- NodeJS >= v16 and NPM

## Setup process
There are two parts to this, the frontend and backend, just like a typical web application.

To get the backend running use the following steps:

- `cd` into the directory.
- Run `npm install` to pull in dependencies.
- Run `node backend.js` to start the WebSocket the frontend will be connecting to.

There is not much to do regarding the frontend except to open up `index.html` in the browser.

The WebSocket port number is hard coded thus `6060`. Feel free to change it in `backend.js`
Also, don't forget to update the WebSocket URL in `frontend.js`.

There is also a [complete tutorial](https://www.eddymens.com/blog/creating-a-browser-based-interactive-terminal-using-xtermjs-and-nodejs) detailing how different parts of the code work.

# Changelog
- [V1](https://github.com/EDDYMENS/interactive-terminal/commit/0f27f59decbffe1cb322dac53b131cc281d2ad16) - Improved to support 1:1 mirroring of an actual terminal  e.g: Vim works with this implementation
- [V2](https://github.com/EDDYMENS/interactive-terminal/commit/6a517bb3c9102628eb20f1f470af97c3502fe935) - Initial release.
