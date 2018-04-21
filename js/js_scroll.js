// Dev Purpose
window.alert("js_scroll.js loaded successfully");
// End

// id(boxes) When Scrolling Down Show Boxes With Animation
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("boxes").className = "animated slideInUp";
        document.getElementById("boxes").style.visibility = "visible";
    }
    if (document.body.scrollTop > 1850 || document.documentElement.scrollTop > 1850) {
        document.getElementById("services").className = "animated zoomIn";
        document.getElementById("services").style.visibility = "visible";
    }
}
// End
