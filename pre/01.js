import crypto from 'crypto'

// const input = 'achu';
// const input2 = '100xdevs';
// const hash = crypto.createHash('sha256').update(input).digest('hex');
//     // const newHash = crypto.createHash('sha512').update(input2).digest('hex');
// const newHash = crypto.createHash('sha256').update(input2).digest('hex');

// console.log({hash,newHash});

// ASSIGNMENT 
function findHashWithPrefix(prefix){
    let input =0; //596138 is the first such number, update input to 596138 to get the next
    while (true){
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return { input: inputStr, hash}
        }
        input++;
    }
}

const result = findHashWithPrefix('00000');
console.log(result)


/* NOTE
hash spits out a string that cannot be recreated to the original string, its one way.
encryption is not one way, you encrypt and decrypt 
*/
