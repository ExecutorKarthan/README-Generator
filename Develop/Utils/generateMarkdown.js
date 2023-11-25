// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badgeName = license
  if(license == ""){
    return "";
  }
  else{
    while(badgeName.search(" ") > 0){
      console.log(badgeName)
      console.log(badgeName.search(" "))
      badgeName = badgeName.replace(" ", "_")
    }
    badgeName = badgeName + "-green"
    const badge = `https://img.shields.io/badge/license-${badgeName}`
    return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == ""){
    return "";
  }
  else{
    const licenseLink = `http://choosealicense.com/licenses/${license}`
    return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == ""){
    return "This product does not have a license";
  }
  else{
    return `This product is protected by ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, map) {
  if(data.Table_of_Contents == "Yes"){
    data.Table_of_Contents =
    `## **Table of Contents**
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributions](#contributions)
4. [License](#license)
    `;
  }
  else{
    data.Table_of_Contents = "";
  }

  badge = renderLicenseBadge(data.License)
  licenseLink = renderLicenseLink(map.get(data.License))
  licenseText = renderLicenseSection(data.License)

  return `# **${data.Title}**
${badge}
## Description
${data.Description}

${data.Table_of_Contents}
## Installation
${data.Installation}

## Usage
${data.Usage}

## Contributions
${data.Contributions}

## [${data.License}](${licenseLink})
${licenseText}

## Testing
${data.Tests}

## Questions
My GitHub username is [${data.GitHubUsername}](${data.GitHubProfileURL})

${data.ContactInstructions} 
${data.EmailAddress}
  `;
}

module.exports = generateMarkdown;
