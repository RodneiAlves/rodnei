
  const form =document.querySelector('.form')

  form.addEventListener('submit',function(e){
  e.preventDefault();

 const n = document.querySelector('#nome')
 const i = document.querySelector('#idade')
 const p = document.querySelector('#peso')
 const a = document.querySelector('#altura')

//pegando os valores do imput
const nome =(n.value)
console.log(nome)
const idade =(i.value)
const peso =Number(p.value);
const altura =Number(a.value);

//verificando se é valiso ou não
 if(!altura){
  resultado('altura invalido preencha todos os campos', false);
  return;
 }

   
if(!peso){
  resultado('peso invalido', false);// função resultado 
   return;

}


  const imc = getimc(peso,altura) //chamada da função getimc e sera guar dada na variavel
  const nivelimc= getnivelimc(imc);

  const msg=(`seu nome é ${nome}, sua idade é ${idade} o calculo do seu imc foi ${imc},${nivelimc}`)
 
  resultado(msg,true)
 

  });

function getnivelimc(imc){
const nivel= ['abaixo do peso','peso normal','sobre peso','obesidade grau 1'
,'obesidade grau 2','obesidade grau 3'];

 if (imc>=39.9){
  return nivel[5]
 } 
 if (imc>=34.9){
  return nivel[4]
 }
  if (imc>=29.9){
  return nivel[3]
 }
  if (imc>=24.9){
  return nivel[2]
 }
  if (imc>=18.5){
  return nivel[1]
 } 
 if (imc<18.5){
  return nivel[0]
 }


 }


// função para calcular imc
  function getimc(peso,altura){
    const imc = peso/altura **2;
   return imc.toFixed(2)
  }
   
 //  função para criar paragrafo
   function criap(){
    const p =document.createElement('p');//criando um paragrafo e guardando na variavel p
    return p;
   }



   function resultado(msg,valid){
    const res = document.querySelector('#resut')
    res.innerHTML='';//recebendo o valor vazio
    const p= criap() //receber a função e guarda na variavel
    if(valid){
      p.classList.add('paragrafo')// se for true vai executar o css
  }else{
    p.classList.add('bad')//valida se é não é valido a classe valid e executa o css
  }

    p.innerHTML=msg//p vai escrever na msg
    res.appendChild(p);//p vai adicionar ao res
   }

