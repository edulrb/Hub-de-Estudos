function contar() {
    var inicio = Number(window.document.querySelector(`input[name="txtini"]`).value)
    var fim = Number(window.document.querySelector(`input[name="txtfim"]`).value)
    var passo = Number(window.document.querySelector(`input[name="txtpasso"]`).value)
    var res = window.document.querySelector(`p.res`)
    var initCont = false
    for(var cont = inicio; cont <= fim; cont += passo) {
        if (initCont == false) {
            res.innerHTML = `Contando: ${cont} 👉`
            var initCont = true
        }
        else {
            res.innerHTML += `${cont} 👉`
        }
    } 
    res.innerHTML += `🏁`
}