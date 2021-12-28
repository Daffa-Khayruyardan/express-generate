// import some packages 
const path = require('path');
const fs = require('fs').promises;
const process = require('process');
const exec = require('child_process').exec;

// init some color text here
const font_black = "\x1b[30m"
const font_red = "\x1b[31m"
const font_green = "\x1b[32m"
const font_yellow = "\x1b[33m"
const font_blue = "\x1b[34m"
const font_magenta = "\x1b[35m"
const font_cyan = "\x1b[36m"
const font_white = "\x1b[37m"

// make project directory function
async function makeDir(name_folder) {
    let newDir;

    newDir = await fs.mkdir(process.cwd() + '/' + name_folder);
}

// make changedir function
async function giveCMD(my_cmd) {
    let dirGoal;

    dirGoal = await exec(my_cmd);
}

// make copyfile function
async function copyFile(src_path, dest_path) {
    let file_copy;

    file_copy = await fs.copyFile(src_path, dest_path);
}

// clear screen
console.log('\033c');

// simple logo for cli tool
console.log(`${font_cyan}  _______  ${font_green}____      ____  ${font_magenta}______     ${font_yellow}      _____      ______     `);
console.log(`${font_cyan} |  _____| ${font_green}\\   \\    /   / ${font_magenta}|  ___ )  ${font_yellow}       |__   |    |      |  `);
console.log(`${font_cyan} | |_____  ${font_green} \\   \\  /   /  ${font_magenta}| |__| )  ${font_yellow}          |  |    |   ___|  `);
console.log(`${font_cyan} |  _____|  ${font_green} \\   \\/   /   ${font_magenta}|  ____)  ${font_yellow}          |  |  _(___   )   `);
console.log(`${font_cyan} | |_____   ${font_green} /   /\\   \\   ${font_magenta}|  |      ${font_yellow}   |\\_____|  | |       |   `);
console.log(`${font_cyan} |_______|  ${font_green}/___/  \\___\\  ${font_magenta}|__|      ${font_yellow}   |_________| |_______|    `);
console.log('\n');

console.log(`Create and init project -> ${font_cyan + process.argv[2]}`);

// create new directory
makeDir(process.argv[2]);

if(process.argv[3] == 'ejs') {
    // change directory location
    process.chdir(process.cwd() + '/' + process.argv[2].toString())

    // activity log
    console.log(`${font_yellow}Make directory inside project -> ${font_cyan + process.argv[2]}`);

    // make some dir in project folder
    makeDir('views');
    makeDir('public');
    makeDir('public/images');
    makeDir('public/scripts');
    makeDir('public/style');
    makeDir('routes');

    // activity log
    console.log(`${font_yellow}Copy file inside project -> ${font_cyan + process.argv[2]}`);

    // copy some template files 
    copyFile(__dirname + '/templates/app-ejs/app.js', process.cwd() + '/app.js');
    copyFile(__dirname + '/templates/views-ejs/index.ejs', process.cwd() + '/views/index.ejs');
    copyFile(__dirname + '/templates/routes/UserRoute.js', process.cwd() + '/routes/UserRoute.js');
    copyFile(__dirname + '/templates/public/images/Icon.svg', process.cwd() + '/public/images/Icon.svg');
    copyFile(__dirname + '/templates/public/scripts/index.js', process.cwd() + '/public/scripts/index.js');
    copyFile(__dirname + '/templates/public/style/style.css', process.cwd() + '/public/style/style.css');

    // activity log
    console.log(`${font_yellow}Init json file inside project -> ${font_cyan + process.argv[2]}`);

    // init package.json
    giveCMD('npm init -y');


}else if(process.argv[3] == 'pug') {
    
}