# iZi Controllers

Express controllers with [annotations](https://github.com/backhand/annotations).

Based on [express-controllers](https://github.com/drudge/express-controllers).

## Installation

npm:
    $ npm install izi-controllers

## Usage

Controller file:

    /**
     * @route /
     */
    exports.index = function (req, res) {
        res.send('this is index');
    };

    /**
     * @route /test
     * @route /test/:param1
     */
    exports.index = function (req, res) {
        res.send('this is test');
    };

In application file:

    var express = require('express'),
        controllers = require('izi-controllers'),
        app = express();

    app.set('controllers path', __dirname + '/controllers/');
    app.use(app.router);
    controllers(app);
    app.listen(3000);

## License

    The MIT License

    Copyright (c) 2013 Vinicius Wrubleski <vinicius.wrubleski@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    'Software'), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
    CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
    TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.