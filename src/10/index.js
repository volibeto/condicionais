const caractere = 'A';

if ('AEIOUaeiou'.includes(caractere)) {
    if ('AEIOU'.includes(caractere)) {
        console.log('Vogal maiúscula');
    } else {
        console.log('Vogal minúscula');
    }
} else if ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(caractere)) {
    console.log('Consoante');
} else if ('0123456789'.includes(caractere)) {
    console.log('Número');
} else {
    console.log('Caractere inválido');
}

