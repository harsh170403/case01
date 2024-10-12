const express = require("express");

const app = express();

var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}]

app.get("/", function(req, res){
    const johnkidneys = users[0].kidneys;
    const numberofkidneys = johnkidneys.length;
    let numberofhealthykidneys = 0;
    for (let i = 0; i<johnkidneys.length; i++){
        if (johnkidneys[i].healthy){
            numberofhealthykidneys = numberofhealthykidneys + 1;
        }
    }
    const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;
    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    })
})

app.post("/", function(req, res){

    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req, res){
    for ( let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res){
    if(isthereatleastoneunhealthykidney()){
        const newkidneys = [];
        for (let i = 0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newkidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newkidneys;
        res.json({msg: "done"})
    }else{
        res.status(411).json({
            msg: "you have no bad kidneys"
        })
    }
  
})

function isthereatleastoneunhealthykidney(){
    let atleastoneunhealthykidney = false;
    for (let i = 0; i<users[0].kidneys.lenght; i++){
        if (!users[0].kidneys[i].healthy){
            atleastoneunhealthykidney = true;
        }
    }
    return atleastoneunhealthykidney
}

app.listen(3000)