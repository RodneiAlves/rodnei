 let inpu =document.querySelector('.text')
 let butto=document.querySelector('.buton')
 let lista=document.querySelector('.L')


//criando botão
 function criabut(li){
 let but = document.createElement('button')//criando botão
 but.innerText='apagar' //colocando nome no botão
 li.innerText+=' ';//adicionando um espaço no texto ja adicionado do lik 
 but.setAttribute('class','apagar')// criando o elemento classe no botão, e falando qual vai ser o nome da classe adicionada
  li.appendChild(but)//colocando o botão no lik 

 }
 butto.addEventListener('click',()=>{
  if(!inpu.value) {
    alert('coloque um valor no input')
  }else{
    criarTarefas(inpu.value)
    limpar()
  }
 });

function li(){
let li = document.createElement('li')
return li;
}

function criarTarefas(texto1){
let lik = li()
lik.innerHTML=texto1
lista.appendChild(lik)
criabut(lik)
salvarTarefa()
}



function limpar(){
  inpu.value=""
  inpu.focus();
}

document.addEventListener('click',(e) =>{
 let el=e.target
 if(el.classList.contains('apagar')){
  el.parentElement.remove();//remove o apagar do elemento pai
  salvarTarefa();
}

})
function salvarTarefa(){
const lis=lista.querySelectorAll('li');//pegando todos meus li da minha lista
const listaDeTarefas=[];
for( let lista of lis){//clia a lista
  let tarefa = lista.innerText;//lista recebe um innertext
  tarefa = tarefa.replace('apagar','')//troca o nome do botão por nada
  listaDeTarefas.push(tarefa)
 
}

const tarefaJson = JSON.stringify(listaDeTarefas)//tranformando em uma string com JSON
localStorage.setItem('tarefa', tarefaJson)//salvando-primeiro nome pra recuperar depois segundo o que eu estou salvando

}

function adiciona(){
 const t = localStorage.getItem('tarefa')
 const L = JSON.parse(t)
 for(let ta of L){
criarTarefas(ta)
}


}
adiciona()
