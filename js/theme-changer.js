const btn = document.getElementById("theme")
const body = document.querySelector("body")
const black = document.getElementById("black")

body.style.transition = "0.3s all linear"
btn.onclick = function () {
    if (localStorage.getItem('localDark') == 'true') {
        black.style.opacity = "1"
        black.style.zIndex = "999"
        setTimeout(() => {
            body.className = ""
            btn.src = "./img/sun.png"
            localStorage.setItem('localDark', 'false') 
            setTimeout(()=>{
                black.style.opacity = "0"
                black.style.zIndex = "-1"
            }, 100)
        }, 300);
    } else {
        black.style.opacity = "1"
        black.style.zIndex = "999"
        setTimeout(()=>{
            body.className = "dark-theme"
            btn.src = "./img/moon.png"
            localStorage.setItem('localDark', true) 
            setTimeout(()=>{
                black.style.opacity = "0"
                black.style.zIndex = "-1"
            }, 100)
        }, 300)
    }
}

if (localStorage.getItem('localDark') == 'false') {
    black.style.opacity = "1"
    black.style.zIndex = "999"
    setTimeout(() => {
        body.className = ""
        btn.src = "./img/sun.png"
        setTimeout(()=>{
            black.style.opacity = "0"
            black.style.zIndex = "-1"
        }, 100)
    }, 300);
} else {
    black.style.opacity = "1"
    black.style.zIndex = "999"
    setTimeout(()=>{
        body.className = "dark-theme"
        btn.src = "./img/moon.png"
        setTimeout(()=>{
            black.style.opacity = "0"
            black.style.zIndex = "-1"
        }, 100)
    }, 300)
}