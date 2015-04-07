yms
======

Server for projects built with [ymb](https://www.npmjs.org/package/ymb). Runs on top of [express](http://expressjs.com/).

Requirements
------------
yms works with Node.js ^0.10.

Getting Started
---------------
####CLI usage:####
You can install `yms` globally using Node Package Manager (npm):

    npm install -g yms

Then you can use `yms` console command to start your server or create and tune up local copy of `server.js`.
Server will then try to find your `server.js` copy or use default one.

````bash
ymb [server] [DIR=.] [-p <port>]    # Starts `yms` server.
ymb configure [DIR=.] [-f]          # Makes a copy of default `server.js` in specified directory.
ymb help                            # Displays this message.
````