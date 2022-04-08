let path = require("path");
let express = require("express");

//Look at below web page for info on express.Router()
//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
let router = express.Router();

//request is info sending to server from client.
//response is info sending to client from server.

router.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname + "/public/views/index.html"));  //changed
});

let index = 0

const myDatabase = require('./myDatabase');
let db = new myDatabase();

const Data = require('./Data');


router.post('/create', function(req, res){

    index++

    /*
    let trimIdentifier = req.body.identifier.trim();
    if (trimIdentifier == "") {
        res.json({error:true});
        return;
    }

    let identifier = Number(trimIdentifier);
    if (Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }
    */
    let identifier = index


    let name = req.body.name.trim();
    if (name == "") {
        res.json({error:true});
        return;
    }

    let ingredients = req.body.ingredients;
    if (req.body.ingredients.trim() == "") {
        res.json({error:true});
        return;
    }

    let instructions = req.body.instructions;
    if (req.body.instructions.trim() == "") {
        res.json({error:true});
        return;
    }

    let allergies = req.body.allergies;
    let diet = req.body.diet;

    let obj = new Data(identifier,name,ingredients,instructions,allergies,diet);
    let val = db.postData(obj);
    if (val)
        res.json({error:false});
    else
        res.json({error:true});

});

/*
router.get('/read', function(req, res){

    let trimIdentifier = req.query.identifier.trim();
    if (trimIdentifier == "") {
        res.json({error:true});
        return;
    }

    let identifier = Number(trimIdentifier);
    if (Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }

    let val = db.getData(identifier);

    if (val == null)
        res.json({error:true});
    else
    {
        res.json({error:false,name:val.name});
    }


});

router.put('/update', function(req, res){

    let trimIdentifier = req.body.identifier.trim();
    if (trimIdentifier == "") {
        res.json({error:true});
        return;
    }

    let identifier = Number(trimIdentifier);
    if (Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }

    let name = req.body.name.trim();
    if (name == "") {
        res.json({error:true});
        return;
    }

    let obj = new Data(identifier,name);
    let val = db.putData(obj);
    if (val)
        res.json({error:false});
    else
        res.json({error:true});


});

router.delete('/delete/:identifier', function(req, res){
    let trimIdentifier = req.params.identifier.trim();
    if (trimIdentifier == "") {
        res.json({error:true});
        return;
    }

    let identifier = Number(trimIdentifier);
    if (Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }

    let val = db.deleteData(identifier);
    if (val == null)
        res.json({error:true});
    else
        res.json({error:false});

});
*/

module.exports = router;
