function calculatePrice() {
    let preco = document.getElementById("listed-price").value;
    let peso = document.getElementById("listed-weight").value;

    let preco_kg = 0;
    let preco_g = 0;

    preco_g = preco/peso;

    preco_kg = preco_g * 1000;

    console.log(preco_kg);

    let divResultado = document.getElementById("result");
    divResultado.innerHTML = "<p>" + preco_kg + "/kg</p>"
    
}