"use strict";
exports.__esModule = true;
require("jquery");
var parameters_1 = require("./data/parameters");
function onButtonCilck() {
    var url = parameters_1["default"].url;
    var request_text = document.getElementById("id_HokkaidoTextBox").textContent;
    var request_data = {
        body: {
            text: request_text
        }
    };
    jQuery.ajax({
        type: "post",
        url: url,
        data: JSON.stringify(request_data),
        contentType: 'application/json',
        dataType: "json"
    }).then(function (data) { return alert('Success'); }, function (error) { return alert('Error'); });
}
