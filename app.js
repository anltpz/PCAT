//express
const express = require('express');
const app = express();
const path = require('path');


app.listen(8080, () => {
    console.log('listening on port 8080');
    }
);


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'temp/index.html'));

    
}
);
const myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
}

const myLogger2 = (req, res, next) => {
    console.log('LOGGED2');
    next();
}

//middleware 
app.use(express.static('public'));



/// mylogger




const photos = [
    {
        id: 1,
        name: 'photo1',
        url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    },
    {
        id: 2,
        name: 'photo2',
        url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    },
]

