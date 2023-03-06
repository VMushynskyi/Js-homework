import { executeHelloWorldPromise } from "./tasks/task_06_1.js";
import { isEven } from "./tasks/task_06_2.js";
import { getPromiseChaimResult } from "./tasks/task_06_3.js";
import { task_4_1_2, task_4_3, task_4_4, task_4_5 } from "./tasks/task_06_4.js";

export function runHomework_6() {

    console.log("\n====================|Homework - 6|====================\n");

    console.log("--------------------|Task - 1|--------------------");
    executeHelloWorldPromise();

    console.log("--------------------|Task - 2|--------------------");
    isEven(4).then(result => console.log("Result if number is 4:", result));
    isEven(3).then(result => console.log("Result if number is 3:", result));
    isEven(0).then(() => console.log("Result if number is 0 is a Error"));
    isEven("?").then(() => console.log("Result if number is '?' is a Error"));

    console.log("--------------------|Task - 3|--------------------");
    getPromiseChaimResult();

    console.log("--------------------|Task - 4|--------------------");
    task_4_1_2();
    task_4_3();
    task_4_4();
    task_4_5();
}