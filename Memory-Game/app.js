//Read JavaScript array of objects/ JSON: https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/

const cardArray = [ //Essentially a json 
    {
        name: 'fries',
        img: "images/fries.png",
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },{
        name: 'hotdog',
        img: 'images/hotdog.png',
    },{
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },{
        name: 'milkshake',
        img: 'images/milkshake.png',
    },{
        name: 'pizza',
        img: 'images/pizza.png',
    },{
        name: 'fries',
        img: "images/fries.png.png",
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },{
        name: 'hotdog',
        img: 'images/hotdog.png',
    },{
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },{
        name: 'milkshake',
        img: 'images/milkshake.png',
    },{
        name: 'pizza',
        img: 'images/pizza.png'
    }
]
cardArray.sort(()=> 0.5 - Math.random()) //sort array randomly, will show the array shuffled randomly. 

const gridDisplay = document.querySelector('#grid') //looks through the whole document and finds an id with grid 

function createBoard(){
    for(let i=0; i<10; i++){
        document.createElement(img="")
    }
}