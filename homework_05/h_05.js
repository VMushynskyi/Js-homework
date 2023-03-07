import { Apple } from './tasks/task_05_1.js'
import { Clock } from './tasks/clock.js';
import { ExtendedClock } from './tasks/extended-clock.js';

export function runHomework_5() {

    console.log("\n====================|Homework - 5|====================\n");

    console.log("--------------------|Task - 1|--------------------");
    var obj = new Apple("Hello class");
    console.log(obj);

    console.log("--------------------|Task - 2|--------------------");
    let clock = new Clock({ template: "h:m:s" });
    clock.start();

    console.log("--------------------|Task - 3|--------------------");
    let extendedClock = new ExtendedClock({ template: "h:m:s" }, 2000);
    extendedClock.start()
}