// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; 
const agregarAmigo = () => {
   let amigo = document.getElementById('amigo').value

   console.log(amigo)
if(amigo==''){alert("Ingrese un nombre válido")}
else {
    amigos.push(amigo)
    console.log(amigos)
   const ul = document.getElementById('listaAmigos')
   const li = document.createElement("li")
   li.appendChild(document.createTextNode(amigo))
   ul.appendChild(li)
   document.getElementById('amigo').value= ''
}
}
const sortearAmigo = () => {
    if(amigos.length>0){
        const amiguito = Math.floor(Math.random() * amigos.length);
        const ul = document.getElementById('resultado')
   const li = document.createElement("li")
   li.appendChild(document.createTextNode(amigos[amiguito]))
   ul.appendChild(li)
    }
    else{alert("No existen amigos para sortear")

    }
}


