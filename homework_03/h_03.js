import { calculateSum } from "./tasks/task_03_1.js";
import { isTriangle } from "./tasks/task_03_2.js";
import { isIsogram } from "./tasks/task_03_3.js";
import { isPalindrom } from "./tasks/task_03_4.js";
import { showFormattedDate } from "./tasks/task_03_5.js";
import { letterCount } from "./tasks/task_03_6.js";
import { countRepetitions } from "./tasks/task_03_7.js";
import { calculateNumber } from "./tasks/task_03_8.js";

export function runHomework_3() {
    console.log("\n====================|Homework - 3|====================\n");
    console.log("--------------------|Task - 1|--------------------");
    console.log("Calculated sum: ", calculateSum([1, 5, 6, 8, 9, 1, 2]));

    console.log("--------------------|Task - 2|--------------------");
    console.log("Is triangle can be created: ", isTriangle(5, 6, 7));
    console.log("Is triangle can be created: ", isTriangle(2, 9, 3));

    console.log("--------------------|Task - 3|--------------------");
    console.log("Is string isogram: ", isIsogram('Dermatoglyphics'));
    console.log("Is string isogram: ", isIsogram('abab'));
    console.log("Is string isogram: ", isIsogram(''));
    console.log("Is string isogram: ", isIsogram('a'));

    console.log("--------------------|Task - 4|--------------------");
    console.log("Is 'Dermatoglyphic' palindrom: ", isPalindrom('Dermatoglyphic'));
    console.log("Is 'abbabba' palindrom:        ", isPalindrom('abbabba'));
    console.log("Is '' palindrom:               ", isPalindrom(''));
    console.log("Is 'a' palindrom:              ", isPalindrom('a'));
    console.log("Is 'racecar' palindrom:        ", isPalindrom('racecar'));
    console.log("Is 'ababa' palindrom:          ", isPalindrom('ababa'));
    console.log("Is 'abbbba' palindrom:         ", isPalindrom('abbbba'));
    console.log("Is '1111' palindrom:           ", isPalindrom('1111'));
    console.log("Is '11111' palindrom:          ", isPalindrom('11111'));
    console.log("Is '12345' palindrom:          ", isPalindrom('12345'));
    console.log("Is '1234' palindrom:           ", isPalindrom('1234'));

    console.log("--------------------|Task - 5|--------------------");
    console.log("Format date object: ", showFormattedDate(new Date('05/12/22')));

    console.log("--------------------|Task - 6|--------------------");
    console.log("Letter count for Marry, r : ", letterCount("Marry", "r"));
    console.log("Letter count for Barny, y : ", letterCount("Barny", "y"));
    console.log("Letter count for '', z : ", letterCount("", "z"));

    console.log("--------------------|Task - 7|--------------------");
    console.log("Count objects repetition : ", countRepetitions(['banana', 'apple', 'banana']));

    console.log("--------------------|Task - 8|--------------------");
    console.log("Convert binary to integer : ", calculateNumber([0, 1, 0, 1]));
    console.log("Convert binary to integer : ", calculateNumber([1, 0, 0, 1]));

}