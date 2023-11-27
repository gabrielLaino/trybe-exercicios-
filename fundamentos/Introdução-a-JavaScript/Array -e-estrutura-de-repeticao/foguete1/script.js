const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// console.log(numbers);
let soma = 0;


for(let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}

let media = soma / numbers.length;
console.log(soma);
console.log(media);

if(media > 20){
    console.log('O valor da média aritimetia e maior que 20');
}else{console.log('O valor da média aritimetia e menor que 20');}

let maior = numbers[0];
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] > numbers[maior]){
        maior = numbers[index]
    }
}

console.log(maior);