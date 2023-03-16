var balls = document.querySelector('.balls') //armazena a div balls
var quant = document.querySelectorAll('.slides .image') //armazena as divs que contem as imagens
var atual = 0 //armazena a posição atual da imagem que é mostrada 
var imagem = document.getElementById('atual') //armazena a imagem atual sendo mostrada
var next = document.getElementById('next') //armazena a div do botão de proximo
var voltar = document.getElementById('voltar') //armazena a div do botão de voltar
var rolar = true //armazena se a imagem vai ser rolada

let miniaturas = document.getElementsByClassName("miniaturas"); //armazena as miniaturas 

for(let i=0; i < quant.length; i++){ //pega a quantidade de imagens existentes e cria o mesmo quantidade em bolinhas
    var div = document.createElement('div') //cria uma div
    div.id = i //atribui o id da nova div a um numero equivalente a i
    balls.appendChild(div) //a nova div é atribuida como filha da div balls
}

for(let i=0; i< miniaturas.length; i++){ //varre todas as divs "miniaturas" verificando se ouve algum click
    miniaturas[i].addEventListener('click', ()=>{ //verifica o click
        atual = i; //a variavel atual recebe o valor da imagem atual
        rolar = false //recebe o valor falso desabilitando a rolagem automatica
        slide() //chama a fução slide e a executa
    })
}

document.getElementById('0').classList.add('imgAtual') //pega a div balls com id 0 e atribui a classe imgAtual

var pos = document.querySelectorAll('.balls div') //armazena todas as divs "bolinhas"(seus ids são de zero ao tanto de imagens existentes)

for(let i=0; i< pos.length; i++){ //varre todas as divs dentro da div balls verificando se ouve algum click
    pos[i].addEventListener('click', ()=>{ //verifica o click
        atual = pos[i].id //atual recebe o id da bolinha clickada
        rolar = false //recebe o valor falso desabilitando a rolagem automatica
        slide() //chama a fução slide e a executa
    })
}

voltar.addEventListener('click', ()=>{ //verifica o click na seta de voltar
    atual-- //faz uma subtração de -1 o que faz voltar a imagem anterior
    rolar = false //recebe o valor falso desabilitando a rolagem automatica
    slide() //chama a fução slide e a executa
})
next.addEventListener('click', ()=>{
    atual++ //faz uma soma de +1 o que faz ir para a imagem posterior
    rolar = false //recebe o valor falso desabilitando a rolagem automatica
    slide() //chama a fução slide e a executa
})

function slide(){
    if(atual >= quant.length){ //verifica se a imagem atual é maior ou igual a tanto de imagens
        atual = 0 //caso verdadeiro a variavel atual recebe o valor de 0 o que retorna a primeira imagem 
    }
    else if(atual <0){ //verifica se a imagem atual não é menor que 0
        atual = quant.length-1 //caso verdadeiro pega a quantidade de imagens existentes e subitrai 1 o que retorna a utima imagem
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual') //seleciona a div com classe imgAtual (que é uma das bolinhas) e remove a classe imgAtual
    imagem.style.marginLeft = -1024*atual+'px' //atribui uma propriedade css e desloca a imagem atual no referencial left a -1024 vezes a posição atual (medida usada: "px")
    document.getElementById(atual).classList.add('imgAtual') //seleciona a div (que é a bolinha que representa a imagem atual) e adiciona a classe imgAtual
}
setInterval(()=>{ //fução loop que é executada em intervalos de 4s 
    if(rolar){ //verifica se rolar é igual a true
        atual++ //faz uma soma de +1 o que faz ir para a imagem posterior
        slide() //chama a fução slide e a executa
    }
    else{ //se o if anterior não for executado
        rolar = true //rolar é atribuido o valor true o que apos 4s se nenhuma função de click for executada resutara na rolagem automatica
    }
},4000) //4000 ou 4s em milesegundos
