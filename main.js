// This is the SPLICE method this will delete element from the array
// example: 
let arr = ['I', 'go', 'home'];
delete arr [1]; // remove "go"
alert( arr[1]); // undefined

// now arr = ["I",  , "home"];
alert( arr.length ); // 3  <---- the element was removed , but the array still has 3 elements, we can see that when we call the length of the array.


// the arr.splice method is a swiss army knife for arrays. it can do everything: insert, remove and replace elements. 

arr.splice(start[, deleteCount, elem1, ...arr, elemN])

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

// easy, right? Starting from the index 1 it removed 1 Element.
// Now let remove the first 3 elements and replace them with another.
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr.splice( 0, 3, "let's", "dance" );
alert( arr )// now ["Lets", "dance", "right", "now"]

// here we can see that splice returns the array of removed elements. 
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 2 first elements
let removed = arr.splice( 0, 2 );
alert( removed ); //"I", "study" <----array of removed elements


The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:

let arr = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"


// negative indexes are also allowed
// here and in other array methods, negative indexes are allowed. They specify the position from the end of the array, 
let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements, 
// then insert 3 and 4
arr.splice( -1, 0, 3, 4);
alert( arr ); // 1, 2, 3, 4, 5

-------------------------------------------------------------------------------------

// This is the SLICE method this will delete element from the array
// The syntax is:
arr.slice([start], [end])
// It returns a new array coping to it all items from index start to end( not including end ) but start & end can be negative, in that case position from array end is assumed.
let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e, s (copy from 1 to 3 ) but not the end
alert( arr.slice(-2) ); // s,t (copy from 02 till the end)

// We can also call it without arguments: arr.slice() creates a copy fo arr. That's often used to obtain a copy for further transformations that should not affect the original array.
arr.slice()

-------------------------------------------------------------------------------------


// This is the CONCAT method 
// The method arr.concat creates a new array that includes values from other arrays and additional items.
// The syntax is : 
arr.concat(arg1, arg2...)
// its accepts any number of arguments - either arrays or values.
// The result is a new array containing items from arr, then arg1, arg2 etc
// For example:

// create an array from: arr and [3,4]
let arr = [1, 2];
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert(arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:

let arr = [1,2];
let arrayLike = {
  0: "something",
  length: 1
};
alert( arr.concat(arrayLike)); // 1,2[object Object]

//...But if an array-like object has a special Symbol.isConcatSpreadable property, then it's treated as an array by concat: its elements are added instead:

let arr = [1,2];
let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  lenth: 2
};
alert( arr.concat(arrayLike)); // 1,2, something, else

-------------------------------------------------------------------------------------

// Iterate:forEach
// The arr.foreach method allows to run a function for every element of the array.
// The Syntax:
arr.forEach(funciton(item, index, array){
  //...do something with item
})

// For instance this shows each element of the array:
// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// and this code is more elaborate about their position in the target array:
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

-------------------------------------------------------------------------------------

// Searching in array
// Now lets cover methods that search in an array 

// indexOf/lastIndexOf and includes
// The methods arr.indexOf and arr.includes ahve the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:





















