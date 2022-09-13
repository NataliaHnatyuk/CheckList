const inp = document.getElementById("inp")
const plus = document.getElementById("plus")
const list = document.getElementById("list")

plus.onclick = function(){
    render()
}

inp.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      render()
    }
});

function potatoe() {
    for (let i = 0; i < list.childElementCount; i++) {
        document.querySelectorAll(".delete")[i].onclick = () => {
            document.querySelectorAll(".li")[i].remove()
        }
        console.log(i);
    }   
}

function render() {
    if (inp.value == "" || inp.value == " ") {
        alert('put something please')
    } else {
        list.innerHTML += `
        <li class="li">
            <p class="li-text">${inp.value}</p>
            <img src="img/free-icon-plus-1828921.png" alt="delete" class="delete">
        </li>
        `
        inp.value=""
        potatoe()
    }
}