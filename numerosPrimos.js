//Definindo limite estático
const limit = 20;

console.log("Exibindo os numeros primos até:",limit)        
for(let i=2; i<=limit; i++){

    if(primos(i)){
        console.log(i);
    }
    
}
//Criando a função para verificar se um numero é ou não primo
function primos(num){

    for(let i=2; i<= Math.sqrt(num); i++){
        if(num % i == 0 ){
            return false;//Se um numero(num) é divisivel por qualquer numero(i) entre 2 e a raiz quadrada deste numero(num),então(num) não é primo
        }

    }
    return true; //Se ele fro primo,retorna true
}