function filtraOcorrencias(paragrafo){
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1) // pega todas as chaves do objeto paragrafo e coloca em um array
}

function SaidaFinal(listaPalavras){
    let textoFinal = '';
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');
        if (duplicadas){
            textoFinal += `palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas} \n`
        }
    });
    return textoFinal;
}

export {SaidaFinal};