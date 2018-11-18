// Dependencies
var express = require("express");
var db = require("../models");
var router = express.Router();

// Get route to display all burgers
router.get("/", function(req, res){
    // Using sequelize findAll method
    db.Burger.findAll({
        // Return data in ascending order of customerId and alphabetical order
        order: [
            ["CustomerId", "ASC"],
            ["burger_name", "ASC"]
        ], 
        // Include associated Customer data
        include: [db.Customer]
    }).then(function(dbBurger){
        // Store returned data in handlebar object
        var hbsObject = {
            burgers: dbBurger
        };
        // Render handlebar page including handlebar object
        res.render("index", hbsObject);
    });
});

// Post route to add new burgers
router.post("/api/burgers", function(req,res){
    // Using sequelize create method to create a persistent instance
    db.Burger.create({
        burger_name: req.body.burger_name,
        CustomerId: req.body.CustomerId
    }).then(function(dbBurger){
        // Return data regarding new burger added in JSON object
        res.json(dbBurger.dataValues);
    });
});

// Update route to update burger values for specific burgers
router.put("/api/burgers/:id", function(req, res){
    // Using sequelize update method to update completed state 
    db.Burger.update({
        completed: req.body.completed
    }, {
        // Specifies id to update
        where: {
            id: req.params.id
        }
    }).then(function(dbBurger){
        // If nothing was changed, return 404 error
        if(dbBurger === 0){
            return res.status(404).end();
        }
        return res.status(200).end();
    });
});

// Delete route to delete burger 
router.delete("/api/burgers/:id", function(req, res){
    // Using sequelize destory method to delete burger 
    db.Burger.destroy({
        // Specifies id to delete
        where: {
            id: req.params.id
        }
    }).then(function(dbBurger){
        // If nothing was deleted, return 404 error
        if(dbBurger === 0){
            return res.status(404).end();
        }
        return res.status(200).end();
    });
});

// Post route to add new customer
router.post("/api/customers", function(req, res){
    // Using sequelize to find customer or create new one if does not exist
    db.Customer.findOrCreate({
        where: {
            name: req.body.name
        }
        //Divides returned array into data and created boolean that are passed into callback function 
    }).spread(function(dbCustomer, created){
        if(created){
            console.log("New Customer Created!");
        }else{
            console.log("Existing Customer");
        }
        // return new customer data as JSON object
        res.json(dbCustomer.dataValues);
    });
});

module.exports = router;