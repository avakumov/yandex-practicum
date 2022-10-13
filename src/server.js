const express = require("express");
const path = require("path");
const app = express();

const port = 5000;
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

app.listen(port, () => {
    console.log("server started onn port " + port);
});
