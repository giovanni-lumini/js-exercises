/* 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

/* 
-se l'array è diverso da null ed è di lunghezza maggiore di zero
    -ciclare nell'array:
    -se il numero è positivo, aumentare il contatore "countIntegersNumber" di 1
    -se il numero è negativo, sommare a "sumNegativeNumbers" (+=)
    -pushare i due risultati in "arrayCountPositivesSumNegatives"
-altrimenti ritorna un array vuoto
*/
 
console.log("esercizio 2");

let arrayInteger = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(inputArray) {

    let countIntegersNumber = 0;

    let sumNegativeNumbers = 0;

    let arrayCountPositivesSumNegatives = [];

    if(inputArray != null && inputArray.length > 0 ){
        for (let i = 0; i<inputArray.length; i++){
            if(inputArray[i] > 0){
                countIntegersNumber++;
            }else if (inputArray[i] < 0){
                sumNegativeNumbers += inputArray[i];
            }
        }
    }else{
        return arrayCountPositivesSumNegatives;
    }
        
    arrayCountPositivesSumNegatives.push(countIntegersNumber);
    arrayCountPositivesSumNegatives.push(sumNegativeNumbers);

    return arrayCountPositivesSumNegatives;   
}

console.log(countPositivesSumNegatives(arrayInteger));


