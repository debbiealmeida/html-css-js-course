function dizerola() {
	var nome = document.querySelector("input").value;
	var mensagem= "Olá " + nome + "!";
	document.getElementById("oi").textContent = mensagem;
}

function tecnico() {
	document.querySelector("#tecnico").innerHTML = "<a href='https://tecnico.ulisboa.pt/pt/' target='_blank'><img src='tecnico.png'></a>;"
}