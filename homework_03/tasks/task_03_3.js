export function isIsogram(string) {
    const ignoredSize = 1;
    const actualSize = string.length;

    const expectedSize = new Set(string.split("")).size;

    return actualSize != ignoredSize ? actualSize === expectedSize : "Ignored";
}