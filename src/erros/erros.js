export default function trataErros(erro){
    if(erro.code === 'ENOENT'){
        return 'Arquivo não encontrado, verifique letras maiúsculas, extensões de arquivos e caminho relativo'
    }else{
        return 'Erro na aplicação.'
    }
}