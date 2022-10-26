const toBlack  = document.getElementById("toBlack");

const toWhite = document.getElementById("toWhite");

const teste = document.getElementById("teste");

function tb(){
    document.body.style.backgroundColor = "#000"
    document.body.style.color = "#FFF"
}

function tw(){
    document.body.style.backgroundColor = "#FFF"
    document.body.style.color = "#000"
}

function tt(){
    document.body.classList.toggle('is-dark');
    document.body.classList.toggle('p-2');
}

toBlack.addEventListener("click", tb)

teste.addEventListener("click", tt)

toWhite.addEventListener("click", tw)


