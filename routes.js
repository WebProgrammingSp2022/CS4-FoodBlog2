let path = require("path");
let express = require("express");

//Look at below web page for info on express.Router()
//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
let router = express.Router();

//request is info sending to server from client.
//response is info sending to client from server.

router.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname + "/public/views/main.html"));  //changed
});

router.get("/list",function(req,res){
    res.sendFile(path.resolve(__dirname + "/public/views/list.html"));  //changed
});

router.get("/upload",function(req,res){
    res.sendFile(path.resolve(__dirname + "/public/views/upload.html"));  //changed
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


router.get('/read', function(req, res){

    let jdex= 1; //this is another index
    let val=[];
    for(let i=0;i<db.data.length+1;i++)
    {
        val[i] = db.getData(jdex);
        jdex++;
    }
    jdex=1;

    if (val == null)
        res.json({error:true});
    else
    {
        res.json({error:false, val});
    }


});

router.put('/update', function(req, res){


    //let obj = new Data(identifier,name);
    //let val = db.putData(obj);




        let allergies1 = req.body.allergies;
        let diet = req.body.diet;


      let val=[];
      for(let i=0;i<db.data.length+1;i++)
      {
          val[i] = db.getData(i+1);

      }


      val = val.filter(checkFilter());

    function checkFilter() {
      for(let i = 0; i < db.data.length+1; i++){
        let data = db.getData(i)

        console.log(db.getData(i))
        for (let i = 0; i < allergies1.length; i++)
        if(data.allergies.includes(allergies1[i])){
          return db.getData(i)
        }
      }
      res.json({error:false});
    }




    /*
    if (val)
        res.json({error:false});
    else
        res.json({error:true});
        */

});
/*
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
