//Sets value of licenseInfo as badge url and info url to be passed to generateMarkdown()
let licenseBadge;
function pickLicenseBadge(license) {
  if (license == 'MIT') {
    licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license == 'IBM') {
    licenseBadge = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`
  } else if (license == 'Mozilla') {
    licenseBadge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)  `
  } else if (license == 'ISC') {
    licenseBadge = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
  } else {
    licenseBadge = ''
  }
}

let licenseLink;
function pickLicenseLink(license) {
  if (license == 'MIT') {
    licenseLink = `[License Details](https://opensource.org/licenses/MIT)`
  } else if (license == 'IBM') {
    licenseLink = `[License Details](https://opensource.org/licenses/IPL-1.0)`
  } else if (license == 'Mozilla') {
    licenseLink = `![License Details](https://opensource.org/licenses/MPL-2.0)`
  } else if (license == 'ISC') {
    licenseLink = `[License Details](https://opensource.org/licenses/ISC)`
  } else {
    licenseLink = ''
  }
}


//Generates the markdown file, fills in fields with user input
function generateMarkdown(data) {
  pickLicenseBadge(data.license);
  pickLicenseLink(data.license);
  return `# ${data.title}
  ${licenseBadge}
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)
  <a name="description"></a>
  ## Description 
  ${data.description}
  <a name="installation"></a>
  ## Installation 
  ${data.installation}
  <a name="usage"></a>
  ## Usage 
  ${data.directions}
  <a name="license"></a>
  ## License 
  This application is covered under the ${data.license} license.  
  ${licenseLink}
  <a name="contributing"></a>
  ## Contributing 
  ${data.contributing}
  <a name="tests"></a>
  ## Tests 
  ${data.test}
  <a name="questions"></a>
  ## Questions  
  This application's code repository can be found at https://github.com/${data.username}/${data.repo}  
  Please contact me at ${data.contact} with any additional questions.
`;
}

module.exports = generateMarkdown;
