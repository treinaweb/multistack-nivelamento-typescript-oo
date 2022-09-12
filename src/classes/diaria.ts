import { Atendimento } from "./atendimento.js";

export class Diaria extends Atendimento{
    public definirvalor(valor: number) {
        if(valor < 1) {
            return console.log('valor deve ser maior que 0');
        }

        return this.valor = valor;
    }
}