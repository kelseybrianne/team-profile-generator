const generateHtml = (employees, teamName) => {

    let teamProfileHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
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

    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        let getInfo = '';
        let href = '';

        if (employee.getRole() === 'Engineer') {
            getInfo = `<a href="https://github.com/${employee.gitHub}">GitHub: ${employee.gitHub}</a>`
        } else if (employee.getRole() === 'Manager') {
            getInfo = `Office Number: ${employee.officeNumber}`
        } else if (employee.getRole() === 'Intern') {
            getInfo = `School: ${employee.school}`
        }

        teamProfileHtml +=
        `<div class="card col-md-4 card-custom m-3 p-0" style="width: 18rem;">
            <div class="card-header cardheader-custom">
                <div class="card-body">
                
                    <h2 class="card-title text-light">${employee.firstName}</h2>
                    <h3 class="card-subtitle lightbrown-text">${employee.getRole()}</h3>
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