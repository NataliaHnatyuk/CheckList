const btn = document.getElementById("theme")
const body = document.querySelector("body")
let dark = false;

body.style.transition = "0.3s all linear"
btn.onclick = function () {
    if (dark) {
        body.className = ""
        btn.src = "./img/sun.png"
        dark = false 
    } else {
        body.className = "dark-theme"
        btn.src = "./img/moon.png"
        dark = true;
    }
}