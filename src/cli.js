import fs from 'fs'
import trataErros from './erros/erros.js'
import { contaPalavras } from './index.js'
import { SaidaFinal } from './helpers.js'
import { Command } from 'commander'
import path from 'path'

const program = new Command()
program.version('0.0.1').option('-t, --texto <string>', 'caminho do texto a ser processado')
    .option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
    .action((options) => {
        const {texto, destino} = options;

        if(!texto || !destino){
            console.error('Erro, caminho de origem e/ou destino inválidos!!');
            program.help()
            return
        }

        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);
        //chamando a função processaArquivo
        try{
            processaArquivo(caminhoTexto, caminhoDestino)
            console.log('Texto processado com sucesso!!!')
        }catch(err){
            console.log('ocorreu um erro', err)
        }
    })

program.parse();

function processaArquivo(texto, destino){
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try{
            if(erro) throw erro // throw rambém sai da função, parecido com o return
            const resultado = contaPalavras(texto)
            CriaESalva(resultado, destino)
        }catch(e){
            console.log(trataErros(e))
        }
        //lembrando que quando um erro não deve parar a função, não use throw
    })
}

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