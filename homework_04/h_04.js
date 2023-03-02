import { toCamelCase } from "./tasks/task_04_1.js";
import { doFilterAndReplace } from "./tasks/task_04_2.js";
import { mapToAnotherObject } from "./tasks/task_04_3.js";
import { unique } from "./tasks/task_04_4.js";
import { groupById } from "./tasks/task_04_5.js";
import { truncateText } from "./tasks/task_04_6.js";
import { checkSpam } from "./tasks/task_04_7.js";
import { destructingAssigment } from "./tasks/task_04_8.js";


export function runHomework_4() {

    console.log("\n====================|Homework - 4|====================\n");

    console.log("--------------------|Task - 1|--------------------");
    console.log("Camelcase words: ", toCamelCase("background-color"));
    console.log("Camelcase words: ", toCamelCase("list-style-image"));
    console.log("Camelcase words: ", toCamelCase("-webkit-transition"));

    console.log("--------------------|Task - 2|--------------------");
    console.log("Find and replace words: ", doFilterAndReplace([5, 3, 8, 1], 1, 4));

    console.log("--------------------|Task - 3|--------------------");
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };
    let users = [john, pete, mary];
    console.log("Create new object: ");
    console.log(mapToAnotherObject(users));

    console.log("--------------------|Task - 4|--------------------");
    let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];
    console.log("Filter unique array items: ");
    console.log(unique(strings));

    console.log("--------------------|Task - 5|--------------------");
    let second_users = [
        { id: 'john', name: "John Smith", age: 20 },
        { id: 'ann', name: "Ann Smith", age: 24 },
        { id: 'pete', name: "Pete Peterson", age: 31 },
    ];
    console.log("Group array items: ");
    console.log(groupById(second_users));

    console.log("--------------------|Task - 6|--------------------");
    console.log("Truncate the text with length: ");
    console.log(truncateText("What I'd like to tell on this topic is:", 20));
    console.log(truncateText("Hi everyone!", 20));

    console.log("--------------------|Task - 7|--------------------");
    console.log("Check spam text: ");
    console.log(checkSpam("buy ViAgRA now"));
    console.log(checkSpam("free xxxxx"));
    console.log(checkSpam("innocent rabbit"));

    console.log("--------------------|Task - 8|--------------------");
    console.log("Make destructive assigment to the object: ");
    let user = {
        name: "John",
        years: 30
    }
    destructingAssigment(user);

}