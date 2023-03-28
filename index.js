const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    message: 'To begin generating your README file please provide your project name: ',
    name: 'project',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('Please enter your project name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'Provide a description of your project',
    name: 'description',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please provide a description about your project. Here are some examples of what to include: Information about the project, why you have created it and why you think it will be successful.');
        return false;
      }
    }
  },
  { 
    type: 'input',
    message: 'What technologies were used in your project? Include links: ',
    name: 'technologies',
    validate: technologiesInput => {
      if (technologiesInput) {
        return true;
      } else {
        console.log('Please enter what technologies you used for example APIs, JS, Node etc');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'What challenges did you face in this project?',
    name: 'challenges',
    validate: challengesInput => {
      if (challengesInput) {
        return true;
      } else {
        console.log('Please enter any challenges you faced within this project');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'What successes did you have in this project? ',
    name: 'successes',
    validate: successesInput => {
      if (successesInput) {
        return true;
      } else {
        console.log('Please enter any successes you had within this project');
        return false;
      }
    }
  },
  { 
    type: 'input',
    message: 'How do we use your app? Include a demonstration video link or image: ',
    name: 'demonstration',
    validate: demonstrationInput => {
      if (demonstrationInput) {
        return true;
      } else {
        console.log('Please provide a gif, YouTube link or image URL');
        return false;
      }
    }
  },
  {  
    type: 'input',
    message: 'What are the links for your deployed site?',
    name: 'deployed',
    validate: deployedInput => {
      if (deployedInput) {
        return true;
      } else {
        console.log('Please provide the deployed URL, this can be found in the settings of your GitHub repo on pages');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'What are the links for your repository?',
    name: 'repository',
    validate: repositoryInput => {
      if (repositoryInput) {
        return true;
      } else {
        console.log('Please enter the links for your repository');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'Who created this project? include your name & GitHub link',
    name: 'creator',
    validate: creatorInput => {
      if (creatorInput) {
        return true;
      } else {
        console.log('Please put your full name and include any names of other contributors');
        return false;
      }
    }
  }
];

inquirer.prompt(questions).then((answers) => {
    const generateReadme = generateReadme(answers);
    fs.writeFile('README.md', generateReadme, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Successfully created README.md!');
        }
      });
    });