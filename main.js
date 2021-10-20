const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    elHP,
    changeHP,
    renderHP,
    attack: attack,
}

const player2 = {
    player: 2,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    elHP,
    changeHP,
    renderHP,
    attack: attack,
}

function attack() {
    console.log(this.name + ' ' + 'Fight...');
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player'+playerObj.player);
    const $progressbar = createElement('div', 'progressbar');;
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObj.hp +'%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    return $player;
};

function elHP() {
    return document.querySelector('.player'+this.player+' .life');
}

function changeHP(randomNumber) {
    // const $playerLife = document.querySelector('.player'+ player.player +' .life');
    this.hp -= randomNumber;
 
    if (this.hp <= 0) {
        this.hp = 0;
    }

    // $playerLife.style.width = player.hp + '%';
}

function renderHP() {
    this.elHP().style.width = this.hp + '%';
}

function playerWins(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    if (name) {
        $loseTitle.innerText = name + ' wins';
    } else {
        $loseTitle.innerText = 'DRAW';
    }

    return $loseTitle;
}

function getRandom(num) {
    return Math.ceil(Math.random() * num)
}

function createLoadButton() {
    const $reloadButtonDiv = createElement('div', 'reloadWrap');
    const $reloadButton = createElement('button', 'button');
    $reloadButton.innerText = 'Reload';

    $reloadButton.addEventListener('click', function() {
        window.location.reload();
    })

    $reloadButtonDiv.appendChild($reloadButton);
    $arenas.appendChild($reloadButtonDiv);
};

$randomButton.addEventListener('click', function() {
    player1.changeHP(getRandom(20));
    player1.changeHP();

    player2.changeHP(getRandom(20));
    player2.changeHP();

    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
        createLoadButton();
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWins(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWins(player1.name));
    } else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWins());
    }
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
