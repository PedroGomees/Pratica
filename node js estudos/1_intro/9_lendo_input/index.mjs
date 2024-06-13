import chalk from 'chalk';
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


rl.question("Qual sua linguagem preferida?", (language)=>{

    if(language === 'Python'){
        console.log(chalk.red('Isso não é linguagem'))
    }else{
    console.log(chalk.green('A minha linguagem preferida é' + language))
   }
   rl.close()
})