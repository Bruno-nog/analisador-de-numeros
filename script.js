let numDigitado = document.getElementById('num-digitado')
let btnFinalizar = document.getElementById('btn-fin')
let btnAdicionar = document.getElementById('btnAdicionar')
let res = document.querySelector('.res')

let numerosDigitados = []

btnAdicionar.addEventListener('click', () => {
    let valorDigitado = parseFloat(numDigitado.value)

    if(numerosDigitados.includes(valorDigitado)){
        alert(`O valor ${valorDigitado} ja foi adicionado!`)
    }else if (valorDigitado >= 1 && valorDigitado <= 100){
        let analisadorNum = document.getElementById('analisador-num')
        let option = document.createElement('option')
        option.text = `Valor ${valorDigitado} adicionado.`
        analisadorNum.appendChild(option)
        numDigitado.value = ''
        numerosDigitados.push(valorDigitado)
        res.innerHTML = ''
    }else{
        alert(`Por favor digite um valor entre 1 e 100!`)
    }   
    numDigitado.focus()
})


btnFinalizar.addEventListener('click', () => {
    
    res.innerHTML +=`Quantidade dos numeros <strong>${numerosDigitados.length}</strong><br>`
    let somados = numerosDigitados.reduce((total, num) => total + num, 0)
    res.innerHTML += `numeros somados <strong>${somados}</strong><br>`
    let menorNum  = Math.min(...numerosDigitados)
    res.innerHTML += `O menor numero é <strong>${menorNum}</strong><br>`
    let maiorNum  = Math.max(...numerosDigitados)
    res.innerHTML += `O maior numero é <strong>${maiorNum}</strong><br>`
    let media = somados / numerosDigitados.length
    res.innerHTML += `A media dos numeros é <strong>${media}</strong><br>`
    
})
