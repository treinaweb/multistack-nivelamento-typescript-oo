import { Saldo } from "../interfaces/saldo.js";
import { Pessoa } from "./pessoa.js";

export class Cliente extends Pessoa implements Saldo {
  private _saldo: number = 0;

  get saldo() {
    return this._saldo;
  }


  depositar(valor: number) {
    this._saldo = this.saldo + valor * 1.1;
  }

  sacar(valor: number): void {
    this._saldo = this.saldo - valor;
  }
}
