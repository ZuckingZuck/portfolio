const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "merabayın"
    })
})

app.listen(3000, () => {
    console.log("app listening on 3000")
});