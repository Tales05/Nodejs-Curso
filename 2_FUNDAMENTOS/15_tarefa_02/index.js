const inquirer = require("inquirer");
const chalk = require("chalk")

inquirer
.prompt([
    {name: 'nome', massage: 'Qual o seu nome?'},
    {name: 'idade', massage: 'Qual a sua idade?'},
])
.then((answers) =>{
    if(!answers.nome || !answers.idade) {
        throw new Error('O nome e a idade são obrigatórios!!')
    }
    const response = `O nome do usuário é ${answers.nome} e ele tem ${answers.idade} anos`

    console.log(chalk.bgGreen.white(response))
})
.catch((err) => console.log(err))