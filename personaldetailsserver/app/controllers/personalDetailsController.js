var app = require('../../app');

exports.getDetails = function (req, res) {
    var data = [{
        Name: 'ss'
    }];
    response = {
        Success : true,
        Data: data,
        SuccessMessage: "Record added successfully."
    };
    res.send(response);
}