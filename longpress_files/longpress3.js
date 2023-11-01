// need to rewrite this code to actually be efficient lmao
// Used code from https://jsfiddle.net/kelunik/pkjze6e6/42/
var node = document.getElementsByClassName("longpressed3")[0];
var longpress3 = false;
var presstimer = null;
var longtarget = null;

var cancel = function(e) {
    if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
    }

    this.classList.remove("longpress3");
};

var click = function(e) {
    if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
    }

    this.classList.remove("longpress3");

    if (longpress3) {
        return false;
    }

    alert("press");
};

var start = function(e) {
    console.log(e);

    if (e.type === "click" && e.button !== 0) {
        return;
    }

    longpress3 = false;

    this.classList.add("longpress3");

    presstimer = setTimeout(function() {
        alert("long click");
        longpress3 = true;
    }, 1000);

    return false;
};

node.addEventListener("mousedown", start);
node.addEventListener("touchstart", start);
node.addEventListener("click", click);
node.addEventListener("mouseout", cancel);
node.addEventListener("touchend", cancel);
node.addEventListener("touchleave", cancel);
node.addEventListener("touchcancel", cancel);