import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

const msg = 'Mensagem secreta';
const chave = randomBytes(32);
const vi = randomBytes(16); // vi é o vetor de inicialização
// é um apêndice que é adicionado para garantir que a criptografia seja diferente mesmo com a mesma chave

const cifra = createCipheriv('aes-256-cbc', chave, vi);

const msgCifrada = cifra.update(msg, 'utf-8', 'hex') + cifra.final('hex');

console.log('Mensagem cifrada:', msgCifrada);

//Decifrar

const decifra = createDecipheriv('aes-256-cbc', chave, vi);

const msgDecifrada = decifra.update(msgCifrada, 'hex', 'utf-8') + decifra.final('utf-8');

console.log('Mensagem decifrada:', msgDecifrada);