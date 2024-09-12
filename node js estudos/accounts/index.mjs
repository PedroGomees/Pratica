import inquirer from 'inquirer';
import chalk from 'chalk';
import fs, { existsSync } from 'fs';

operation()
function operation(){
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: ['Criar Conta', 'Consultar Saldo','Sacar','Depositar','Sair']
    },
]).then((answer) => {
    const action = answer['action']
    if(action === 'Criar Conta'){
        createAccount()
    }
    else if(action === 'Depositar'){
depositar()
    }
    else if(action === 'Consultar Saldo'){
consultarSaldo()
    }
    else if(action === 'Sacar'){
sacar()
    }
    else if(action === 'Sair'){
    console.log(chalk.bgBlue.black("Você saiu"))
    process.exit()
    }
}).catch(err =>console.log(err))
}
//sacar

function sacar(){
    inquirer.prompt([{
        name:"accountName",
        message:"De qual conta deseja sacar?"
    }]).then(awnser=>{
        const accountName = awnser.accountName
        if(!fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgBlack.red("Esta conta não existe!"))
            sacar()
        }else{
          
            inquirer.prompt([{
                name:"quantidade",
                message:"Qual quantidade deseja sacar?"
            }]).then(awnser=>{
                const quantidade = awnser.quantidade
                const accountData = getAccount(accountName)
                const saldo = accountData.balance
                const newBalance = saldo - quantidade
                accountData.balance = newBalance
                fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData))
                console.log(chalk.bgBlack.green("O dinheiro foi sacado com sucesso!"))
                console.log(chalk.bgBlack.yellow("O saldo restante é "+ "R$"+newBalance))
            }).catch(err => console.log(err))
        }

    }).catch(err => console.log(err))
}
//consultar saldo

function consultarSaldo(){
    inquirer.prompt([{
        name:'accountName',
        message:"Qual o nome da Conta?"
    }]).then(anwser =>{
        const accountName = anwser.accountName
        if(!fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgBlack.red("Essa conta não existe!"))
            consultarSaldo()
        }
        else{
        const accountData = getAccount(accountName)
        const saldo = accountData.balance
        console.log(chalk.bgBlack.green("O seu saldo é: "+ saldo))
        operation()
        }
    
    }).catch(err => console.log(err))
   
}

//criando conta

function createAccount() {
    console.log(chalk.bgGreen.bgBlack('Obrigado por escolher o nososo Banco!'))
    console.log(chalk.green("Defina as opções da sua conta"))
    buildAccount()
}

function cadastrarCPF(accountName){
   
    inquirer.prompt({
        name:'cpf',
        message: 'Digite seu cpf',
    }).then(answer => {
        const cpfAccount = answer.cpf;
        const accountData = getAccount(accountName);
        accountData.cpf = cpfAccount;  // Adiciona o CPF ao JSON da conta
        fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData));
        console.log(chalk.green('CPF cadastrado com sucesso!'));
        operation();  // Chama o menu principal após cadastrar o CPF
    }).catch(err => console.log(err));
}

function buildAccount(){
    inquirer.prompt([{
        name: 'accountName',
        message:'Digite um nome para sua conta'
        
    }]).then(answer => {
        const accountName = answer.accountName
       console.info(accountName)
       if(!fs.existsSync('accounts')){
        fs.mkdirSync('accounts')
       }
       if(fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'))
        buildAccount()
        return
       }
       fs.writeFileSync(`accounts/${accountName}.json`, '{"balance":0}', function(err){
        console.log(err)
       })
       console.log(chalk.green('Sua conta foi criada'))
       cadastrarCPF(accountName)
       
    }).catch(err => console.log(err))
}

//add money

function depositar(){
    inquirer.prompt([{
        name:'accountName',
        message: 'Qual o nome da sua conta?'
    }]).then((answer) =>{
        const accountName = answer.accountName
      if(!checarConta(accountName)){
        return depositar()
      }
      inquirer.prompt([{
        name:'quantidade',
        message:'Qual o valor que deseja depositar'
      }]).then((answer) =>{
        const quantidade = answer.quantidade
        addQuantidade(accountName, quantidade)
      }).catch(err =>console.log(err))
    }).catch(err =>console.log(err))
}

function checarConta(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black("Esta conta não existe, tente novamente"))
        return false
    }
    return true
}

// add quantidade a conta
function addQuantidade(accountName, quantidade){
const accountData = getAccount(accountName)
if(!quantidade){
    console.log(chalk.bgBlack.red('Ocorreu um erro, tente novamente'))
    return depositar()
}
accountData.balance = parseFloat(quantidade) + parseFloat(accountData.balance)
fs.writeFileSync(`accounts/${accountName}.json`,JSON.stringify(accountData), function(err){
    console.log(err)
})
console.log(chalk.green(`Foi depositado o valor de R$${quantidade} em sua conta`))
operation()
}

function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`,{encoding:'utf8', flag:'r'})
    return JSON.parse(accountJSON)
}