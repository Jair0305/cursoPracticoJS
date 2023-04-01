const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const p = document.querySelector('#result')
const form = document.querySelector('#form')

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event)
{
    console.log({event})
    event.preventDefault();
    // console.log(input1.value + input2.value)
    const sumaInputs = input1.value + input2.value;

    p.innerText = "Resultado: " + sumaInputs;
}

btn.addEventListener('click', btnOnClick);

function btnOnClick(event)
{
    console.log({event})
    event.preventDefault();
    // console.log(input1.value + input2.value)
    const sumaInputs = input1.value + input2.value;

    p.innerText = "Resultado: " + sumaInputs;
}
