let homeScore = 0;
let guestScore = 0;

let currentRoundCount = 1;

function plusOnePointHome() {
    homeScore += 1;
    document.getElementById("home-score").textContent = homeScore;
}

function plusTwoPointsHome() {
    homeScore += 2;
    document.getElementById("home-score").textContent = homeScore;
}

function plusThreePointsHome() {
    homeScore += 3;
    document.getElementById("home-score").textContent = homeScore;
}

function plusOnePointGuest() {
    guestScore += 1;
    document.getElementById("guest-score").textContent = guestScore;
}

function plusTwoPointsGuest() {
    guestScore += 2;
    document.getElementById("guest-score").textContent = guestScore;
}

function plusThreePointsGuest() {
    guestScore += 3;
    document.getElementById("guest-score").textContent = guestScore;
}

function newGame() {
    console.log(homeScore);
    console.log(guestScore);
    currentRoundCount += 1;

    homeScore = 0;
    guestScore = 0;
    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("guest-score").textContent = guestScore;

}
