function c(){
    return{
      display:document.querySelector('.display'),
     iniciar(){
      this.clique()
     },

     clique(){
       document.addEventListener('click', (e)=>{
          let el= e.target
           if(el.classList.contains('btn-num')){
             this.display.value+=el.innerText
           }
           if (el.classList.contains('btn-del')){
            this.display.value=this.display.value.slice(0,-1)
           }
           if(el.classList.contains('btn-clear')){
            this.display.value=""
           }
           if(el.classList.contains('btn-eq')){
            let conta=this.display.value
            try{
            this.display.value=eval(conta)
           }catch(e){
            alert('conta invalida')
           }
           }
       });

     },

    }
}
let cal=c();
 cal.iniciar()