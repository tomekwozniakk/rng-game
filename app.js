function rng(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNumber;
randomNumber = rng(25,256);


const log = document.querySelector('.log');
const counter = document.querySelector('.counter_shots-number');
const intro = document.querySelector('.intro');
const stationsHp = document.querySelector('.counter_station-hp')

const spaceStation = {type: 'space station', name: 'USS Toilet', hp:1000, systemsCheck: function checkSystems() {
    if (spaceStation.hp <= 0) {
        let logEntry = document.createElement("p");
        logEntry.innerHTML = 'USS Toilet destroyed. Congratulations!'
        logEntry.classList.add('log_entry');
        logEntry.classList.add('log_entry-destroyed');
        log.appendChild(logEntry);
        stationsHp.style.width = 0 + `vw`;
    }

    else {
        let logEntry = document.createElement("p");
        logEntry.innerHTML = 'USS Toilet operational.'
        logEntry.classList.add('log_entry');
        log.appendChild(logEntry);
        stationsHp.style.width = spaceStation.hp / 10 + `vw`;
    }
}}
console.log(spaceStation);

const ship = {type:'corvette',name:'USS Fart', hp:2000, shotsLeft:12, attack: function damage() {
    if (randomNumber % 2 == 0) {
    spaceStation.hp = spaceStation.hp - randomNumber;
    let logEntry = document.createElement("p");
        logEntry.innerHTML = `You hit the station dealing ` + randomNumber + ` damage!`
        logEntry.classList.add('log_entry');
        logEntry.classList.add('log_entry-hit');
        log.appendChild(logEntry);
}
    else {
        let logEntry = document.createElement("p");
        logEntry.innerHTML = `You missed`
        logEntry.classList.add('log_entry');
        logEntry.classList.add('log_entry-miss');
        log.appendChild(logEntry);
    }
    ship.shotsLeft--;
    counter.innerHTML = ship.shotsLeft + ' ';
    console.log(randomNumber);
    randomNumber = rng(25,256);
    intro.innerHTML = '';
}}
console.log(ship);

function shipAttacks() {
    if (ship.shotsLeft <= 0) {
        let logEntry = document.createElement("p");
        logEntry.innerHTML = `You have no shots left!`
        logEntry.classList.add('log_entry');
        logEntry.classList.add('log_entry-lost');
        log.appendChild(logEntry);
    }
    else if (spaceStation.hp <= 0) {
        let logEntry = document.createElement("p");
        logEntry.innerHTML = `You shoot into debree but station is already destroyed!`
        logEntry.classList.add('log_entry');
        log.appendChild(logEntry);
    }
    else {
    ship.attack(randomNumber);
    let logEntry = document.createElement("p");
        logEntry.innerHTML = `Space station is now at ` + spaceStation.hp + `HP`;
        logEntry.classList.add('log_entry');
        log.appendChild(logEntry);
    spaceStation.systemsCheck();
}
};

const button = document.querySelector('.attack')
button.addEventListener("click", shipAttacks);
