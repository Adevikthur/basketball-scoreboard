//Home and Guest points

let homePoints = 0;
let guestPoints = 0;

//Scoreboard elements

let homePointBoard = document.querySelector("#home-point-board p");
let guestPointBoard = document.querySelector("#guest-point-board p");

// Scoreboards Initialization

homePointBoard.textContent = homePoints;
guestPointBoard.textContent = guestPoints;

// Add points to HOME
function addHomePoints(points) {
  homePoints += points;
  homePointBoard.textContent = homePoints;
}

// Remove points from HOME
function removeHomePoints(points) {
  homePoints -= points;
  homePointBoard.textContent = homePoints;
}
// Add points to GUEST
function addGuestPoints(points) {
  guestPoints += points;
  guestPointBoard.textContent = guestPoints;
}

// Remove points from GUEST
function removeGuestPoints(points) {
  guestPoints -= points;
  guestPointBoard.textContent = guestPoints;
}

function resetPoints(points) {
  guestPoints = points;
  guestPointBoard.textContent = guestPoints;
  homePoints = points;
  homePointBoard.textContent = homePoints;
}
