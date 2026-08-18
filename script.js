const button = document.querySelector("button")
const input = document.getElementById("client")
const input2 = document.getElementById("unitaria")
const input3 = document.getElementById("quantidad")
const paragrafoResultado = document.getElementById("resultado")

button.addEventListener("click", calcularFatura)

function calcularFatura() {
    const client = input.valueAsNumber
    const quantidad = input2.valueAsNumber
    const unitaria = input3.valueAsNumber

    if (input.value === "") {
        alert("Digite um valor válido!")
        return
    }
    const fatura=unitaria*quantidad;
    const faturaConvertidaEmReais = fatura.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    paragrafoResultado.textContent = `Fatura: ${faturaConvertidaEmReais}`
    if(client >= "fatura"){
        const resultado2=client-fatura;
        alert(resultado2);
        }else{
            alert("Dinheiro insuficiente");
            return
        }
        
    // paragrafoResultado.textContent = minutos <= 100 ? "Fatura: R$ 50,00" : "Fatura: " + ((minutos - 100) * 2 + 50).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}