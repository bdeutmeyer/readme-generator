// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseInfo;
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    licenseInfo = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)  
    [License Details](https://opensource.org/licenses/MIT)`
  } else if (license == 'IBM') {
    licenseInfo = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)  
    [License Details](https://opensource.org/licenses/IPL-1.0)`
  } else if (license == 'Mozilla') {
    licenseInfo = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)  
    [License Details](https://opensource.org/licenses/MPL-2.0)`
  } else if (license == 'ISC') {
    licenseInfo = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)  
    [License Details](https://opensource.org/licenses/ISC)`
  } else {
    licenseInfo = ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink() {

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection() {

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.directions}
  ## License
  ${licenseInfo}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.test}
  ## Contact
  ${data.contact}
  ## Repository link
  ${data.repo}
`;
}

module.exports = generateMarkdown;
