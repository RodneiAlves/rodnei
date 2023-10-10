function contar(){

var numero=document.getElementById('numero')
var numero1= document.getElementById('numero1')
var passo=document.getElementById('passo')
var res =document.getElementById('res')


if (numero.value.length == 0 || numero1.value.length== 0 || passo.value.length == 0){
 window.alert('[erro] verifique os dados')
}else {
res.innerHTML = 'contando: '
 var n =Number(numero.value)
 var n1 =Number(numero1.value)
var p =Number(passo.value)
if(p <=0){
window.alert('você n digitou um passo então vai ser considerado o passo 1')
p =1
}
if( n < n1){
    for(var c = n;c <= n1; c += p){
        res.innerHTML += `${c} \u{1F449}`
        
        }
}else {
for(var c =n;c >=n1 ;c-=p ){
    res.innerHTML += `${c} \u{1F449}`

}

}
res.innerHTML +=`\u{1F3c1}`
}
}


 
