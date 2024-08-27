/* 1) Crie uma classe para representar carros
Os carros possuem, uma MARCA, uma COR, e um GASTO MEDIO DE COMBUSTIVEL POR KM RODADO.
Crie um metodo que dada a quantidade de quilometros e o preço do combustivel, nos dê o valor gasto em reais 
para realizar este percurso */

class Carros {
    marca;
    cor;
    gastoMedioDeCombustivel;

    constructor (marca, cor, gastoMedioDeCombustivel){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioDeCombustivel = gastoMedioDeCombustivel;

    }

}

const onix = new Carros('Chevrolet', 'branco', 1/13);

console.log(onix);