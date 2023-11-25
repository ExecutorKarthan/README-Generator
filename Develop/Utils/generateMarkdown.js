// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == ""){
    return "";
  }
  else{
    while(license.search(" ") > 0){
      license = license.replace(" ", "_")
    }
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
  const licenseBody = ""
  if(license == ""){
    return "";
  }
  else{
    fetch(`https://api.github.com/licenses/${license}`)
    .then(function (response){
      return response.json()
      })
    .then(function (response) {
      console.log(response)
      console.log(response.body)
      licenseBody = response.body
    })
    return licenseBody;
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

  console.log(data.License)
  console.log(map.get(data.License))
  console.log(map.get(data.License))
  badge = renderLicenseBadge(data.License)
  licenseLink = renderLicenseLink(map.get(data.License))
  licenseText = renderLicenseSection(map.get(data.License))
  console.log(badge)
  console.log(licenseLink)
  console.log(licenseText)

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
