// Create a method called decryptDoubled() that takes a filename as string as a parameter
// and it can decrypt the duplicated-chars.txt file
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
// If the file can't be opened it should return this message: File not found
// The result should be saved in the output.txt file

'use strict'

var fs = require('fs');

function decryptDoubled(file:string) {
    try
        {
            let reader:string = fs.readFileSync(file, 'utf-8');
            let decrypted:string = "";
            console.log(reader);
            let splitup = new Array();
            for (let i=0; i<1; i++){
                splitup = reader.split('');
                // console.log(reader.split(''));
            }
            console.log(splitup);
            
            for (let k=0; k<=splitup.length-1; k=k+2){   
                decrypted += splitup[k].replace('0');    
                if (splitup[k] == '.'){
                    decrypted += '\n';
                }
                
            }
            console.log(decrypted);
            
            fs.writeFileSync('output.txt', decrypted)
        }
    catch (error)
    {
        console.log(error);
    }
}

decryptDoubled('duplicated-chars.txt');