function Verificar(){
let data= new Date;
let ano = data.getFullYear();

let doc = document.addEventListener('click',(e)=>{
 let el = e.target;
if(el.classList.contains('verificar')){
  let idade=document.querySelector('#anonascimento').value;
  if(idade==0 || idade > ano){
  
   
  }else{
    
  }
}
});

}



 Verificar()



