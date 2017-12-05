

function cipher(astring, offset) {
    var astringArray = astring.split('');
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var alphabetArray = alphabet.split('');
    var capAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var capAlphabetArray = capAlphabet.split('');
    var cipherArray = [];
    for (var count1 = 0; count1 <= (astringArray.length - 1); count1++) {
        for (var count2 = 0; count2 <= (alphabetArray.length - 1); count2++) {
            if (astringArray[count1] === alphabetArray[count2]) {
                if (count2 <= (offset - 1)) {
                    var cipherChar = alphabetArray[count2 + offset];
                }
                else {
                    var cipherChar = alphabetArray[offset - (alphabetArray.length - count2)];
                }
                cipherArray.push(cipherChar);
            }
            if (astringArray[count1] === alphabetArray[count2].toUpperCase()) {
                if (count2 <= (offset - 1)) {
                    var cipherChar = alphabetArray[count2 + offset].toUpperCase();
                }
                else {
                    var cipherChar = alphabetArray[offset - (alphabetArray.length - count2)].toUpperCase();
                }
                cipherArray.push(cipherChar);
            }
        }
            
        if (alphabetArray.includes(astringArray[count1]) === false && capAlphabetArray.includes(astringArray[count1]) === false)  { 
            cipherArray.push(astringArray[count1]);
        }
    }
    // console.log(cipherArray);
    cipherString = cipherArray.join('');
    return cipherString;

}
console.log(cipher('Genius without education is like silver in the mine', 13));
