// need to rewrite this code to actually be efficient lmao
// Used code from https://jsfiddle.net/kelunik/pkjze6e6/42/
var node = document.getElementsByClassName("longpressed2")[0];
var longpress2 = false;
var presstimer = null;
var longtarget = null;

var cancel = function(e) {
    if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
    }

    this.classList.remove("longpress2");
};

var click = function(e) {
    if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
    }

    this.classList.remove("longpress2");

    if (longpress2) {
        return false;
    }

    alert("press");
};

var start = function(e) {
    console.log(e);

    if (e.type === "click" && e.button !== 0) {
        return;
    }

    longpress2 = false;

    this.classList.add("longpress2");

    presstimer = setTimeout(function() {
        alert("long click");
        longpress2 = true;
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