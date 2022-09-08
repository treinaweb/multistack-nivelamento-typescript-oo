import { Pessoa } from "./pessoa.js";

export class Diarista extends Pessoa {
  chavePix!: string;
  
  atenderDiarista(clienteNome: string): void {
    console.log(
      `Diarista ${this.nome} está atendendo o cliente ${clienteNome}`
    );
  }
}
