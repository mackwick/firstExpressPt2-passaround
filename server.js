const express = require("express")
const app = express()


//ROUTES

app.get("/", (req, res) => {
    const i = req.params.i
    res.send("<h1>99 bottles of beer on the wall</h1><a href='/98'>Take one down, pass it around</a>")


})

app.get("/:i", (req, res) => {
    const i = req.params.i
    const next = i - 1
    if (i > 0) {
        res.send(`<h1>${i} bottles of beer on the wall</h1><a href="/${next}">Take one down, pass it around</a>`)
    } else {res.send("<h1>0 bottles of beer on the wall</h1><a href='/'>Put the bottles back up</a>")}
    
})


//SERVER LISTEN
app.listen(3000, () => {console.log("I hear ya")})
