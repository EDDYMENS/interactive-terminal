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
Also, don't forget to update the WebSocket URL in `frontend.js` after.

There is also a [complete tutorial](https://www.eddymens.com/blog/creating-a-browser-based-interactive-terminal-using-xtermjs-and-nodejs) detailing how different parts of the code work.


## TODO:
- [] Enable key combo detection.
- [] Enable arrow key usage.
