/*!
 * iZi - Controllers
 * Copyright(c) 2013 Vinicius Wrubleski <vinicius.wrubleski@gmail.com>
 * MIT Licensed
 */

var readdir = require('fs').readdirSync,
    annotations = require('annotations'),
    join = require('path').join,
    extname = require('path').extname;

module.exports = function (app) {
    var controllerPath = app.get('controllers path') || __dirname + '/../../controllers';

    readdir(controllerPath).forEach(function (file) {
        if (file.match(/^.*.js$/ig)) {
            var controllerName = file.replace(extname(file), ''),
                controllerFile = join(controllerPath, controllerName),
                controller = require(controllerFile);

            annotations.get(controllerFile + '.js', function (err, result) {
                for (var i in result) {
                    if (typeof(result[i].get) !== 'undefined') {
                        if (typeof(result[i].get) !== 'object') result[i].get = [result[i].get];

                        for (var j = result[i].get.length; j--;) {
                            app.get(result[i].get[j], controller[i]);
                        }
                    }

                    if (typeof(result[i].post) !== 'undefined') {
                        if (typeof(result[i].post) !== 'object') result[i].post = [result[i].post];

                        for (var j = result[i].post.length; j--;) {
                            app.post(result[i].post[j], controller[i]);
                        }
                    }

                    if (typeof(result[i].put) !== 'undefined') {
                        if (typeof(result[i].put) !== 'object') result[i].put = [result[i].put];

                        for (var j = result[i].put.length; j--;) {
                            app.put(result[i].put[j], controller[i]);
                        }
                    }

                    if (typeof(result[i].delete) !== 'undefined') {
                        if (typeof(result[i].delete) !== 'object') result[i].delete = [result[i].delete];

                        for (var j = result[i].delete.length; j--;) {
                            app.delete(result[i].delete[j], controller[i]);
                        }
                    }
                }
            });
        }
    });
};