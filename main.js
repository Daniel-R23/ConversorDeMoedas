function ConverterDolar(){
  var campo = Number.parseFloat(document.getElementById("valor").value)
  var textoResposta = document.getElementById("valorConvertido")
  var textoBit = document.getElementById("valorConvertidoBitcoin")
  var valorEmDolar = campo/5.25
  var valorEmBitcoin = campo/250224.97
  textoBit.innerHTML = "Isso equivale a "+ valorEmBitcoin.toLocaleString('pt-br', {style:'currency', currency:'BTC'})
  textoResposta.innerHTML="O resultado em dólar é: " + valorEmDolar.toLocaleString('en-us', {style:'currency', currency:'USD'})
}
function ConverterEuro(){
  var campo = Number.parseFloat(document.getElementById("valor").value)
  var textoResposta = document.getElementById("valorConvertido")
  var textoBit = document.getElementById("valorConvertidoBitcoin")
  var valorEmDolar = campo/6.19
  var valorEmBitcoin = campo/250224.97
  textoBit.innerHTML = "Isso equivale a "+ valorEmBitcoin.toLocaleString('pt-br', {style:'currency', currency:'BTC'})
  textoResposta.innerHTML="O resultado em dólar é: " + valorEmDolar.toLocaleString('en-uk', {style:'currency', currency:'EUR'})
}
