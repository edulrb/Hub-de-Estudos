function verificar(){
    var dateAtual = new Date()
    var anoAtual = Number(dateAtual.getFullYear())
    var res = window.document.querySelector("p.res")
    var anoNasc = Number(window.document.querySelector("input#anoNasc").value)
    var sex = window.document.querySelector("input[name=sex]:checked").value
    var sexLower = sex.toLowerCase()
    var idade = anoAtual - anoNasc
    if (idade >= 0 && idade <= 200) {
        if(idade != 1) {
            res.innerHTML = `Detectamos ${sex} com ${idade} anos.` 
        }
        else {
                res.innerHTML = `Detectamos ${sex} com ${idade} ano.`                    
        }
            if(idade <= 3) {
                window.document.querySelector("div.res").style.backgroundImage = `url(images/${sexLower}/0mais.png)`
            }
            else if(idade > 3 && idade <= 8) {
                window.document.querySelector("div.res").style.backgroundImage = `url(images/${sexLower}/3mais.png)`
            }
            else if(idade > 8 && idade <= 12) {
                window.document.querySelector("div.res").style.backgroundImage = `url(images/${sexLower}/8mais.png)`
            }
            else if(idade > 12 && idade <= 16) {
                window.document.querySelector("div.res").style.backgroundImage = `url(images/${sexLower}/12mais.png)`
            }
            else if(idade > 16 && idade <= 24) {
                window.document.querySelector("div.res").style.backgroundImage = `url(images/${sexLower}/16mais.png)`
            }
            else if(idade > 24 && idade <= 34) {
                window.document.querySelector("div.res").style.backgroundImage = `url(images/${sexLower}/24mais.png)`
            }
            else if(idade > 34 && idade <= 50) {
                window.document.querySelector("div.res").style.backgroundImage = `url(images/${sexLower}/34mais.png)`
            }
            else if(idade > 50 && idade <= 75) {
                window.document.querySelector("div.res").style.backgroundImage = `url(images/${sexLower}/50mais.png)`
            }
            else if(idade > 75 && idade <= 90) {
                window.document.querySelector("div.res").style.backgroundImage = `url(images/${sexLower}/75mais.png)`
            }
            else if(idade > 90) {
                window.document.querySelector("div.res").style.backgroundImage = `url(images/${sexLower}/90mais.png)`
            }
    } else {
        res.innerHTML = `[ERRO] Data de nascimento invalida!`
    }
}