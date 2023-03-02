/*
Truncate the text
Create a function truncate(str, maxlength) that checks the length of the str and, 
if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
The result of the function should be the truncated (if needed) string.
*/

export function truncateText(str, maxLength) {
    return str.length > maxLength ? str.slice(0, 19) + "..." : str;
}