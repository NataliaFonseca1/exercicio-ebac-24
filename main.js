class celular {
  modelo
  fabricante
  anoFabricacao
  constructor(modelo, fabricante, anoFabricacao){
    this.modelo=modelo;
    this.fabricante=fabricante;
    this.anoFabricacao=anoFabricacao;
    }
  }

const celular1= new celular("iphone", "apple", 2019)
const celular2= new celular ("galaxy", "samsung", 2018)
const celular3= new celular ("redmi", "xiomi", 2020)

console.log (celular1)
console.log (celular2)
console.log (celular3)