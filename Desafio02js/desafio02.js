function CALC() {       
    var WEIGHT = document.getElementById("WEIGHT").value;
    /* Receberemos o valor do peso da pessoa */
    var HEIGHT = document.getElementById("HEIGHT").value;
    /* Receberemos o valor da altura da pessoa */
    var IMC = WEIGHT/(HEIGHT * HEIGHT);
    /* Iremos usar o peso e a altura da pessoa para calcular o peso ideal */   
    if (IMC < 18.5) {
        document.getElementById("RESULT").innerHTML = (`Seu IMC é de ${IMC.toFixed(2)},você esta com baixo peso`)
    } else if(IMC > 18.5, IMC < 24.9) {
        document.getElementById("RESULT").innerHTML = (`Seu IMC é de ${IMC.toFixed(2)},você esta com peso adequado`)
    } else if (IMC >= 25, IMC < 29.9) {
        document.getElementById("RESULT").innerHTML = (`Seu IMC é de ${IMC.toFixed(2)},você esta com sobrepeso`)
    } else if (IMC > 30, IMC < 34.9) {
        document.getElementById("RESULT").innerHTML = (`Seu IMC é de ${IMC.toFixed(2)},você esta com obesidade grau I`)
    } else if (IMC > 35, IMC < 39.9){
        document.getElementById("RESULT").innerHTML = (`Seu IMC é de ${IMC.toFixed(2)},você esta com obesidade grau II`)
    } else {
        document.getElementById("RESULT").innerHTML = (`Seu IMC é de ${IMC.toFixed(2)},você esta com obesidade grau III`)
    }
};
