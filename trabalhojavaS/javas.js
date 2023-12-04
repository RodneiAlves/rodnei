let api='https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
//api da nasa

axios(api)
.then(dados=>{
 
 let dado= dados.data
 console.log(dado)
 if(dado.url) {

  let img=document.querySelector('.imagem')
  img.src=dado.url;
 }
 if(dado.title) {
  let header=document.querySelector('.titulo')
  let h1=document.createElement('h1')
  h1.innerHTML=dado.title
  header.appendChild(h1)
 }
})


 

  

  









