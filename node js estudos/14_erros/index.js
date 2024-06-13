const x = 10
//checar se x é um numero

if(Number.isInteger(x)){
    console.log('Continuando codigo')
    
}else{
    throw new Error('O valor x não é um número inteiro!')
}

