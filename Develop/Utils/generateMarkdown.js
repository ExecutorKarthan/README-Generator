// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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

  return `# **${data.Title}**
${data.Table_of_Contents}
    
## Description
${data.Description}

## Installation
${data.Installation}

## Usage
${data.Usage}

## Contributions
${data.Contributions}

## ${data.License} License


## Testing
${data.Tests}

## Questions
My GitHub username is [${data.GitHubUsername}](${data.GitHubProfileURL})

${data.ContactInstructions} 
${data.EmailAddress}
  `;
}

module.exports = generateMarkdown;
