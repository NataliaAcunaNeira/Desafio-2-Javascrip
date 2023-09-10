let initialPriceElement = document.querySelector('.initialPrice'); // variables con clases en el DOM
let quantityElement = document.querySelector('.quantity');
let masButton = document.querySelector('.mas');
let menosButton = document.querySelector('.menos');
let totalSection = document.querySelector('.total-section');
let valorTotalElement = document.querySelector('.valor-total');
const formateador = new Intl.NumberFormat("en", { style: "currency", "currency": "CLP" });

masButton.addEventListener('click', () => {  //al hacer click aumenta el precio 
    quantityElement.innerHTML++;
    valorTotalElement.innerHTML = formateador.format(quantityElement.innerHTML * initialPriceElement.innerHTML);
});

menosButton.addEventListener('click', () => { //al hacer click disminuye el precio 
    quantityElement.innerHTML--;
    valorTotalElement.innerHTML = formateador.format(quantityElement.innerHTML * initialPriceElement.innerHTML);
});





