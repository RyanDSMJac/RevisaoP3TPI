export default class Pessoa {
    nome: string;
    email: string;
    nasc: Date;

    constructor(nome: string, email: string, nasc: Date) {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }

    imprimir(): void {
        console.log(`Nome: ${this.nome} \n e-mail: ${this.email} \n Data Nasc: ${this.nasc} \n Idade: ${this.idade} \n Faixa Etária: ${this.faixaEtaria} \n Anos Bissextos: ${this.numBissextos}`);
    }

    idade(): number {
        const hoje = new Date();
        let idade = hoje.getFullYear() - this.nasc.getFullYear();
        const mes = hoje.getMonth();
        if (mes < this.nasc.getMonth() || (mes === this.nasc.getMonth() && hoje.getDate() < this.nasc.getDate())) {
            idade--;
        }
        return idade;
    }

    numBissextos(): number {
        const anoInicio = this.nasc.getFullYear();
        const anoFim = new Date().getFullYear();
        let contagem = 0;
        
        for (let ano = anoInicio; ano <= anoFim; ano++) {
            if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
                contagem++;
            }
        }
        return contagem;
    }

    faixaEtaria(): string {
        const idadePessoa = this.idade();
        if (idadePessoa < 13) {
            return 'Criança';
        } else if (idadePessoa >= 13 && idadePessoa < 18) {
            return 'Adolescente';
        } else if (idadePessoa >= 18 && idadePessoa < 60) {
            return 'Adulto';
        } else if (idadePessoa >= 60 && idadePessoa < 100) {
            return 'Idoso';
        } else {
            return 'Matusalém'
        }
    }
}