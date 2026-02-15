var agora = new Date()
var diaSem = agora.getDay()
var feira = true
/*
    Domingo
    Segunda
    Terça
    Quarta
    Quinta
    Sexta
    Sabado
*/
switch(diaSem) {
    case 0:
        var diaTexto = "Domingo"
        var feira = 0
        break
    
    case 1:
        var diaTexto = "Segunda"
        break
    
    case 2:
        var diaTexto = "Terça"
        break

    case 3:
        var diaTexto = "Quarta"
        break

    case 4:
        var diaTexto = "Quinta"
        break
    
    case 5:
        var diaTexto = "Sexta"
        break
    
    case 6:
        var diaTexto = "Sabado"
        var feira = 0
        break
    default:
        var diaTexto = "[ERRO] Dia inválido!"
        var feira = 2
        break
}

if (feira==1) {
    console.log(`Hoje é ${diaTexto}-feira, bom trabalho!`)
} else if (feira==0) {
    console.log(`Hoje é ${diaTexto}, bom descanso!`)
}

else {
    console.log(diaTexto)
}