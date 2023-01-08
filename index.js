const express = require("express")
const app = express()
const port = process.env.PORT

app.get("/", (req, res) => {
    res.send("HELLO WORLD!")
})

app.listen(port, () => {
    console.log("test message")
})
