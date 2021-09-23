import React from 'react'; 

let img = [
    'https://image.shutterstock.com/z/stock-vector-cute-kid-teen-boy-show-facial-expression-1509139481.jpg',
    'https://image.shutterstock.com/z/stock-vector-happy-cute-little-kid-girl-with-idea-lamp-sign-1767515066.jpg'
];

function Photo() {
    return(
        <div>
        <img src={img[0]}/>
        <br/>
        <img src={img[1]}/>
        </div>
    );
}

export default Photo;