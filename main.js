// Task #0
const player1 = {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['shotgun', 'grenade', 'knife'],
    attack: function () {
        console.log(player1.name + ' '+ 'fight...')
    }
};

const player2 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['bazuka', 'fireball', 'nunchucks'],
    attack: function () {
        console.log(player2.name + ' '+ 'fight...')
    }
};

//Task #1

function createPlayer(playerClass, playerName, playerHp, playerModel) {
    const $player1 = document.createElement('div');
    $player1.classList.add(playerClass);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.style.width = playerHp + '%';
    $life.classList.add('life');

    const $name = document.createElement('div');
    $name.innerText= playerName;
    $name.classList.add('name');

    const $img = document.createElement('img');
    $img.src = playerModel;

    $player1.appendChild($progressbar);
    $player1.appendChild($character);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    const $arenas = document.querySelector('.arenas')
    $arenas.appendChild($player1)
};

// Task #2-3

createPlayer('player1', 'Kitana', 50, player1.img);
createPlayer('player2', 'Scorpion', 100, player2.img);
