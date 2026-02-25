import { createHash } from 'crypto';

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex');
}   


class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.criaHash = criaHash(senha);
    }   

    autentica(nome, senha) {
        if (this.nome === nome && this.criaHash === criaHash(senha)) {
            console.log('Usuário autenticado com sucesso!');
            return true;
        } else {
            console.log('Usuário ou senha incorretos.');
            return false;
        }    }
}

const user1 = new Usuario('João', '123456');
console.log(user1);

user1.autentica('João', '12456'); // Autenticação bem-sucedida