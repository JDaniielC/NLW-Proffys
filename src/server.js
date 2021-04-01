const express = require ('express');
const server = express();

server.use (express.static("public"))

.get("/", (req, res) => {
    return res.sendFile(_dirname + "/views/index.html")
})

.get("/", (req, res) => {
    return res.sendFile(_dirname + "/views/study.html")
})

.get("/", (req, res) => {
    return res.sendFile(_dirname + "/views/give-classes.html")
})


.listen(3333)