//Ejercicio 1
let tieneBorde = false

let imagen = document.querySelector('#image');
imagen.addEventListener('click', () => {
    if (tieneBorde == false) {
        imagen.classList.add("borde-rojo")
        tieneBorde = true
    } else {
        imagen.classList.remove("borde-rojo")
        tieneBorde = false
    }

});


//Ejercicio 2

let sanz = document.querySelector('#sanz');
let lolito = document.querySelector('#lolito');
let melendi = document.querySelector('#melendi');
let totalsection = document.querySelector('#totalsection');

let valorsanz = 0;
let valorlolito = 0;
let valormelendi = 0;

sanz.addEventListener('change', (event) => {
    valorsanz = event.target.valueAsNumber || 0;
    let total = valorsanz + valorlolito + valormelendi;
    if (total <= 10) { totalsection.innerHTML = "Llevas " + total + " Stickers" }
    else { totalsection.innerHTML = "Llevas demasiados stickers" }
})
lolito.addEventListener('change', (event) => {
    valorlolito = event.target.valueAsNumber || 0;
    let total = valorsanz + valorlolito + valormelendi;
    if (total <= 10) { totalsection.innerHTML = "Llevas " + total + " Stickers" }
    else { totalsection.innerHTML = "Llevas demasiados stickers" }
})
melendi.addEventListener('change', (event) => {
    valormelendi = event.target.valueAsNumber || 0;
    let total = valorsanz + valorlolito + valormelendi;
    if (total <= 10) { totalsection.innerHTML = "Llevas " + total + " Stickers" }
    else { totalsection.innerHTML = "Llevas demasiados stickers" }
})



//Ejercicio 3
let boton3 = document.querySelector('#boton3');
boton3.addEventListener('click', () => {
    let primero = document.querySelector('#selector-1').value
    let segundo = document.querySelector('#selector-2').value
    let tercero = document.querySelector('#selector-3').value
    if (primero == '9' && segundo == '1' && tercero == '1') {
        resultado = document.querySelector('#resultado')
        resultado.innerHTML = 'Password 1 correcto'
    }
    else if (primero == '7' && segundo == '1' && tercero == '4') {
        resultado = document.querySelector('#resultado')
        resultado.innerHTML = 'Password 2 correcto'
    }
    else {
        resultado = document.querySelector('#resultado')
        resultado.innerHTML = 'password incorrecto'
    }

});









