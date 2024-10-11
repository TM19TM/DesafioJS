function CALC() {
    var H = document.getElementById("altura").value;
    var B = document.getElementById("base").value;
    var A = B * H;
    document.getElementById("RESULT").innerHTML = (`O perimetro do retangulo é ${A.toFixed(2)}`)
};