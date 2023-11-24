let grade = Math.trunc(Math.random() * 100);

if(grade > 80){
    console.log('Parabens, você foi aprovado sua nota foi', grade);
}else if(grade < 80 && grade >= 60){
    console.log('Você está na lista de espera, sua nota foi', grade);
}else{
    console.log('Você reprovou, sua nota foi', grade);
}


