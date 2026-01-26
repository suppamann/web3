function arrayToHex(byteArray) {
    let hexString = '';
    for (let i = 0; i < byteArray.length; i++) {
        hexString += byteArray[i].toString(16).padStart(2,'0')
        console.log(hexString);
    }
    return hexString;
}

const byteArray = new Uint8Array([ 97, 99, 104, 117])
const hexString = arrayToHex(byteArray);
console.log(hexString);

/*
*toString(16) => converts it to hexadecimal
*padStart(2,'0') => convert to 2 char, if only 1, prefix with 0
*/