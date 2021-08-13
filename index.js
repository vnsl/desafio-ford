const senhaDigitada = '1HGCM82633A004352';

if (!senhaDigitada) {
    console.log('Campo senha em branco.')
}

let senhaCriptografada;

const cryptoPhrase='henryford'
const cryptoPhraseArray=cryptoPhrase.split("");

function criptografando(senha) {
    const block1 = senha.substring(0, 3);
    const block2 = senha.substring(3, 8);
    const block3 = senha.substring(8, 9);
    const block4 = senha.substring(9, 10);
    const block5 = senha.substring(10, 11);
    const block6 = senha.substring(11, 17);

    const reordenando = block2.concat(block4, block6, block5, block3, block1).split('');
    const crypt = reordenando.map((char) => {
        return char+cryptoPhrase[0];
    })
    
   
    console.log(crypt.join());


}


criptografando(senhaDigitada);


console.log(senhaCriptografada);
