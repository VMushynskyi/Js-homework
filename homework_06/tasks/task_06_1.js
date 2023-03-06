export function executeHelloWorldPromise() {
    let promise = new Promise(resolve => {
        setTimeout(() => resolve("hello world"), 2000);
    });

    promise.then(result => console.log(result));
}

