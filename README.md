# Team Profile Generator 👥

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Introduction

A Node.js command-line appication for building profile pages for software engineering teams. It asks users for basic information about the team and then creates a simple and neat webpage for easy reference.

## Table of Contents

- [ User Story ](#user-story)
- [ Acceptance Criteria ](#acceptance-criteria)
- [ Usage ](#usage)
- [ Technologies Used ](#technologies-used)
- [ Questions ](#questions)
- [ License ](#license)

## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Usage

From the root folder of the index.js file, run the following command in the terminal:

```
node index.js
```

Here is a walkthrough [video](https://watch.screencastify.com/v/pLUhhfDU0nNAn2jlfJ7q) that demonstrates the application's functionality.

## Technologies Used

- HTML
- CSS
- JavaScript
- Inquirer
- Jest
- Bootstrap

## Questions

Reach out if you have any questions:

Email: kelseymailau@gmail.com  
GitHub: [kelseybrianne](https://github.com/kelseybrianne)

## License

This project is licensed under the MIT license.