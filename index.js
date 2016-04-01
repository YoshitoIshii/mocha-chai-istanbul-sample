"use strict";

var greeting = function(name) {
    if(!name) {
        throw new Error("Invalid argument");
    }
    var hello = "hello,";
    if(name == "tom") {
        hello = "hi!";
    }
    if(name == "jack") {
        hello = "hey!";
    }
    return hello + " " +  name;
};
module.exports = greeting;
