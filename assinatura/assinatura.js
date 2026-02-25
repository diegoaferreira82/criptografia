import {generateKeyPairSync, createSign, createVerify} from 'crypto';

// Gerar um par de chaves (pública e privada)
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

let  mensagem = 'Esta é uma mensagem que será assinada.';

// Criar uma assinatura digital usando a chave privada
const assinador = createSign('sha256');
assinador.update(mensagem);

const assinatura = assinador.sign(privateKey, 'hex');
console.log('Assinatura Digital:', assinatura);

//intermediario que interceptou a mensagem e a assinatura, e alterou a mensagem
mensagem = 'Esta é uma mensagem que foi alterada.';

//Envio desse documento para outra pessoa --- vai usar o documento e a chave publica

const verificador = createVerify('sha256');
verificador.update(mensagem);
const isValid = verificador.verify(publicKey, assinatura, 'hex');
console.log('Assinatura Válida:', isValid); // O resultado será false, pois a mensagem foi alterada após a assinatura.