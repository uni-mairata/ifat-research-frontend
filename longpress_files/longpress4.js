// need to rewrite this code to actually be efficient lmao
// Used code from https://jsfiddle.net/kelunik/pkjze6e6/42/
var node = document.getElementsByClassName("longpressed4")[0];
var longpress4 = false;
var presstimer = null;
var longtarget = null;

var cancel = function(e) {
    if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
    }

    this.classList.remove("longpress4");
};

var click = function(e) {
    if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
    }

    this.classList.remove("longpress4");

    if (longpress4) {
        return false;
    }

    alert("press");
};

var start = function(e) {
    console.log(e);

    if (e.type === "click" && e.button !== 0) {
        return;
    }

    longpress4 = false;

    this.classList.add("longpress4");

    presstimer = setTimeout(function() {
        alert("long click");
        longpress4 = true;
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