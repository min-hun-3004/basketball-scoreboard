let homeScore = 0;
let guestScore = 0;
let finalHomeScore = 0;
let finalGuestScore = 0;

let currentRoundCounter = 0;

let roundOneScores = document.querySelector("#round-1");
let roundTwoScores = document.querySelector("#round-2");
let roundThreeScores = document.querySelector("#round-3");
let roundFourScores = document.querySelector("#round-4");

let finalScore = document.querySelector("#final-score");

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
    homeScore = 0;
    guestScore = 0;
    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("guest-score").textContent = guestScore;

    roundOneScores.textContent = homeScore + " - " + guestScore;
    roundTwoScores.textContent = guestScore + " - " + guestScore;
    roundThreeScores.textContent = guestScore + " - " + guestScore;
    roundFourScores.textContent = guestScore + " - " + guestScore;
    finalScore.textContent = homeScore + " - " + guestScore;
}

function newRound() {
    currentRoundCounter += 1;
    console.log(currentRoundCounter);
    if (currentRoundCounter === 1) {
        roundOneScores.textContent = homeScore + " - " + guestScore;
        finalHomeScore += homeScore;
        finalGuestScore += guestScore;
        homeScore = 0;
        guestScore = 0;
        document.getElementById("home-score").textContent = homeScore;
        document.getElementById("guest-score").textContent = guestScore;
    } else if (currentRoundCounter === 2) {
        roundTwoScores.textContent = homeScore + " - " + guestScore;
        finalHomeScore += homeScore;
        finalGuestScore += guestScore;
        homeScore = 0;
        guestScore = 0;
        document.getElementById("home-score").textContent = homeScore;
        document.getElementById("guest-score").textContent = guestScore;
    } else if (currentRoundCounter === 3) {
        roundThreeScores.textContent = homeScore + " - " + guestScore;
        finalHomeScore += homeScore;
        finalGuestScore += guestScore;
        homeScore = 0;
        guestScore = 0;
        document.getElementById("home-score").textContent = homeScore;
        document.getElementById("guest-score").textContent = guestScore;
    } else if (currentRoundCounter === 4) {
        roundFourScores.textContent = homeScore + " - " + guestScore;
        finalHomeScore += homeScore;
        finalGuestScore += guestScore;
        homeScore = 0;
        guestScore = 0;
        finalScore.textContent = finalHomeScore + " - " + finalGuestScore;
    }

}
