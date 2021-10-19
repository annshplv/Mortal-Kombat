// Task #0
const player1 = {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
<<<<<<< Updated upstream
    weapon: ['shotgun', 'grenade', 'knife'],
    attack: function () {
        console.log(player1.name + ' '+ 'fight...')
    }
};

=======
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    },
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP,
}
>>>>>>> Stashed changes
const player2 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
<<<<<<< Updated upstream
    weapon: ['bazuka', 'fireball', 'nunchucks'],
    attack: function () {
        console.log(player2.name + ' '+ 'fight...')
=======
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    },
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP,
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
>>>>>>> Stashed changes
    }
};

//Task #1

function createPlayer(playerClass, playerName, playerHp, playerModel) {
    const $player1 = document.createElement('div');
    $player1.classList.add(playerClass);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

<<<<<<< Updated upstream
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
};
=======
function getRandom(num) {
    return Math.ceil(Math.random() * num);
}

function changeHP(getRandom) {
    this.hp -= getRandom(20);
 
    if (player.hp <= 0) {
        player.hp = 0;
    }

    return player.hp;
}

function elHP() {
    return document.querySelector('.player' + this.player + ' .life');
}

function renderHP() {
    elHP().style.width = this.hp + '%';
}


$randomButton.addEventListener('click', function() {
    changeHP(player1);
    changeHP(player2);
>>>>>>> Stashed changes

const $arenas = document.querySelector('.arenas')
    $arenas.appendChild($player1)

// Task #2-3

createPlayer('player1', 'Kitana', 50, player1.img);
createPlayer('player2', 'Scorpion', 100, player2.img);
