export function letterCount(firstString, secondString) {
    return firstString.split('').filter(letter => letter === secondString).length;
}