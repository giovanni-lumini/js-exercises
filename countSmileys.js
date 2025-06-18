/* 
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/


function countSmileys(arr) {

    //smiles validi
    const validSmileys = [
        ":)", ":D", ";)", ";D",
        ":-)", ":-D", ";-)", ";-D",
        ":~)", ":~D", ";~)", ";~D"
      ];
    //contatore da aumentare per ogni smile nell'array
    let count = 0;

    for(let i = 0; i<arr.length; i++){
        if(validSmileys.includes(arr[i])){
            count++;
        }
    }
    return count;
}

//un altro metodo di verifica con regex
function countSmileysTwo(arr) {
    
    let smileys = arr.filter(arrElement => /^[:;][-~]?[)D]$/.test(arrElement)).length;
        
    return smileys;
}




countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

countSmileysTwo([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileysTwo([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileysTwo([';]', ':[', ';*', ':$', ';-D']); // should return 1;
