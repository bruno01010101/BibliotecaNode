import fs from 'fs'
import trataErros from './erros/erros.js'
import { contaPalavras } from './index.js'
import { SaidaFinal } from './helpers.js'
const caminhoArquivo = process.argv[2] // pega a terceira escrita do console
const endereco = process.argv[3]

fs.readFile(caminhoArquivo, 'utf-8', (erro, texto) => {
    try{
        if(erro) throw erro // throw rambém sai da função, parecido com o return
        const resultado = contaPalavras(texto)
        CriaESalva(resultado, endereco)
    }catch(e){
        console.log(trataErros(e))
    }
    //lembrando que quando um erro não deve parar a função, não use throw
})

async function CriaESalva(ListaPalavras, endereco){
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = SaidaFinal(ListaPalavras);
    try{
        await fs.promises.writeFile(arquivoNovo, textoPalavras)
        console.log('arquivo criado')
    }catch(e){
        throw e
    }
}