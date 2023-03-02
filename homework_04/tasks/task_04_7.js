/*
Check for spam
Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
*/

export function checkSpam(str) {
    return new RegExp('XXX', 'gi').test(str) || new RegExp('viagra', 'gi').test(str);
}