// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else {
    return `![${license}](https://img.shields.io/badge/LICENSE-${license}-red)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else {
    return `- [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `## License 
    
  ashdfkjsadfkjshfsdhf sdfjhasdf sakdjh ashkjsa dfh ${license}.

    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
  

## Description

${data.description}

## Table of Contents

- [Technologies Used](#technologies-used)
- [Challenges Faced](#challenges-faced)
- [Successes Achieved](#successes-achieved)
- [Demo](#demo)
- [Deployed Site](#deployed-site)
- [Repository](#repository)
- [Credits](#credits)
${renderLicenseLink(data.license)}

## Technologies Used

${data.technologies}

## Installation
${data.installation}

## Challenges Faced

${renderLicenseSection (data.license)}

## Successes Achieved

${data.successes}

## Demo

![Demo](${data.demonstration})

## Deployed Site

![Deployed]${data.deployed}

## Repository

![Repository]${data.repository}

## Credits

This project was created by ${data.creator}.
`;
}

module.exports = generateMarkdown;
