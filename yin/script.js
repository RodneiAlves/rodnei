const botao= document.querySelector('.menu span img')
const menu= document.querySelector('.nav')

botao.onclick = ()=>{
    menu.style.display="none"
}
const ruby = document.querySelector("#ruby")

ruby.onclick = ()=>{
ruby.style.background='green'
kagura.style.background='rgb(101, 107, 12)'
yin.style.background='rgb(101, 107, 12)'
let img = document.querySelector(".yin img")
img.src="imagens/ruby.jpg"
let historia = document.querySelector('#historia')
historia.innerHTML="Ruby vivia na Floresta Negra desde a juventude. Ela perdeu sua família para os lobos, portanto, sente um duradouro ódio por eles. Agora ela se tornou perita em matar lobos graças ao caçador Roger que uma vez salvou sua vida. Ruby aprendeu a como se defender, e constantemente à atenta em sua força física para permanecer lutando. Ela usará suas habilidades para continuar suas aventuras na Terra do Amanhecer, esperando um dia encontrar o homem que a ajudou. Ruby nunca será intimidada por ninguém novamente; ela quer provar sua força para o mundo."
}
const kagura = document.querySelector("#kagura")

kagura.onclick = ()=>{
ruby.style.background='rgb(101, 107, 12)'
yin.style.background='rgb(101, 107, 12)'   
kagura.style.background='green'

let img = document.querySelector(".yin img")
img.src="imagens/kagura.jpg"
let historia = document.querySelector('#historia')
historia.innerHTML='Mestre Onmyouji é uma profissão que utiliza de técnicas poderosas de yin-yang para espantar os espíritos e energias ruins, técnica a qual circula entre yin e yang. A família da Kagura é uma das mais poderosas vertentes do Onmyouji e a mais antiga também, a Mestre Onmyouji mais poderosa, Seimei, que é antepassada dessa grande família. A Kagura é a Mestre Onmyouji com mais potencial de toda a família, então foi dado a ela um item yin-yang mágico que foi passado de geração em geração - Guarda-Chuva Seimei. Dizem que a Seimei utilizou este guarda-chuva para absorver muita energia e forças espirituais, e agora já possui a vida e a inteligência própria, e só obedece aos comandos da sua possuidora. A Kagura soube que o amigo de infância Hayabusa foi para a Terra do Amanhecer para fazer uma missão, então saiu de casa escondida com o guarda-chuva para a Terra do Amanhecer para ajudar o Hayabusa na sua missão'
}
const yin = document.querySelector("#yin")

yin.onclick = ()=>{
kagura.style.background='rgb(101, 107, 12)'

yin.style.background='green'


    let hyin ="Um dia, há dezessete anos atrás, um bebê foi deixado em um cesto que flutuou em direção às Quedas Florais, um vale sereno nos arredores do Altar do Dragão. O bebê foi adotado por um morador local e batizado de Yin, uma homenagem ao elemento da Terra para o ano do Tigre, o ano em que o garoto foi encontrado Aos dez anos de idade, Yin se tornou um dos vários praticantes de artes marciais das Quedas Florais. Ele era magro, porém dotado de uma grande força que o fez ser visto como um gênio das artes marciaisEmbora fosse poderoso, Yin não conseguia entender a intenção de matar, pois era bondoso por natureza. Para ele, toda luta era apenas uma luta entre amigos, pois o garoto nunca precisou lutar até a morte. Leia a biografia completa do herói e descubra como Yin conheceu Wanwan, Yu Zhong e teve o encontro fatídico com o deus maligno Lieh, que mudaria sua vida para sempre."
    let historia = document.querySelector('#historia')
let img = document.querySelector(".yin img")
historia.innerHTML=hyin
img.src="imagens/yin_mobile_legends_png_transparant_by_dechunf_deykla1-fullview.png"
}


