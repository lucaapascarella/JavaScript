let pul = document.getElementById("pul")

pul.addEventListener("mouseover", function(){
    pul.setAttribute("class", "button2")
})

pul.addEventListener("mouseout", function(){
    pul.setAttribute("class", "button")
})

let codice_fiscale = document.getElementById("codice_fiscale")

codice_fiscale.addEventListener("input",function(){
    this.value = this.value.toUpperCase()
})

let testo = document.getElementById("testo")

testo.addEventListener("focus", function(){
    this.style.backgroundColor='yellow'
})
testo.addEventListener("blur", function(){
    this.style.backgroundColor='white'
})

let testoDaNascondere = document.getElementById("testoDaNascondere")
let pulsante = document.getElementById("pulsante")
let verifica = false

pulsante.addEventListener("click",function(){
    if(verifica===false)
    {
        testoDaNascondere.hidden=true
        verifica=true
    }
    else
    {
        testoDaNascondere.hidden=false
        verifica=false
    }
})

let password = document.getElementById("password")
let ripetiPassword = document.getElementById("ripetiPassword")
let button = document.getElementById("button")

button.addEventListener("click", function(){
    if (password.value !== ripetiPassword.value) {
        alert("Le password non corrispondono");
    }
    else
    {
        alert("le password corrispondono")
    }
})

let  text= document.getElementById("text")
let  ripertiText= document.getElementById("ripertiText")
let  bottone= document.getElementById("bottone")

bottone.addEventListener("click", function(){
    if (text.value.length >= 8) {
        controlloPassword++;
    }
    if (text.value.match(/[A-Z]/)) {
        controlloPassword++;
    }
    if (text.value.match(/[a-z]/)) {
        controlloPassword++;
    }
    if (text.value.match(/[0-9]/)) {
        controlloPassword++;
    }
    let backgroundColor;
    switch (controlloPassword) {
        case 0:
        case 1:
            backgroundColor = "red";
            break;
        case 2:
        case 3:
            backgroundColor = "orange";
            break;
        case 4:
            backgroundColor = "green";
            break;
    }
    password.style.backgroundColor = backgroundColor

    if (password.value !== ripetiPassword.value) {
        ripertiText.style.backgroundColor = "red"
    }
    else
    {
        ripertiText.style.backgroundColor = "green"
    }
})