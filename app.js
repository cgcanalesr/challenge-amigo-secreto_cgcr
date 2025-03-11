// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = []; 
const agregarAmigo = () => {
   let amigo = document.getElementById('amigo').value

   console.log(amigo)
if(amigo==''){alert("Ingrese un nombre válido")}
else {
    amigos.push(amigo)
    console.log(amigos)
    document.getElementById('amigo').value= ''

}
}


