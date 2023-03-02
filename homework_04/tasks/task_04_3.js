/*
Map to objects
You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
*/

export function mapToAnotherObject(array) {
    let res = [];

    array.map((element) => {
        res.push({
            fullName: element.name + " " + element.surname,
            id: element.id
        });
    });

    return res;
}