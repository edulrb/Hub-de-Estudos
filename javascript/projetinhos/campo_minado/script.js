var slots = []
function carregarSlots() {
    /*var quantBombas = Number(prompt("Você quer jogar com quantas bombas?(1-40)"))
    while (quantBombas < 1 || quantBombas > 40) {
        var quantBombas = Number(prompt("Você quer jogar com quantas bombas?(1-40)"))  
    }*/ 
    var quantBombas = 10
    addBombas(quantBombas)
    campo = window.document.querySelector('div#campo')
    for(var cont = 1; cont <= 81; cont++) {
        campo.innerHTML += `<span id="s${cont}" class="slot" onclick="clickSlots(${cont})" oncontextmenu="colocarBandeira(${cont})"></span>`
        if(cont%9 == 0) {
            campo.innerHTML += `<br>`
        }
    }
}

function clickSlots(casa) {
localSlot = window.document.getElementById(`s${casa}`)
    if (!(localSlot.style.backgroundColor == "orange")) {
        casaNumerada = false
        casaNum = Number(casa)
        if (slots[casaNum] == "bomba") {
        localSlot.style.backgroundColor = 'red'
        } else {
            localSlot.style.backgroundColor = 'gray'
            slots[casa] = "visitado"
        }
        if(checarArredor(casaNum) > 0) {
            casaNumerada = true
            localSlot.innerHTML = `<p class="bArr">${checarArredor(casaNum)}</p>`
        }
        if(casaNumerada == false) {
            vazioArredor(casa)
        }
    }

}
function addBombas(quantidade) {
    slots = [] 
    for (var i = 1; i <= 81; i++) {
        slots[i] = "vazio"
    }
    var bombasColocadas = 0
    
    while (bombasColocadas < quantidade) {
        var sorteio = Math.floor(Math.random() * 81) + 1
        
        if (slots[sorteio] != "bomba") {
            slots[sorteio] = "bomba" 
            bombasColocadas++ 
        }
    }
    
}
function checarArredor(casa) {
    bombasArredor = 0
    if(slots[casa+1] == "bomba") {
        bombasArredor ++
    }
    if(slots[casa-1] == "bomba") {
        bombasArredor ++
    }
    if(slots[casa+8] == "bomba") {
        bombasArredor ++
    }
    if(slots[casa-8] == "bomba") {
        bombasArredor ++
    }
    if(slots[casa+9] == "bomba") {
        bombasArredor ++
    }
    if(slots[casa-9] == "bomba") {
        bombasArredor ++
    }
    if(slots[casa+10] == "bomba") {
        bombasArredor ++
    }
    if(slots[casa-10] == "bomba") {
        bombasArredor ++
    }
return bombasArredor
}

function vazioArredor(casa) {
    vaziosArredor = []
    if(slots[casa+1] == "vazio") {
        clickSlots(casa+1)
    }
    if(slots[casa-1] == "vazio") {
        clickSlots(casa-1)
    }
    if(slots[casa+8] == "vazio") {
        clickSlots(casa+8)
    }
    if(slots[casa-8] == "vazio") {
        clickSlots(casa-8)
    }
    if(slots[casa+9] == "vazio") {
        clickSlots(casa+9)
    }
    if(slots[casa-9] == "vazio") {
        clickSlots(casa-9)
    }
    if(slots[casa+10] == "vazio") {
        clickSlots(casa+10)
    }
    if(slots[casa-10] == "vazio") {
        clickSlots(casa-10)
    }

}
function colocarBandeira(casa) {
    event.preventDefault()
    localSlot = window.document.getElementById(`s${casa}`)
    if(slots[casa] == "vazio" || slots[casa] == "bomba") {
        if(localSlot.style.backgroundColor == "orange") {
            localSlot.style.backgroundColor = "lightgray"
        } else
        {
            localSlot.style.backgroundColor = "orange"
        }
    }
}