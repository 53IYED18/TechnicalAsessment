// Create a function called findSpecies that takes in an array, loops through
// the array and returns an array of all of the species values for each object.

var findSpecies;
function findSpecies (arr){
    let speciesArray=[];
    for (let i=0; i< arr.length; i++){
        speciesArray.push(arr[i].species)
    }
    return speciesArray
}

