function Nome(){
     /*this.clicar= () =>{
        document.addEventListener('click',(e)=>{
        let el=e.target
        if(el.classList.contains('enviar')){
        this.pegaval()
        }
        })
    }
    this.pegaval=()=>{
     let nome=document.querySelector('.nome')
     let nacimento=document.querySelector('#Idade')
     let telefone =document.querySelector('#Telefone')
     let cpf =document.querySelector('#CPF')
     let nome1=(nome.value)
     let Naciment1=(nacimento.value)
     let tel1=(telefone.value)
     let cpf1=(cpf.value)
      console.log([nome1,Naciment1,tel1, cpf1])
    }*/

   Nome.prototype.clicar= () =>{
        document.addEventListener('click',(e)=>{
        let el=e.target
        if(el.classList.contains('enviar')){
        this.pegaval()
        }
        })
    }
    this.pegaval=()=>{
     let nome=document.querySelector('.nome')
     let nacimento=document.querySelector('#Idade')
     let telefone =document.querySelector('#Telefone')
     let cpf =document.querySelector('#CPF')
     let nome1=(nome.value)
     let Naciment1=(nacimento.value)
     let tel1=(telefone.value)
     let cpf1=(cpf.value)
     console.log([nome1,Naciment1,tel1, cpf1])
     
    }


}

let n2 = new Nome()
n2.clicar()

