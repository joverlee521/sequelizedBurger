var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req,res){
    burger.insert(["burger_name"], [req.body.burger_name], function(data){
        res.json({id: data.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res){
    var id = "id = " + req.params.id;
    burger.update(
        {   
            devoured: req.body.devoured
        },
        id, 
        function(data){
            if(data.changedRows === 0){
                return res.status(404).end();
            }
            else{
                return res.status(200).end();
            }
        }
    );
});

router.delete("/api/burgers/:id", function(req, res){
    var id = "id = " + req.params.id;
    burger.delete(id, function(data){
        if(data.affectedRows === 0){
            return res.status(404).end();
        }
        else{
            return res.status(200).end();
        }
    });
});

module.exports = router;