// public/private key using ed25519 -- not web3 specific

import * as ed from '@noble/ed25519'

async function main() {
    const {secretKey, publicKey} =  await ed.keygenAsync();
    
    const message = new TextEncoder().encode('Hello Achu'); // converts to UInt8Array([])
    const signature = await ed.signAsync(message, secretKey); // UInt8Array

    const isValid = await ed.verifyAsync(signature, message, publicKey);

    console.log(isValid);
}

main();
