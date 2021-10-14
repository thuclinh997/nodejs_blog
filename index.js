const express = require('express')
const app = express()
const port = 3000
//route
app.get('/trang-chu', (req, res) => {
    //   res.send('Hello world')
    var a = 1;
    var b = 3;
    var c = a + b;
    return res.send("i am Linh")
})
//127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})