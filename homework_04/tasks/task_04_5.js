/*
Create keyed object from array
Let’s say we received an array of users in the form {id:..., name:..., age:... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
*/

export function groupById(arr) {

    return arr.reduce((array, element) => {
        array[element.id] = element;
        return array
    }, {})
}