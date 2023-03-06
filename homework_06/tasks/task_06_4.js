function getProducts(productsFn) {
    let products = ['Bread', 'Butter', 'Water'];
    setTimeout(() => productsFn(products), 2000);
    return products;
}

function getPrices(pricesFn) {
    let prices = [10, 20, 15];
    setTimeout(() => pricesFn(prices), 1000);
    return prices;
}

export function task_4_1_2() {
    getProducts((products) => console.log("1 issues: ", products));
    getPrices((prices) => console.log("2 issues", prices));
}

export function task_4_3() {
    const products = getProducts((products) => products);
    const prices = getPrices((prices) => prices);

    const obj = products.reduce((accumulator, key, index) => {
        return { ...accumulator, [key]: prices[index] };
    }, {});

    console.log("3 issue: ", obj);
}

export function task_4_4() {
    getProductPromise().then(products => {
        console.log("4 issue, Product promise result:", products);
    });
    getPricesPromices().then(prices => {
        console.log("4 issue, Price promise result: ", prices);
    });
}

export async function task_4_5() {
    const prices = await getPricesPromices();
    const products = await getProductPromise();

    const object = products.reduce((accumulator, key, index) => {
        return { ...accumulator, [key]: prices[index] };
    }, {});

    console.log("5 issue", object);
}

function getProductPromise() {
    return new Promise((resolve) => {
        resolve(getProducts(products => { return products }));
    });
}

function getPricesPromices() {
    return new Promise((resolve) => {
        resolve(getPrices(prices => { return prices }));
    })
}