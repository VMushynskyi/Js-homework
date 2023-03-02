/*
Filter unique array members
Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.
*/

export function unique(array){
    return Array.from(new Set(array)).join(', ');
}