import { createHash } from 'crypto';

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }

    criaHash(senha) {
        return createHash('sha256').update(senha).digest('hex');
    }

    autentica(nome, senha) {
        if (this.nome === nome && this.hash === this.criaHash(senha)) {
            console.log('Usuário autenticado com sucesso!');
            return true;
        } else {
           // console.log('Usuário ou senha incorretos.');
            return false;
        }
    }
}

const user1 = new Usuario('João', '6982');

//Teste de Força Bruta
for (let senhaTeste=0; senhaTeste < 10000 ; senhaTeste++) {
    if (user1.autentica("João", senhaTeste.toString())) {
      console.log(`A senha do usuário é ${senhaTeste}`);
    }
    
}