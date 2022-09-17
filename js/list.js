const inp = document.getElementById("inp")
const plus = document.getElementById("plus")
const list = document.getElementById("list")
if (localStorage.getItem("num") == null || localStorage.getItem("num") == undefined) {
    localStorage.setItem("num", "0")
}
console.log(localStorage.getItem('num'));

plus.onclick = function(){
    render(false)
}

inp.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      render(false)
    }
});

function potatoe() {
    for (let i = 0; i < parseInt(localStorage.getItem('num')); i++) {
            if(localStorage.getItem(i) != null) {  
                document.querySelectorAll(".delete")[i].onclick = () => {
                localStorage.removeItem(i)
                    list.innerHTML = ""
                    for(let ii = 0; ii < parseInt(localStorage.getItem('num')); ii++) {
                        if(localStorage.getItem(ii) != null) {
                            list.innerHTML += localStorage.getItem(ii)
                        }
                }
            }
        }
        console.log(document.querySelectorAll('.delete')[i])
    }   
}

function render(skip) {
    if (skip == false && inp.value == "" || inp.value == " ") {
        alert('put something please')
    } else {
        localStorage.setItem( `${localStorage.getItem('num')}`, `
        <li class="li">
            <p class="li-text">${inp.value}</p>
            <img src="img/free-icon-plus-1828921.png" alt="delete" class="delete">
        </li>
        `)
        list.innerHTML += localStorage.getItem(`${localStorage.getItem('num')}`)
        localStorage.setItem('num', parseInt(localStorage.getItem('num')) + 1)
        inp.value=""
        potatoe()
    }
}

for(let i = 0; i < parseInt(localStorage.getItem('num')); i++) {
    if(localStorage.getItem(i) != null) {
        list.innerHTML += localStorage.getItem(i)
    } else {
        console.log(i)
    }
}

document.getElementById('clear').onclick = function(){
    localStorage.clear()
    list.innerHTML = "";
}

potatoe()