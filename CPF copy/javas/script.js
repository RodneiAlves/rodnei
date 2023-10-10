class Formulario{
  constructor(){
  this.formulario=document.querySelector('.formulario')
  this.enviar()
  }
 enviar(){
  this.formulario.addEventListener('submit',e=>{
  let el=  e.preventDefault();
  console.log('formulario n enviado')
  })
 }






}

const form =new Formulario