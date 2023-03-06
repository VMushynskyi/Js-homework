export function getPromiseChaimResult() {
    Promise.resolve('Yurii')
        .then(data => {
            console.log(data);
            return data;
        }) // 'Yurii'
        .then(data => {
            console.log(data.charAt(0));
            return data.charAt(0);
        }) // 'Y' (first letter)
        .then(data => {
            console.log(data.charCodeAt(0));
            return data.charCodeAt(0);
        }) // 89 (UTF-16 code of Y: use charCodeAt or any similar function)
        .then(data => {
            console.log(data - 40);
            return data - 40;
        }) // 49 (simply take away 40)
        .then(data => {
            console.log(Math.sqrt(data));
        }) // 7 (square root of 49 (use Math.sqrt))
}