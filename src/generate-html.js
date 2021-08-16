
function generateHtml(finishedTeamArray) {
    content = `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <title>Our Team</title>
                
            </head>
            <body>
                ${generateEmployeeCard(finishedTeamArray)}                   
            </body>
            </html>`;
            return content
}



function generateEmployeeCard(finishedTeamArray) {
    let cards = '';
    finishedTeamArray.forEach(person => {
    
        if(person.getRole() == 'Manager') {
            cards += `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${person.getRole()}
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${person.name}</li>
                <li class="list-group-item">${person.id}</li>
                <li class="list-group-item">${person.email}</li>
            </ul>
    </div>`;
        } if(person.getRole() == 'Intern') {
            cards += `
            <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${person.getRole()}
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${person.name}</li>
                    <li class="list-group-item">ID: ${person.id}</li>
                    <li class="list-group-item">Email: ${person.email}</li>
                    <li class="list-group-item">:School ${person.school}</li>
                </ul>
            </div>`;
        } if(person.getRole() == 'Engineer') {
            cards += `
            <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${person.getRole()}
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${person.name}</li>
                    <li class="list-group-item">ID: ${person.id}</li>
                    <li class="list-group-item">Email: ${person.email}</li>
                    <li class="list-group-item">:School ${person.github}</li>
                </ul>
            </div>`;
        }
});
return cards
}

module.exports = generateHtml;