// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badgeName = license
  if(license == "No license"){
    return "";
  }
  else{
    while(badgeName.search(" ") > 0){
      badgeName = badgeName.replace(" ", "_")
    }
    while(badgeName.search("-") > 0){
      badgeName = badgeName.replace("-", "_")
    }
    badgeName = badgeName + "-green"
    const badge = `![Static Badge](https://img.shields.io/badge/license-${badgeName})`
    return badge;
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license)
  if(license == ""){
    return "";
  }
  else{
    const licenseLink = `http://choosealicense.com/licenses/${license}`
    return licenseLink;
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "No license"){
    return "";
  }
  else{
    return `This product is protected by a [${license}](${licenseLink}).`
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data, map) {
  // Create a table of contents if it is requested - else just enter an empty line
  if(data.Table_of_Contents == "Yes"){
    //Create the table of contents
    data.Table_of_Contents =
    `## **Table of Contents**
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
    `;
  }
  else{
    data.Table_of_Contents = "";
  }

  // Build a badge, create the license link and adjust the header accordingly. These all take into account if a license is not selected as well
  badge = renderLicenseBadge(data.License)
  licenseLink = renderLicenseLink(map.get(data.License))
  licenseText = renderLicenseSection(data.License)

  // Process the data into a Markdown format then return the data so it can be saved to a file
  return `# **${data.Title}**
${badge}
## Description
${data.Description}

${data.Table_of_Contents}
## Installation
${data.Installation}

## Usage
${data.Usage}

## License
${licenseText}

## Contributing
${data.Contributions}

## Tests
${data.Tests}

## Questions
My GitHub username is ${data.GitHubUsername} and my GitHub profile can be found here [${data.GitHubProfileURL}](${data.GitHubProfileURL}).

${data.ContactInstructions} 
${data.EmailAddress}
  `;
}

module.exports = generateMarkdown;
