// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badgeName = license
  if(license == "No license"){
    return "";
  }
  else{
    while(badgeName.search(" ") > 0){
      console.log(badgeName)
      console.log(badgeName.search(" "))
      badgeName = badgeName.replace(" ", "_")
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
    return `This product is protected by a ${license}.`
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data, map) {
  // Create a table of contents if it is requested - else just enter an empty line
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

  // Build a badge, create the license link and adjust the header accordingly. These all take into account if a license is not selected as well
  badge = renderLicenseBadge(data.License)
  licenseLink = renderLicenseLink(map.get(data.License))
  licenseHeader = `[${data.License}](${licenseLink})`
  if(licenseLink == ""){
    licenseHeader = `${data.License}`
  }
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

## Contributions
${data.Contributions}

## ${licenseHeader}
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
