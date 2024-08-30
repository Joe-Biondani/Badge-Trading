// MOBILE NAV

const openbtn = document.getElementById('mobile-nav-open');
const closebtn = document.getElementById('mobile-nav-close');
const nav = document.getElementById('mobile-nav');
const body = document.getElementsByTagName("body")[0];

openbtn.onclick = function() {
    nav.style = "display:block;"
    body.style = "overflow-y:hidden;"
};

closebtn.onclick = function () {
    nav.style = "display:none;"
    body.style = ""
}