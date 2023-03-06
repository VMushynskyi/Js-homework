export function isEven(number) {
    const promise = new Promise((resolve, reject) => {
        if (number === 0 || !(typeof number === 'number')) {
            reject(new Error(`Object is: ${number} `))
        } else {
            resolve(number);
        }
    }).catch(error => console.log("Error is: ", error));

    return promise.then(isEvenPromise => {
        return new Promise((resolve) => {
            resolve(isEvenPromise % 2 === 0);
        })
    });
}