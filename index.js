//Dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const prompts = require('./utils/prompts.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

//Function to wrap inquirer so that it's no longer in the global scope
function init() {
  inquirer
  .prompt(prompts)
  .then((response) => {
    fs.writeFile('genREADME.md', generateMarkdown(response), (err) =>
    err ? console.error(err) : console.log('Success!'));
  });
}

// Function call to initialize app
init();