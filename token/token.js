import jwt from 'jsonwebtoken';

const chaveSecreta = 'sua_chave_secreta';

const token = jwt.sign (
    {
        apelido: 'João',
        curso: "Seguranca Node JS"
    } , chaveSecreta
)

console.log(token);

const tokenDecodificado = jwt.verify(token, chaveSecreta);

console.log(tokenDecodificado);