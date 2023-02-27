export function showFormattedDate(unformattedDate) {
    const day = unformattedDate.getDate();
    const month = unformattedDate.getMonth();
    const year = unformattedDate.getFullYear();

    console.log(day, " of ", getMonthName(month + 1), ", ", year);
}

function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', { month: 'long' });
}