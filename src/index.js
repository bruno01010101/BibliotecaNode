export function contaPalavras(texto){
    const paragrafos = extraiParagrafo(texto)
    // o javascript retorna false para uma string vazia, por isso funciona
    const contagem = paragrafos.filter((p) => p).map((elementos) => {
        return verficaPalavras(elementos)
    })
    console.log(contagem)
}

function extraiParagrafo(texto){
    return texto.toLowerCase().replace('(', '').replace(')', '').split('\n');
}

function verficaPalavras(texto){
    const textoDividido = texto.split(' ')
    const resultado = {}
    for(let valor of textoDividido){
        let novo = valor.replace('\n', '')
        if (novo.length >= 3){
            resultado[novo] = (resultado[novo] || 0) + 1
        }        
    }
    return resultado
    // includes não vai funcionar. ideia primária é usar uma função que conta quantas vezes a palavra aparece, se for mais que 2 vai retornar essa palavra e quantas vezes ela apareceu
    // ideia secundária: fazer outro for dentro deste de cada valor de textoDividido, e comparar com o o valor, se for igual adiciona em um array
}
