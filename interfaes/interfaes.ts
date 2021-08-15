interface Humano {
    nome: string;
    idade?: number;
    saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
    console.log('ola, ' + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Carlos';
}

const pessoa: Humano = {
    nome: 'Joao',
    idade: 27,
    saudar(sobrenome: string): void {
        console.log(`Olá! Meu nome é: ${this.nome} ${sobrenome}`);
    }
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: 'Jonas', idade: 25 });
pessoa.saudar('Skywlker');

// Usando Classes

class Cliente implements Humano {
    nome: string = '';
    idade?: number | undefined;
    saudar(sobrenome: string): void {
        console.log(`Olá! Meu nome é: ${this.nome} ${sobrenome}`);
    }
}

const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
