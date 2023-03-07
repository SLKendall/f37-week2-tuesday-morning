let array1 = [1,3,11,2,37,-4]
let array2 = [0,21,33,6,0,0,-9]
let array3 = [0,1,2,3,4,5]

let opposites = false

function addToZero(array){
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
         if (array[i] + array[j] === 0){
            return opposites = true
            
    }
    }
}
}

addToZero(array1)
console.log(opposites)