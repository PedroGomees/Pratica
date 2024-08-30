import chalk from 'chalk'
import inquirer from 'inquirer'


inquirer.prompt([{
    type: 'input',
    name: 'usuario', message:"Qual o seu nome?"
},{
    type: "input",
    name:"idade", message: " Qual sua idade?"
},{
    type: "input",
    name: "genero", message:"Qual o seu genero?"
}]).then(answers =>{
    if(answers.idade < 18){
console.log(chalk.bgYellow.black("Usuario: " + answers.usuario))
parseInt(answers.idade)
console.log(chalk.bgYellow.black("Idade: " + answers.idade))
console.log(chalk.bgYellow.black("Genero: "+ answers.genero))

}
else{
    throw new Error(console.log(chalk.red("Erro: a idade precisa ser menor que 18")))
}
}).catch(err => console.log(err))