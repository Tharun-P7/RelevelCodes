const express = require('express');
const app = express();
const port = 5000;
 
// Define the APIs,GET API for product
app.get('/product', (req, res) => {
    res.send("Welcome to product page")
})

var currentdate = function (req,res,next){
    req.currentdate = new Date();
    next()
}
app.use(currentdate)

app.get("/getremainingdays",(req,res)=>{
    const difference= new Date("2022-01-01") - new Date();
    const days = {Days : Math.floor(difference/(1000*60*60*24)),RequestTime: req.currentdate };
    res.json(days);
})




//Starting a web server on port 5000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})