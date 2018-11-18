$(document).ready(function(){
    // Listener for order form submission
    $("#order-form").on("submit", function(event){
        event.preventDefault();
        // Store new customer as an object
        var newCustomer = {
            name: $("#customer-input").val().trim().toUpperCase()
        };
        // Post route to add new customer
        $.post("/api/customers", newCustomer, function(data){
            console.log("Added new customer");
            // Store new burger as an object with returned CustomerId
            var newBurger = {
                burger_name: $("#burger-input").val().trim(),
                CustomerId: data.id
            };
            // Post route to add new burger
            $.post("/api/burgers", newBurger, function(data){
                console.log("Added new burger");
                // Reload page to show new burger and customer
                location.reload();
            });
        });
    });

    // Listener for complete button
    $(".complete-btn").on("click", function(){
        var id = $(this).data("id");
        var pending = $(this).data("pending");
        // If the order is pending, update completed state for burger
        if(pending){
            var newState = {
                completed: pending
            };
            // Update route 
            $.ajax("/api/burgers/" + id,{
                type: "PUT",
                data: newState
            }).then(function(){
                console.log("Changed completed to " + pending);
                location.reload();
            });
        }
        // If completed, delete burger from database
        else{
            // Delete route
            $.ajax("/api/burgers/" + id, {
                type: "DELETE"
            }).then(function(){
                console.log("Deleted order!");
                location.reload();
            });
        }
    });
});