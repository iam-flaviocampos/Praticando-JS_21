/*
21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela:

1) Crianças com menos de 10 anos pagam R$80
2) Conveniados com idade entre 10 e 30 anos pagam R$50
3) Conveniados com idade acima de 30 e até 60 anos pagam R$95
4) Conveniados acima de 60 anos pagam R$130
*/

function planoDeSaude (idade){
    //Valores que todos pagam
    let valorGeral = 100

    //Valores por idade
    let menosDeDez = 80
    let dezATrinta = 50
    let trintaACessenta = 95
    let acimaDeCessenta = 130

    if (idade < 10){
        console.log("Crianças com menos de 10 de anos pagam um adicional de R$80, portanto, o valor acrescentado ficou por: R$" + (valorGeral + menosDeDez) + " reais")
    } else if (idade >= 10 && idade <= 30){
        console.log("Conveniados com idade entre 10 e 30 anos pagam R$50, portanto, o valor acrescentado ficou por R$" + (valorGeral + dezATrinta) + " reais")
    } else if (idade > 30 && idade <= 60){
        console.log("Conveniados com idade entre 30 e 60 anos pagam R$95, portanto, o valor acrescentado ficou por R$" + (valorGeral + trintaACessenta) + " reais")
    } else if (idade > 60){
        console.log("Conveniados a partir de 60 anos pagam R$130, portanto, o valor acrescentado ficou por R$" + (valorGeral + acimaDeCessenta) + " reais")
    }
}

planoDeSaude(5)
planoDeSaude(15)
planoDeSaude(35)
planoDeSaude(70)