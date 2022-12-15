const posts = [{
id:1,
title: 'Mi primer post',
image: 'https://img.com',
tags: ['javascript', 'webdevelopment'],

},{
    id:2,
    title: 'Mi experiencia con React',
    image: 'https://img.com/2',
    tags: ['javascript', 'webdevelopment', 'react'],
},{
    id:3,
title: 'Por qué dejé Angular',
image: 'https://img.com/3',
tags: ['javascript', 'webdevelopment', 'angular'],
}
]


/*
//Find

const janderTitulo= posts.find(post => {
    return post.title == 'Mi primer post';
});
const janderID =posts.find(post=>post.id ==3);
console.log(janderTitulo);
console.log(janderID);
*/





/* SOME (Comrpueba si hay alguna palabra, número... Devuelve True o False)

const jander = posts.some(post=> post.id==4);
const janderIncludes = posts.some(post=> post.title.includes('dejé')); //Añadir includes para ver si hay alguna palabra
console.log(jander);
console.log(janderIncludes); */

/* EVERY (Comprueba si se cumple en TODOS los elementos del objeto )

const jander = posts.every(post=>post.tags.includes('javascript'));
console.log(jander); */

//MAP
/*
const janderMap = posts.map(janderMap=>janderMap.title);

console.log(janderMap);

*/

//FILTER
/*
const jander = posts.filter(jander=>jander.tags.includes('angular'));
console.log(jander);
*/

//REDUCE
/*
const jander = posts.reduce((allTags, post) =>{
     return [...allTags, ...post.tags];
},[]);
console.log(jander);

//Para que no aparezcan repetidas

const jander2 = posts.reduce((allTags,post) => {
    return Array.from(new Set([...allTags, ...post.tags]))
},[]);
console.log(jander2);



let suma=[2,3,2,10];
const jar =suma.reduce((p,c)=>p*c);
console.log(jar);

let cadena ="Pedro es un tarado inmaduro";
resultado = cadena.indexOf('tarado');
console.log(resultado);

let cadena1="123";
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

resultado=cadena1.padStart(3,random(1,9));
console.log(resultado);

let cadena2="123";
var x = Math.floor(Math.random()*31)+1;
console.log(x+cadena2);



function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }

   console.log(palindrome("Dabale arroz a la zorra el abad"));


   const facturas=[
    {
        precio: 23,
        cantidad: 1,
    },
    {
        precio: 19,
        cantidad: 2,
    },
    {
        precio: 14,
        cantidad:4,
    },  {
        precio: 22,
        cantidad: 1,
    },

   ]
const IVA = 1.21
   const totalFactura= facturas.map(i=> i.precio*i.cantidad*IVA);
totalFactura.forEach((i,index) => console.log("Elemento", index, i));
//console.log(totalFactura);
 
const sumaFactura= totalFactura.reduce((a,b)=> a+b);
console.log(sumaFactura);
*/


const data = [
    {
        "name": "milk",
        "units": 7
    },
    {
        "name": "potatoes",
        "units": 6
    }
]

//Nuevo array con los nombres de los objetos.

const nuevoArray = data.map(jar=> jar.name);
console.log(nuevoArray);
//Nuevo objeto

const nuevoObjeto = data.map(jar=>{
    return{
        ...jar,
        units: jar.units + 3
    }
});
console.log(nuevoObjeto);





//Filter

const r = data.filter(product=> product.units>6);
console.log(r);


//forEach

const days=["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sábado"];

days.forEach (value=>{
    console.log("Hoy es " +value);
});

document.querySelectorAll('.resaltado').forEach((obj, i)=> {
    obj.style.backgroundColor ='red';
    obj.textContent = i; //Cambia la h por el índice.
    });