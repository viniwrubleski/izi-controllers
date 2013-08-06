# iZi Controllers

Express controllers with [annotations](https://github.com/backhand/annotations).

Based on [express-controllers](https://github.com/drudge/express-controllers).

## Installation

npm:
    $ npm install izi-controllers

## Usage

Controller file:

    /**
     * @get /
     */
    exports.index = function (req, res) {
        res.send('this is index');
    };

    /**
     * @get /test
     * @get /test/:param1
     */
    exports.test = function (req, res) {
        res.send('this is test');
    };

    /**
     * @post /post
     */
    exports.post = function (req, res) {

    };

In application file:

    var express = require('express'),
        controllers = require('izi-controllers'),
        app = express();

    app.set('controllers path', __dirname + '/controllers/');
    app.use(app.router);
    controllers(app);
    app.listen(3000);