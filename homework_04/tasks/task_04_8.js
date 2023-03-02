/*
Destructuring assignment
Write the destructuring assignment that reads:
name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)
*/

export function destructingAssigment(user) {
    let { name, years: age, isAdmin = false } = user;
    console.log(name);
    console.log(age);
    console.log(isAdmin);
}