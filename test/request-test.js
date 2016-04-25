var request = require('request');

request('http://fanyi.youdao.com/openapi.do?keyfrom=node-translator&key=2058911035&type=data&doctype=json&version=1.1&q=sexy', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});