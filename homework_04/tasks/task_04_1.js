/* 
Transform to camelCase
Write the function toCamelCase(str) that changes words separated by special characters like [.\-=/_] 
e.g. "some-string-of-mine” into camel-cased “someStringOfMine”.
That is: removes all special characters, each word after special character becomes uppercased.
Examples:
toCamelCase("background-color")=='backgroundColor';
toCamelCase("list-style-image")=='listStyleImage';
toCamelCase("-webkit-transition")=='WebkitTransition';
*/

export function toCamelCase(string) {
    const wordsResult = string.split(/[.\-=/_]/g);

    return wordsResult
        .map(element => {
            if (wordsResult.indexOf(element) > 0) {
                element = element.replace(/^[a-z]/g, element.charAt(0).toUpperCase())
            }
            return element;
        }
        ).join('');
}