alert("Boas Vindas");
let vezes= 100;
let numeroSecreto = parseInt(Math.random() * vezes + 1)
console.log(numeroSecreto);
let chute;
let tentativas= 1;

while(chute != numeroSecreto){
    //vezes = prompt("Escolha ate que numero gostaria de adivinhar");
    chute = prompt(`Escolha um número entre 2 e ${vezes}`);
    if (chute == numeroSecreto){
       break; 
    }else{
        if(chute > numeroSecreto){
            alert(`O numero é menor que ${chute}`);
        }else{
            alert(`O numero é maior que ${chute}`);
        }
        tentativas++
    }
    
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!!`);
//if(tentativas > 1){
//    alert(`Você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas!!`);
//}else{
//    alert(`Você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativa!!`);}