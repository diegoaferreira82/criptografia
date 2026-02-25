import { generateKeyPairSync, publicEncrypt, privateDecrypt } from 'crypto';

const {privateKey, publicKey} = generateKeyPairSync
('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    }
});

// console.log('Chave Pública:', publicKey);
// console.log('Chave Privada:', privateKey);

const mensagem = 'Olá, esta é uma mensagem secreta!';

// Encriptar a mensagem usando a chave pública
const mensagemEncriptada = publicEncrypt(publicKey, Buffer.from(mensagem));
console.log('Mensagem Encriptada:', mensagemEncriptada.toString('base64'));

// Decriptar a mensagem usando a chave privada
const mensagemDecriptada = privateDecrypt(privateKey, mensagemEncriptada);
console.log('Mensagem Decriptada:', mensagemDecriptada.toString());