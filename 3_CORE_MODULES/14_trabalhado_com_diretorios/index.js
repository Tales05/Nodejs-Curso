const fs = require("fs")

if(!fs.existsSync('./minipasta')){
    console.log('Não Existe!!')
    fs.mkdirSync("minipasta")

}else if(fs.existsSync('./minipasta')){
    console.log('Existe!!')
}


