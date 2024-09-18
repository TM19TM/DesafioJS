function F() {
    var TEMPC = document.getElementById("TEMP").value
    /*Iremos receber o valor da temperatura que vem da id TEMP e colocar na variavel TEMPF*/
    var F = (TEMPC*9/5)+32
    /*Aqui iremos fazer o calculo da conversão de Celsius para Fahrenheit*/
    document.getElementById("RESULT").innerHTML = (`A temperatura era ${TEMPC}C e agora é ${F.toFixed(2)}F`)
    /*Aqui iremos mandar o ressultado da conta por meio do DOM para o html, e iremos limitar os numeros após a virgula em 2 utilizando o tofixed*/
}
function C() {
    var TEMPF = document.getElementById("TEMP").value
    var C = (TEMPF-32)*5/9
    document.getElementById("RESULT").innerHTML = (`A temperatura era ${TEMPF}F e agora é ${C.toFixed(2)}C`)
}