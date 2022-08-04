// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

const renderLicenseBadge = (license) => {
  
  if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if(license === "GNU"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if(license === "Mozilla"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else {
    return ""
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// // function renderLicenseLink(license) {}

const renderLicenseLink = (license) => {
  if (license == "MIT"){
    return "https://opensource.org/licenses/MIT"
  } else if (license == "GNU"){
    return "https://www.gnu.org/licenses/gpl-3.0"
  } else if (license === "Mozilla"){
    return "https://opensource.org/licenses/MPL-2.0"
  } else {
    return ""
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// // function renderLicenseSection(license) {}

const renderLicenseSection = (license) => {
  if(license === "MIT"){
    return `
    MIT License

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

    Click the link for more details!
    `

  } if(license === "GNU"){
    return `
    GNU AFFERO GENERAL PUBLIC LICENSE
    Version 3, 19 November 2007

    Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
    Everyone is permitted to copy and distribute verbatim copies
    of this license document, but changing it is not allowed.

    Preamble

    The GNU Affero General Public License is a free, copyleft license for
    software and other kinds of works, specifically designed to ensure
    cooperation with the community in the case of network server software.
    
    Click the link for more details!
    `

  } if(license === "Mozilla"){
    return `
    Mozilla Public License Version 2.0

    1. Definitions
    --------------

    1.1. "Contributor"
        means each individual or legal entity that creates, contributes to
        the creation of, or owns Covered Software.

    1.2. "Contributor Version"
        means the combination of the Contributions of others (if any) used
        by a Contributor and that particular Contributor's Contribution.

    1.3. "Contribution"
        means Covered Software of a particular Contributor.

    1.4. "Covered Software"
        means Source Code Form to which the initial Contributor has attached
        the notice in Exhibit A, the Executable Form of such Source Code
        Form, and Modifications of such Source Code Form, in each case
        including portions thereof.

    1.5. "Incompatible With Secondary Licenses"
        means

        (a) that the initial Contributor has attached the notice described
            in Exhibit B to the Covered Software; or

        (b) that the Covered Software was made available under the terms of
            version 1.1 or earlier of the License, but not also under the
            terms of a Secondary License.
            
    Click the link for more details!
    `

  } else{
    return ""
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return`
  # ${data.title} ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Test](#Test)
  - [License](#License)
  - [Questions](#Questions)

  ## Description
    ${data.description}

    ${data.descriptionTwo}

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

    ${data.usageTwo}

  ## Contribution
    ${data.contribution}

  ## Test
    ${data.test}

  ## License
    ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}

  ## Questions
    Additional questions or to report an issue, please reach out through the following:
    - GitHub: ${data.github}
    - E-mail: ${data.email}
  

  Thank you

  `
}


module.exports = generateMarkdown;
