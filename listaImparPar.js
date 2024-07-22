//Criando uma lista de numeros
const numbers = [1,2,3,4,5,10,11,12,0,14,15,90,50,76,9,17];
//Constante que define o tamanho do array
const tamanho = 9;


for(let i =0; i<numbers.length; i++){
    let num = numbers[i];

    if(num % 2 ===0){
        console.log(`O numero ${num} é par.`)
    }
    else{
        console.log('o numero  '+num+' é impar.')
    }
}