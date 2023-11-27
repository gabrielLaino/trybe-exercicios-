let num1 = Math.trunc(Math.random() * 100);
let num2 = Math.trunc(Math.random() * 100);

if(num1 > num2){
    console.log('O num1(',num1,') e maior que o num2 (', num2,')');
}else if(num1 === num2){
    console.log('O num1(',num1,') e igual que o num2 (', num2,')');
}else{
    console.log('O num1(',num1,') e menor que o num2 (', num2,')');
}