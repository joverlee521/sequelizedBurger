var express = require("express");
var db = require("../models");
var router = express.Router();

router.get("/", function(req, res){
    db.Burger.findAll({
        order: [
            ["burger_name", "ASC"]
        ], 
        include: [db.Customer]
    }).then(function(dbBurger){
        var hbsObject = {
            burgers: dbBurger
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req,res){
    db.Burger.create({
        burger_name: req.body.burger_name,
        CustomerId: req.body.CustomerId
    }).then(function(dbBurger){
        res.json(dbBurger.dataValues);
    });
});

router.put("/api/burgers/:id", function(req, res){
    db.Burger.update({
        completed: req.body.completed
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(dbBurger){
        if(dbBurger === 0){
            return res.status(404).end();
        }
        return res.status(200).end();
    });
});

router.delete("/api/burgers/:id", function(req, res){
    db.Burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbBurger){
        if(dbBurger === 0){
            return res.status(404).end();
        }
        return res.status(200).end();
    });
});

router.post("/api/customers", function(req, res){
    db.Customer.findOrCreate({
        where: {
            name: req.body.name
        }
    }).spread(function(dbCustomer, created){
        if(created){
            console.log("New Customer Created!");
        }else{
            console.log("Existing Customer");
        }
        res.json(dbCustomer.dataValues);
    });
});

module.exports = router;