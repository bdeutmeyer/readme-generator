//Sets value of licenseBadge as badge url to be passed to generateMarkdown()
let licenseBadge;
const pickLicenseBadge = (license) => {
  switch(license) {
    case 'MIT':
      licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case 'IBM':
      licenseBadge = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`;
      break;
    case 'Mozilla':
      licenseBadge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
      break;
    case 'ISC':
      licenseBadge = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
      break;
    case '':
      licenseBadge = '';
      break;
  }
}

//Sets value of licenseLink as license info url to be passed to generateMarkdown()
let licenseLink;
const pickLicenseLink = (license) => {
  switch(license) {
    case 'MIT':
      licenseLink = `[License Details](https://opensource.org/licenses/MIT)`;
      break;
    case 'IBM':
      licenseLink = `[License Details](https://opensource.org/license/ibmpl-php/)`;
      break;
    case 'Mozilla':
      licenseLink = `[License Details](https://opensource.org/licenses/MPL-2.0)`
      break;
    case 'ISC':
      licenseLink = `[License Details](https://opensource.org/licenses/ISC)`;
      break;
    case '':
      licenseLink = '';
      break;
  }
}

//Generates the markdown file, fills in fields with user input
const generateMarkdown = (data) => {
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
