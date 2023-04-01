//Cuanod usas queryselector, necesitas indicar que es lo que le estas pasando como atributo, si una eiqueta, una clase o un id, peor en caso de classelement y getelementbyid, no es necesario, solo es pasarleel nommbre de la clase
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input')

//Imprime el contenido de lo que tenga el html
console.log(h1)

//Imprime las propiedades de la etiqueta como tal
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

//Modificacion de contenido de una etiqueta de un html,. podemos insertar no solo texto sino etiquetas tambien
h1.innerHTML = 'Yoooo <br> Feo';

//Modificacion solo de texto
h1.innerText = 'Yoooo <br> Feo';

//Acceder a los atributos o clases que tiene una etiqueta
console.log(h1.getAttribute('pantalla'))

//Modificar un atributo
h1.setAttribute("class", "yoo")

//Funcion que funciona solo con las clases

//Agregar clase
h1.classList.add('rojo')
//Eliminar la clase
h1.classList.remove('rojo')

//Poner y quitar la clase dependiendo si la tiene o no
h1.classList.toggle('rojo')

//devuelve true o false si contiene la clase
h1.classList.contains('rojo')

//Modificar el valor de alguna etiqueta
input.value = "123456"

//Crear elemento y meterlo a alguna etiqueta
const img = document.createElement('img');
img.setAttribute('src', 'https://scontent.fgdl9-1.fna.fbcdn.net/v/t39.30808-6/327157172_943799526998361_1785325676871163482_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGhbi0XzXhZMkmD4UAD_yne_K9O1P8gGt_8r07U_yAa35sFqV6lHMUl-qzu1sjB2Z5qkdhgR6_MlKB-VFQR0KRE&_nc_ohc=sJe0v94pwHoAX_Tlci6&_nc_ht=scontent.fgdl9-1.fna&oh=00_AfDbpLHcJCpMjsLfiLbChuvm4aMgBUi05OivEMCrRojI4g&oe=642C8257')

pid.appendChild(img);