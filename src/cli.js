import fs from 'fs'
import trataErros from './erros/erros.js'
import { contaPalavras } from './index.js'
const caminhoArquivo = process.argv[2] // pega a terceira escrita do console

fs.readFile(caminhoArquivo, 'utf-8', (erro, texto) => {
    try{
        if(erro) throw erro // throw rambém sai da função, parecido com o return
        contaPalavras(texto)
    }catch(e){
        console.log(trataErros(e))
    }
    //lembrando que quando um erro não deve parar a função, não use throw
})