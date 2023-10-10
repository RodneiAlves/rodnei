/*fetch('pessoas.json')
    .then(resposta => {
        return resposta.json()
    }).then(json => {
        carregael(json)
    })
   
   axios('Pessoas.json')
    .then(carrega=>{
     return carregael(carrega.data)}
    )
   

function carregael(carrega) {
    const tabe = document.createElement('table')

    const li = document.createElement("td")
    const th= document.createElement('th')
    th.innerHTML="Nome"
    li.appendChild(th);
    tabe.appendChild(th)

      const li1 = document.createElement("td")
      const th1= document.createElement('th')
      li1.classList.add('td')
       th1.innerHTML="Idade"
        li1.appendChild(th1);
        tabe.appendChild(th1)

    const li2 = document.createElement("td")
    li2.classList.add('td')
      const th2= document.createElement('th')
       th2.innerHTML="Salario"
        li2.appendChild(th2);
        tabe.appendChild(th2)

    tabe.classList.add('tabela')
    for (let pessoa of carrega) {

        
        
        const tr = document.createElement('tr');
        tr.classList.add('tr')
      
      
        let td = document.createElement('td');
        td.classList.add('td')
        td.innerHTML = pessoa.nome;

        tr.appendChild(td)

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2)

        let td3 = document.createElement('td');

        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3)
        tabe.appendChild(tr)
        
    }
    const resultado = document.querySelector('.result')
    resultado.appendChild(tabe)

}
*/
