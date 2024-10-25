function VERF() {
    var N1 = document.getElementById("Num01").value;
    var N2 = document.getElementById("Num02").value;
    if (N1 > N2) {
        document.getElementById("RESULT").innerHTML = (`O Primeiro valor (${N1}) é maior que o segundo valor (${N2})`)
    } else if (N2 > N1) {
        document.getElementById("RESULT").innerHTML = (`O Segundo valor (${N2}) é maior que o primeiro valor (${N1})`)
    } else if (N1 == N2) {
        document.getElementById("RESULT").innerHTML = (`Os 2 valores são iguais`)
    }
};