import EnumEspecie from "./enum/EnumEspecie";

// src/tipos/TipoPet.ts
export default class TipoPet {
    id: number;
    nome: string;
    especie: EnumEspecie;
    adotado: boolean;
    idade?: number;
  
    constructor(id: number, nome: string, especie: EnumEspecie, adotado: boolean, idade?: number) {
      this.id = id;
      this.nome = nome;
      this.especie = especie;
      this.adotado = adotado;
      this.idade = idade;
    }
  }
  



//expport default TipoPet;