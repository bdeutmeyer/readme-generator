const questionsArray = [ 
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

const prompts = [
  {
    type: 'input',
    message: questionsArray[0],
    name: 'title',
  },
  {
    type: 'input',
    message: questionsArray[1],
    name: 'description',
  },
  {
    type: 'input',
    message: questionsArray[2],
    name: 'installation',
  },
  {
    type: 'input',
    message: questionsArray[3],
    name: 'directions',
  },
  {
    type: 'list',
    message: questionsArray[4],
    name: 'license',
    choices: ['MIT', 'IBM', 'Mozilla', 'ISC'],
  },
  {
    type: 'input',
    message: questionsArray[5],
    name: 'contributing',
  },
  {
    type: 'input',
    message: questionsArray[6],
    name: 'test',
  },
  {
    type: 'input',
    message: questionsArray[7],
    name: 'contact',
  },
  {
    type: 'input',
    message: questionsArray[8],
    name: 'repo',
  },
];

module.exports = prompts;