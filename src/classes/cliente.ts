import Pessoa from "./pessoa"

export default class Cliente extends Pessoa {
    saldo: number;

    constructor(nome: string, email: string, nasc: Date, saldo: number) {
        super(nome, email, nasc);
        this.saldo = saldo;
    }

    imprimir(): void {
        super.imprimir();
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)} \n`);
    }
}
