var musicBandName = "Blue October";
var musicBandSong = "Say It";
var concatenatedName;

function concatenateTwoWords(bandName, bandSong) {
    concatenatedName = bandName + bandSong
    console.log(concatenatedName)
    return concatenatedName;
}

function logWordLettersInLine() {
    for (let n = 0; n <= concatenatedName.length - 1; n++) {
        console.log(concatenatedName[n]);
    }
}

function logTheFullBandName(musicBandName) {
    let fullMusicBandName = "";
    for (let n = 0; n <= concatenatedName.length; n++) {
        if (musicBandName.length === n) {
            console.log("Result full music band name: ", fullMusicBandName);
            break;
        }
        fullMusicBandName += concatenatedName[n];
    }
}

function calculateFactorial(number) {
    if (number === 0) {
        return 1;
    } else {
        return calculateFactorial(number - 1) * number;
    }
}

function swithStatementResult() {
    const number = 2;
    switch (number) {
        case 0:
            console.log("Number is 0");
            break;
        case 1:
            console.log("Number is 1");
            break;
        case 2:
        case 3:
            console.log("Number is 2, or maybe 3");
            break;
        default:
            console.log("Number is greater than 3");
            break;
    }
}

console.log("1. Concatenate two words:");
concatenateTwoWords(musicBandName, musicBandSong);
console.log("2. Words in new line");
logWordLettersInLine();
console.log("3. Print Full music band Name");
logTheFullBandName(musicBandName);
console.log("4. Factorial :", calculateFactorial(10));
console.log("5. Swith statment task")
swithStatementResult();