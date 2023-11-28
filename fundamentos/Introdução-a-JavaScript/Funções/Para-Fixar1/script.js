let balence = 0;

function deposita (valor){
    balence += valor;
}

function saca(valor){
    balence -= valor;
}

function taxaDeJuros(){
    balence = balence * 0.05 + balence;
}

function taxaDoBanco(){
    balence = balence - balence * 0.01 
}



deposita(300);
taxaDoBanco();
console.log(balence);