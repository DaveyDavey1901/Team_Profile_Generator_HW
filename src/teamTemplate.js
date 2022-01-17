const teamCardArr = [];

function createHTML(emptyArray) {
  for (let i = 0; i < emptyArray.length; i++) {
    const teamMember = emptyArray[i];

    switch (emptyArray[i].getRole()) {
      case "Manager":
        const manCardHtml = managerCard(teamMember);
        teamCardArr.push(manCardHtml);
        break;
      case "Engineer":
        const engCardHTML = engineerCard(teamMember);
        teamCardArr.push(engCardHTML);
        break;
      case "Intern":
        const intCardHTML = internCard(teamMember);
        teamCardArr.push(intCardHTML);
        break;
    }
  }
  return newTeamHTML();
}

// create a manager info card
function managerCard(manager) {
  return `
    <div class="card" style="max-width: 18rem;">
     <div class="card-body shadow d-flex 
            justify-content-center
            align-items-center p-3 bg-primary rounded-lg
            flex-column">
            <div class="card-header my-2">
        <h4 class="card-title text-white">${manager.name}</h4>
         </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Role: Manager</li>
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
        </div>
   </div>
    `;
}

// create an engineer info card
function engineerCard(engineer) {
  return `
         <div class="card" style="max-width: 18rem;">
     <div class="card-body shadow d-flex 
            justify-content-center
            align-items-center p-3 bg-danger rounded-lg
            flex-column">
           <div class="card-header my-2">
        <h4 class="card-title text-white">${engineer.name}</h4>
         </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Role: Engineer</li>
    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
   <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
   
          </div>
         </div>
          
    `;
}

// create intern card
function internCard(intern) {
  return `
       <div class="card" style="max-width: 18rem;">
     <div class="card-body shadow d-flex 
            justify-content-center
            align-items-center p-3 bg-warning rounded-lg
            flex-column">
           <div class="card-header my-2">
        <h4 class="card-title text-white">${intern.name}</h4>
         </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Role: Intern</li>
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
   <li class="list-group-item">School: ${intern.school}</li>
        </ul>
   
          </div>
         </div>
      `;
}
// main body of the html where the team cards are joined.
function newTeamHTML() {
  return `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <link rel="stylesheet" href="./output/style.css">
        <title>Team Info Cards</title>
    </head>
    <body>
         <div class="container-fluid">
        <div class="row">
            <div class="col-12 bg-success text-white mb-3">
                <h1 class="text-center">My Team Info Cards</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                ${teamCardArr.join("")} 
            </div>
        </div>
    </div>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>

    </body>
    </html>
   `;
}
module.exports = createHTML;
