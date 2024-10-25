function CALC() {
    var X = document.getElementById("ValX").value;
    var Y = document.getElementById("ValY").value;
    var Z = X % Y
    if (Z == 0) {
        document.getElementById("RESULT").innerHTML = (`A divisão dos valores ${X} e ${Y} é possivel pois o resto da divisão é ${Z}`)
    } else {
        document.getElementById("RESULT").innerHTML = (`A divisão dos valores ${X} e ${Y} é não possivel pois o resto da divisão é ${Z}`)
    }
};