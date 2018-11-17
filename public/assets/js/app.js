$(document).ready(function(){
    $("#order-form").on("submit", function(event){
        event.preventDefault();
        var newCustomer = {
            name: $("#customer-input").val().trim().toUpperCase()
        };
        $.post("/api/customers", newCustomer, function(data){
            console.log("Added new customer");
            var newBurger = {
                burger_name: $("#burger-input").val().trim(),
                CustomerId: data.id
            };
            $.post("/api/burgers", newBurger, function(data){
                console.log("Added new burger");
                location.reload();
            });
        });
    });

    $(".complete-btn").on("click", function(){
        var id = $(this).data("id");
        var pending = $(this).data("pending");
        if(pending){
            var newState = {
                completed: pending
            };
            $.ajax("/api/burgers/" + id,{
                type: "PUT",
                data: newState
            }).then(function(){
                console.log("Changed completed to " + pending);
                location.reload();
            });
        }
        else{
            $.ajax("/api/burgers/" + id, {
                type: "DELETE"
            }).then(function(){
                console.log("Deleted order!");
                location.reload();
            });
        }
    });
});