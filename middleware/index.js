const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyid = req.headers.kidneyid;

    if (username != "harsh" || password != "pass"){
        res.status(400).json({"msg": "somethings up with your inputs"})
        return
    }

    if (kidneyid != 1 && kidneys != 2){
        res.status(400).json({"msg": "somethings up with your inputs"})
        return
    }
    res.json({
        msg: "your kidney is fine!"
    })

});

app.listen(3000);