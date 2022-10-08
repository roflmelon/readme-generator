// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    let badge;
    switch (license) {
      case 'MIT':
        badge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
        return badge;
      case 'GNU GPLv3':
        badge = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
        return badge;
      case 'ISC':
        badge = 'https://img.shields.io/badge/License-ISC-blue.svg';
        return badge;
      case 'Apache 2.0':
        badge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
        return badge;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    let link;
    switch (license) {
      case 'MIT':
        link = 'https://choosealicense.com/licenses/mit/';
        return link;
      case 'GNU GPLv3':
        link = 'https://choosealicense.com/licenses/gpl-3.0/';
        return link;
      case 'ISC':
        link = 'https://choosealicense.com/licenses/isc/';
        return link;
      case 'Apache 2.0':
        link = 'https://choosealicense.com/licenses/apache-2.0/';
        return link;
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    let badge = renderLicenseBadge(license);
    let link = renderLicenseLink(license);
    return `[![License](${badge})](${link})`;
  }
}

//table of content
function tableOfContentChoice(data) {
  if (data) {
    return `
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Credits](#credits)
- [Questions and Inquiry](#questions-and-inquiry)`;
  } else {
    return 'N/A';
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let title = data.title;
  let description = splitInputs(data.description);
  let tableOfContent = tableOfContentChoice(data.tableOfContent);
  let installation = splitInputs(data.installation);
  let contribute = splitInputs(data.contribute);
  let testing = splitInputs(data.testing);
  let usage = splitInputs(data.usage);
  let license = renderLicenseSection(data.license);
  let credits = splitInputs(data.credits);
  let github = data.github;
  let email = data.email;

  let template = `
# ${title}

${license}

## Description
${description}

## Table of Contents
${tableOfContent}

## Installation
${installation}

## Usage
${usage}

## License
All copyrights are covered under the ${data.license} license

${license}

## How to Contribute
${contribute}

## Tests
${testing}

## Credits
${credits}

## Questions and Inquiry
[GitHub Profile](#https://github.com/${github})

For any questions or inquiries, you can contact me at:
${email}
`;

  return template;
}
//splits input into list
function splitInputs(input) {
  if (!input) {
    return 'N/A';
  } else {
    let list = input.split('>>>>');
    let combined = '';
    for (let i = 0; i < list.length; i++) {
      combined += '- ' + list[i] + '\n';
    }
    return combined;
  }
}
module.exports = generateMarkdown;
