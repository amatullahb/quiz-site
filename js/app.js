const button = document.querySelector('#submit-btn');
button.addEventListener('click', () => {
    calculateResult();
});

// lessen opacity of options not chosen
const imgs = document.getElementsByTagName('img');

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', () => {
        // imgs[i] = checked image
        // remove .not-chosen from img-container
        imgs[i].parentNode.classList.remove('not-chosen');
        // input = input element corresponding with the img
        let input = imgs[i].parentNode.nextElementSibling;
        input.checked = true;
        
        let imgParent = imgs[i].parentNode;
        let parentNode = imgs[i].parentNode.parentNode.parentNode;
        let children = parentNode.children;
        
        for (let i = 0; i < children.length; i++) {
            if (children[i].firstElementChild == imgParent) {
                children[i].classList.remove('not-chosen');
                
            } else {
                children[i].firstElementChild.classList.add('not-chosen')
                children[i].firstElementChild.nextElementSibling.classList.remove('checked');
                children[i].firstElementChild.nextElementSibling.classList.remove('chosen');
            }
        }
    });
}

function calculateResult () {
    console.log('in calculateResult')
    const tech = {
        name: 'high-tech',
        props: ['waffles', 'macaron', 'ramen', 'cake2', 'steak', 'creme-brulee'],
        points: 0,
        description: "You are always incorporating the latest plant-growing technology. The real question is where do you find the space to store all of that stuff?",
        img: "../imgs/high-tech.gif"
    };
    const master = {
        name: 'master',
        props: ['omelette', 'pastry', 'balanced', 'croissant', 'seafood', 'ice-cream'],
        points: 0,
        description: "You have a serious green thumb! Everything you plant flourishes.",
        img: "../imgs/master-gardener.gif"
    };
    const enthusiastic = {
        name: 'enthusiastic',
        props: ['avo-toast', 'burger', 'burger2', 'veggies', 'taco', 'cheesecake'],
        points: 0,
        description: "You are always willing to adopt a new plant child, Your friends frequently bring their plants on the brink of death to you to be revived (perhaps it's time to consider not giving them back?).",
        img: "../imgs/enthusiastic.gif"
    };
    const pandemic = {
        name: 'pandemic',
        props: ['fruit', 'fries', 'pizza', 'muffin', 'pasta', 'brownies'],
        points: 0,
        description: "You bought a plant on a whim at the beginning of the pandemic. Now you consider yourself an urban farmer because your plants have taken up all of the space on your windowsill.",
        img: "../imgs/windowsill-plants.gif"
    };
    const attached = {
        name: 'attached',
        props: ['pancake', 'strawberries', 'salad', 'yogurt', 'curry', 'pie'],
        points: 0,
        description: "Some say you love your plants too much but they don't understand your bond.",
        img: "../imgs/plant-hug.webp"
    };
    const spider = {
        name: 'spider',
        props: ['coffee', 'popcorn', 'cake', 'grapes', 'soup', 'chia-pudding'],
        points: 0,
        description: "Your intentions are pure, but the truth is you have killed every plant you've had. Even the industructible spider plant. You are now satisfied loving plants from afar.",
        img: "../imgs/dead-plant.webp"
    };

    const form = document.forms.foodQuiz;
    const input = form.querySelectorAll('input');
    const selected = [];
    input.forEach(val => {
        if (val.checked) {
            selected.push(val.id);
        }
    });

    console.log('selected: ', selected);

    for (let i = 0; i < selected.length; i++) {
        if (tech.props.includes(selected[i])) {
            console.log('increasing tech.points')
            tech.points++;
        } else if (master.props.includes(selected[i])) {
            console.log('increasing master.points')
            master.points++;
        } else if (enthusiastic.props.includes(selected[i])) {
            console.log('increasing enthusiastic.points')
            enthusiastic.points++;
        } else if (pandemic.props.includes(selected[i])) {
            console.log('increasing pandemic.points')
            pandemic.points++;
        } else if (attached.props.includes(selected[i])) {
            console.log('increasing attached.points')
            attached.points++;
        } else if (spider.props.includes(selected[i])) {
            console.log('increasing spider.points')
            spider.points++;
        } 
    }

    let options = [tech, master, enthusiastic, pandemic, attached, spider];
    options.sort((a, b) => {return b.points-a.points});
    console.log(options);

    displayResults(options[0]);
}

function displayResults (archetype) {
    let quizSec = document.querySelector('.quiz');
    quizSec.classList.add('hidden');

    let resultSec = document.querySelector('.result');
    resultSec.classList.remove('hidden');
    resultSec.classList.add('show');

    console.log('archetype: ', archetype);

    if (archetype.name == 'spider') {
        document.querySelector('#result-h1').innerText = `You're only a gardener in your dreams`;
    } else {
        document.querySelector('#result-h1').innerText = `You're a ${archetype.name} gardener!`;
    }

    document.querySelector('#result-p').innerText = archetype.description;
    document.querySelector('#result-img').innerHTML = `<img src="${archetype.img}" id="result-img">`;
}