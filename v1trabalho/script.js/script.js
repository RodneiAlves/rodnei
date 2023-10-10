let a = document.querySelector('.nome' )

 const data= new Date();
 
 const dato= data.getDay();
const mes1= data.getMonth();
const dia=data.getDate()
const ano= data.getFullYear()
 const seman = diaDaSemana(dato)
 const s = mes(mes1)
a.innerHTML=`${seman} /${dia} /${s} /${ano}`

 function diaDaSemana(semana1){
 let semana=['domindo','segunda-feira','terca-feira','quarta-feira','quinta-feira','sexta-feira','sabado']
 return semana[semana1];
 }

 function mes(meses){
    const mese=['janeiro','fevereiro','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro ']
   return mese[meses-1];
 }

let pessoa=['maca','limão','pera'];
for (let index in pessoa)
console.log(pessoa[index])

a.style.color='green'
a.style.background='red'

