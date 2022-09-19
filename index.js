const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


const questions = () => {
  return inquirer.prompt([
    {
      message: 'What is the title of your Project?',
      name: 'title',
    },
    {
      message: 'Which licence would you prefer to select?',
      choices: ['The MIT License', 'Apache 2.0 License', 'GNU GPL v3', 'None'],
      name: 'license',
      type: 'list',
    },
    {
      message: 'Provide your project a description. if any?',
      name: 'description',
    },
    {
      message: 'What technologies were used in this project?',
      name: 'technologiesUsed',
    },
    {
      message: 'Does the user need to install any package?',
      name: 'installation',
    },
    {
      message: 'Is there a usage manual that should be followed?',
      name: 'usage',
    },
    {
      message: 'Is there any guidelines for contributing?',
      name: 'contributing',
    },
    {
      message: 'Are there any tests for your project?',
      name: 'tests',
    },
    {
      message: 'Please provide your Github username!',
      name: 'githubusername',
    },
    {
      message: 'What is the best way to contact your if the user has any questions?',
      name: 'questions',
    }
  ]).then((data) => {
    writeToFile('CustomReadMe.md', generateMarkdown(data));
  })
}
// function to thorw data into md file or an error 
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Generating your README File...'))
}
// what gets loaded when the app starts 
function init() {
  questions();
}

// Function call to initialize app
init();
