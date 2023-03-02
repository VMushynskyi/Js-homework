/*
Filter and replace
Write a function  (arr, a, b) that gets an array arr and removes from it all values except those that are between a and b.
The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/

export function doFilterAndReplace(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}