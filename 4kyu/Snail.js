// Given an n x n array, return the array elements arranged from outermost elements to 
// the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

snail = function(array) {
    // enjoy
    var finalArray = [];
    while (array.length) {
    finalArray.push(...array.shift());
    array.map(row => finalArray.push(row.pop()))
    array.reverse().map(row => row.reverse());
    }
    return finalArray
  }