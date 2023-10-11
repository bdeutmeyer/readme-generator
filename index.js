// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [ 
  'What is the title of your project?',
  'Please write a description of your project.',
  'Please write any installation instructions.',
  'Please write directions for use.',
  'What kind of license would you like your project to have?',
  'Please provide instructions for how to contribute to this project.',
  'What command should a user use to test your application?',
  'How would you like to be contacted with questions about your application?',
  'What is the link to this project\'s code repository?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const fs = require('fs');
  fs.writeFile('README.md', answers, (err) => err ? console.error(error) : console.log('Success!'));
  
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


//From inquirer website:
var inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'description',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'installation',
    },
    {
      type: 'input',
      message: questions[3],
      name: 'directions',
    },
    {
      type: 'list',
      message: 'Which license would you like to use?',
      name: questions[4],
      choices: ['MIT', 'Creative Commons', 'Mozilla', 'Academic Free'],
    },
    {
      type: 'input',
      message: questions[5],
      name: 'contributors',
    },
    {
      type: 'input',
      message: questions[6],
      name: 'test',
    },
    {
      type: 'input',
      message: questions[7],
      name: 'contact',
    },
    {
      type: 'input',
      message: questions[8],
      name: 'repo',
    },
  ])
  .then((answers) => {
    inquirer.Map(answers);
    writeToFile();
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });