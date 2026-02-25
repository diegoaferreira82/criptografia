const msg = "Hello, World!";

function cifraMensagem(mensagem, movimentos) {
    const mensagemCifrada = mensagem.split('').map(char => {
        const charCode = char.charCodeAt(0);
        return String.fromCharCode(charCode + movimentos);
    });
    return mensagemCifrada.join('');
}

function decifraMensagem(mensagemCifrada, movimentos) {
    const mensagemDecifrada = mensagemCifrada.split('').map(char => {
        const charCode = char.charCodeAt(0);
        return String.fromCharCode(charCode - movimentos);
    });
    return mensagemDecifrada.join('');
}

console.log(cifraMensagem(msg, 3)); // Output: "Khoor, Zruog!"
console.log(decifraMensagem(cifraMensagem(msg, 3), 3)); // Output: "Hello, World!"