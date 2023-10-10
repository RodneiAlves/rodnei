class Formulario {
  constructor() {
    this.Formulario = document.querySelector('.formulario')
    this.event()
  }


  event() {
    this.Formulario.addEventListener('submit', e => {
      e.preventDefault()
    let campos = this.campos()
    let campossenhas=this.camposS()

    if(campos && campossenhas) {
      alert('formulario enviado')
      this.Formulario.submit();
    }
    });
  }

  camposS(){

    let valid = true
    let senha =document.querySelector('.senha')
    let repetir =document.querySelector('.repetirsenha')
    if(senha.value !== repetir.value){
      valid = false
     this.criaerro(senha,'os campos senhas e repetir senha tem que ser iguas')
     this.criaerro(repetir,'os campos senhas e repetir senha tem que ser iguas')
   
    }
    if(senha.value.length< 5 ||senha.value.length > 8){
      this.criaerro(senha,'a senha tem que conter de 5 a 8 digitos')
      this.criaerro(repetir,'a senha tem que conter de 5 a 8 digitos')
      valid = false
    }
    return valid
  }

  campos() {
    let valid = true
    let formes = this.Formulario.querySelectorAll('.erro')
    for (let remover of formes) {
      remover.remove()
    }

    let form = this.Formulario.querySelectorAll('.validar')
    for (let formes of form) {
      let label = formes.previousElementSibling.innerHTML
      if (!formes.value) {
        this.criaerro(formes, `O campo ${label} não pode estar em branco`)
        valid = false
      }
      if (formes.classList.contains('usuario')) {
        if (!this.usuario(formes)) valid = false
      }


      if (formes.classList.contains('cpf')) {
        if (!this.cpf(formes)) valid = false
      }
    }
    return valid
  }
  cpf(formes) {
    let cpf = new Cpf(formes.value)
    let valid = true 
    if (!cpf.valid()) {
    this.criaerro(formes, "o seu cpf não é valido")
      return false
    }
    return valid
   
  }

  usuario(formes) {
    let valid = true
    let usuario = formes.value
    
    if (usuario.length < 3 || usuario.length > 8) {
      this.criaerro(formes, 'o campo usuario tem que conter entre 3 e 8 caracteres')
      valid = false
    }
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaerro(formes, 'usuario precisa conter letra e numeros')
      valid = false
    }
   return valid
  }

  criaerro(formes, msg) {
    let div = document.createElement('div')
    div.innerText = msg
    div.classList.add('erro')
    formes.insertAdjacentElement('afterend', div)
  }




}
const p = new Formulario()
