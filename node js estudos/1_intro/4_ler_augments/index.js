console.log(process.argv)

const args = process.argv.slice(2) // Variavel pegar o argumento no indice 2
console.log(args)

let nome = []

for(let i = 0; i < args.length; i++){
    let partes = args[i].split("=");
    if(partes.length > 1){
        nome.push(partes[1])
    }else{
        nome.push(partes[0])
    }
 

    
}
console.log(nome)