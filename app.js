const express = require('express') ;
const app = express();


app.get('/' , (req, res)=>{
    console.log("[INFO]: You are now in.") ;
    res.setHeader('type' , 'text/html') // If you wanna remove the html text's remove the res.setheader and continue with your code.
    res.send('<h1>Welcome to my express app from express</h1>') ;
})






app.listen(55555); // go to localhost:55555 for it to work when you do node app.js