var tabuada = window.document.getElementById("selTabuada")
function gerarTabuada() {
    clean()
    var txtNum = window.document.getElementById("txtnum").value
    var numTab = Number(txtNum)
    var multiAtual = 0
    if (txtNum.length != 0) {
        for(var cont = 1; cont <= 10; cont++) {
            var multiAtual = numTab * cont
            tabuada.innerHTML += `<option value="t${cont}">${numTab} x ${cont} = ${multiAtual}</option>`   
        }
    }
    else {window.alert("Digite um valor!") }
}
function clean() {
    tabuada.innerHTML = ``
}