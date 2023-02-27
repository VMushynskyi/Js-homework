export function isPalindrom(string) {
    if (string.length !== 0) {
        const palindromArray = string.split('');
        if (palindromArray.length % 2 === 0 && palindromArray.length > 1) {
            const firstPart = getPartOfTheArray(palindromArray, 0, palindromArray.length / 2 - 1);
            const secondPart = getPartOfTheArray(palindromArray, palindromArray.length / 2, palindromArray.length - 1);

            return firstPart.join('') === secondPart.reverse().join('');
        } else if (palindromArray.length % 2 === 1 && palindromArray.length > 1) {
            const firstPart = getPartOfTheArray(palindromArray, 0, palindromArray.length / 2 - 1);
            const secondPart = getPartOfTheArray(palindromArray, palindromArray.length / 2 + 1, palindromArray.length - 1);

            return firstPart.join('') === secondPart.reverse().join('');
        } else if (string.length === 1) {
            return "Ignore";
        }
    }
    return true;
}

function getPartOfTheArray(array, startIndex, endIndex) {
    return array.slice(startIndex, endIndex + 1);
}