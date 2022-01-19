const express = require('express');
const app = express();
const port = 5000;
 
app.get('/product', (req, res) => {
    res.send("product page")
})
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})