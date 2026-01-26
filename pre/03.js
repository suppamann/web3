const binaryRepresentation = new TextEncoder().encode('achu')
console.log(binaryRepresentation);

const nativeBinaryRepresentation = [104];
const arr = new Uint8Array([1919])// Uint8Array(1) [ 127 ]
console.log({arr, mod:arr%256})


/* NOTES    

* TextEncoder class returns binary representation as a Unit8Array
* the difference from a native array is that it uses less space and enforces constraints like its value can never exceed 255.
* native representation uses up more space depending on your machine, 32 bit or 64 bit
    JavaScript arrays store references, not raw values (for numbers).
    It is,a dynamic object with Metadata,Length,Capacity,References (pointers),Type information

    * 1 byte = 8 bits
    11111111 (8 bits) = 255 (value in decimal)
    achu = Uint8Array(4) [ 97, 99, 104, 117 ]
    where 97 is lowercase a in ASCII 
* Uint8Array does not throw an error on overflow. It does: value mod 256

 */