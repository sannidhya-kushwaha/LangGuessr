// REMEMBER TO RUN "npm install" in your terminal (in the same directory as this file)
const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const input = process.argv[2];
const langCode = franc(input);
if(langCode === 'und'){
    console.log("Sorry Couldn't Figure It Out! Try With More Sample Text".red)
} else{
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language.name}`.green);
}
