export function countRepetitions(array) {
    let counter = 0;
    let resultObject = {};
    let arr = Array.from(new Set(array));

    for (const outerArrayElement of arr) {
        for (const innerArrayElement of array) {
            if (outerArrayElement === innerArrayElement) {
                ++counter;
            }
        }
        resultObject[outerArrayElement] = counter;
        counter = 0;
    }
    return resultObject;
}