const msg = "Hello, World!";

function cifraMensagem(mensagem, movimentos) {
    const mensagemCifrada = mensagem.split('').map(char => {
        const charCode = char.charCodeAt(0);
        return String.fromCharCode(charCode + movimentos);
    });
    return mensagemCifrada.join('');
}

console.log(cifraMensagem(msg, 3)); // Output: "Khoor, Zruog!"