import crypto from 'crypto';

function findWithPrefix(prefix){
    let input =0;
    while (true){
        const inputStr = '100xdevs' + input.toString();
        const hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return {input:inputStr, hash}
        }
        input++;
    }
}

const res = findWithPrefix('00000')
console.log(res);

/* 
* assignment 1 and 2 are all about PROOF OF WORK
* prefix and nonce--> the random number that you are trying to find
*/