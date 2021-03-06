const generateHtml = (employees, teamName) => {

    let teamProfileHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    <body class="">
        <header class="dark-blue">
            <h1>${teamName}</h1>
        </header>
        <main>
            <div class="container">
                <div class="d-flex row justify-content-center">`

    // Create a card for each employee in the array
    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        let getInfo = '';
        let href = '';
        let getIcon = ''

        // Add github, office number, or school to the last list item in the card depending on if the team member is an engineer, manager, or intern
        if (employee.getRole() === 'Engineer') {
            getInfo = `GitHub: <a href="https://github.com/${employee.gitHub}" target="_blank">${employee.gitHub}</a>`;
            getIcon = '<i class="fas fa-glasses"></i>'
        } else if (employee.getRole() === 'Manager') {
            getInfo = `Office Number: ${employee.officeNumber}`
            getIcon = '<i class="fas fa-mug-hot"></i>'
        } else if (employee.getRole() === 'Intern') {
            getInfo = `School: ${employee.school}`
            getIcon = '<i class="fas fa-user-graduate"></i>';
        }

        teamProfileHtml +=
        `<div class="card col-md-4 card-custom m-3 p-0" style="width: 18rem;">
            <div class="card-header cardheader-custom">
                <div class="card-body">
                
                    <h2 class="card-title text-light">${employee.firstName}</h2>
                    <h3 class="card-subtitle lightbrown-text">${getIcon} ${employee.getRole()}</h3>
                </div>
            </div>
            <div class="card-body beige">
                <ul class="list-group list-group-flush m-2">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">${getInfo}</li>
                </ul>
            </div>
        </div>`
                }

    teamProfileHtml +=    
                `</div>
            </div>
        </main>
    </body>
    </html>`

    return teamProfileHtml;
}

module.exports = generateHtml;