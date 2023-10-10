const p= document.querySelector('.paragrafo')//selecionando a classe
const ps = p.querySelectorAll('p');//selecionando todos os paragrafos da div
 const getb=getComputedStyle(document.body)//pegando a cor do body
 const cor =getb.backgroundColor;//verificara a cor com o console
 
 for(let p of ps){
    p.style.backgroundColor=cor
    p.style.color='white'
 }


