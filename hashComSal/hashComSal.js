import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaHashComSal(senha) {

    const sal = randomBytes(16).toString('hex'); // Gerar um "sal" aleatório

    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex'); //64 é o tamanho do hash em bytes (512 bits)

    return `${sal}:${senhaHasheada.toString('hex')}`; // Armazenar o "sal" junto com a senha hasheada
}   

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':'); // Armazenar o "sal" e o hash separadamente
    }

    autentica(nome, senha) {
        if (this.nome === nome) {
            const hashTentativa = scryptSync(senha, this.sal, 64); // Gerar o hash da senha de tentativa usando o mesmo "sal"
            const hashArmazenado = Buffer.from(this.hash, 'hex'); // Converter o hash armazenado para Buffer
            if (timingSafeEqual(hashArmazenado, hashTentativa)) {
                console.log('Usuário autenticado com sucesso!');
                return true;
            } else {
                console.log('Usuário ou senha incorretos.');
                return false;
            }
        }
    }
}

const user1 = new Usuario('João', '123456');
console.log(user1);

//teste de sucesso
user1.autentica('João', '123456'); // Autenticação bem-sucedida

//teste de falha
user1.autentica('João', '12456'); // Autenticação falhou