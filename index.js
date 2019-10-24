// ******************** //
//    Word Searching    //
// ******************** //

const fs = require("fs");
const mystream = fs.createReadStream("data.txt", "utf8");

let chunkNumber = 1;
let wordCounter = 0;

let word = "Dracula";

let regex = new RegExp(word.toLowerCase(), "g");
// to make the search case insensitive (finding all different spellings like Dracula, DRACULA and dracula) the toLowerCase() method is used on the word we are searching for

mystream.on("data", chunk => {
    console.log(`Reading chunk no. ${chunkNumber}`);
    chunkNumber++;
    console.log(chunk.length);

    let arr = chunk.split(" ");

    arr.forEach(el => {
        if (el.toLowerCase().match(regex)) wordCounter++;
        // to achieve the finding of the different spellings of the search word, we also need use the to toLowerCase() method on the words in the text
    });
    console.log(`I found the word ${word} ${wordCounter} times`);
});

mystream.on("end", () => {
    console.log("***********************************************************************");
});
