const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const p = document.querySelector('#result')

function btnOnClick()
{
    // console.log(input1.value + input2.value)
    const sumaInputs = input1.value + input2.value;

    p.innerHTML = "Resultado: " + sumaInputs;
}
