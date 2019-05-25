'use strict';

var express = require("express");
var app = express();

var PATH_IMAGES = "/phone-catalog/images/";

app.listen(4000, () => {
    console.log("Server running on port 4000");
});

app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type'
    })
    next();
})

app.get("/phone-list", async (req, res, next) => {

    console.log("Getting Phone List on url /phone-list");

    try {
        let phoneList = await require("./phone-catalog/phones.json");
        res.json(phoneList);
        
        console.log("Done get of Phone List on url /phone-list");
    } catch (e) {

        res.status(500).json({
            e: e.toString()
        });

        console.log(e);
    }
});

app.get("/image/:name", async (req,res, next) => {
    console.log("Getting Phone Photo " + req.params.name);
    var options = {
        root: __dirname + PATH_IMAGES,
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    try {

       await res.sendFile(req.params.name,options);

       console.log("Image sent successfully");

    } catch(e) {

        res.status(500).json({
            e: e.toString()
        });

        console.log(e);
    
    }

});