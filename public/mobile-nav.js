// MOBILE NAV
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
    
waitForElm('#mobile-nav-open').then((openbtn) => {
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
})