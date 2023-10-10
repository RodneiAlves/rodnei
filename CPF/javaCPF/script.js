class Cpf{
    constructor(cpfenviado) {
     this.cpfenviado
     Object.defineProperty(this,'cpflimpo',{
        writable:true,
        enumerable:true,
        configurable:false,
      value: cpfenviado.replace(/\D+/g,'')  
     });
      
    } 

    sequencia(){
    return this.cpflimpo.charAt(0).repeat(11)===this.cpflimpo;
    }
    geracpf(){
     const parcial = this.cpflimpo.slice(0, -2)
     const digito1 = this.geradigito(parcial)
     const digito2=this.geradigito(parcial+digito1)
     this.novoCpf= parcial+digito1+digito2
    }
    geradigito(parcial){
    let total =0
    let reverso=parcial.length+1
     for (let strnumerica of parcial){
         total += reverso*Number(strnumerica)
           reverso--
       }
       const digito =11 - (total % 11)
       return digito <=9 ? String(digito):'0'
    }
   valid(cpf){
    if(!this.cpflimpo)return false;
    if(typeof this.cpflimpo !== 'string') return false
    if(this.cpflimpo.length !== 11)return false
    if(this.sequencia())return false
    this.geracpf()
    return this.novoCpf===this.cpflimpo
  }

  }

  //let cpf=new Cpf('091.245.425.39')
  //cpf=new Cpf('.999.999.99')
    