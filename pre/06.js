// pub/private key -- SOLANA specific top level libraray


import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

const keyPair = Keypair.generate();
const publicKey = keyPair.publicKey.toString(); // string
const secretKey = keyPair.secretKey; //UInt8Array

console.log({publicKey, secretKey})

const message = new TextEncoder().encode("Hello Achu");

const signature = nacl.sign.detached(message, secretKey);

const isValid = nacl.sign.detached.verify(message,signature,keyPair.publicKey.toBytes())

console.log({isValid});