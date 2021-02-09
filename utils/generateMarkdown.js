// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.Title}
  http://github.com/${data.Username}/${data.Title}
  https://drive.google.com/file/d/1LIUr2O0066s-SmRbTSi3VzI4y59ddumV/view

  # Description 
  ${data.Description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  The following must be installed to run the application: ${data.Installation}
  # Usage
  Use ${data.Usage}
  # Contributing
  Contributors: ${data.Contributing}
  # License
  This project is licensed under ${data.License}
  # Tests
  What is needed to run tests: ${data.Tests}
  # Questions
  Any question here is my email: ${data.Email}and my Github: ${data.Username}
`;
}

module.exports = generateMarkdown;
