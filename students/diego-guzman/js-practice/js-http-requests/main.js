// 1- Crear un Endpoint (una URL con datos) de tipo GET con la página designer.mocky.io, con la siguiente respuesta (200 ok):

async function printImg() {
    const r = await fetch('https://run.mocky.io/v3/2f1c2441-4aa7-48a0-9759-93f5c7c28db3')
    const d = await r.json();
    const name = d.name;
    const img = d.image;

    const pNameDOM = document.createElement('p');
    pNameDOM.textContent = name;
    document.body.appendChild(pNameDOM);
    const pImgDOM = document.createElement('img');
    pImgDOM.setAttribute('src',`${img}`);
    document.body.appendChild(pImgDOM);
}
printImg()


// 2. Crear un endpoint de tipo PUT (con la página de beeceptor) con el siguinete pah (/primer-put) que no responda nada en el body y mandarle la siguiente información: 

// {
//   status: 'Encantado con lo que aprendo'
// }

// 2.1 En un HTML tener un botón que cuando se haga click se envíe el PUT del ejercicio 2

const myFirstPutRequest = {
    method: 'PUT',
    body: JSON.stringify({status: 'Encantado con lo que aprendo'}),
}

async function putRequest(){
const r = await fetch('https://mytestapi.free.beeceptor.com/primer-put',myFirstPutRequest);
const d = await r.json();
console.log(d)
}

const button = document.querySelector('.input__submit');
button.addEventListener('click',()=>{
   putRequest();
})
//

const myFirstPutRequest = {
    method: 'PUT',
    body: JSON.stringify({status: 'Encantado con lo que aprendo'}),
}

async function putRequest(){
const r = await fetch('https://mytestapi.free.beeceptor.com/error-response',myFirstPutRequest);
const d = await r.json();
console.log(d)
}

const button = document.querySelector('.input__submit');
button.addEventListener('click',()=>{
   putRequest();
})
