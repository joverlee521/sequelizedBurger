$(document).ready(function(){
    $("#burger-form").on("submit", function(event){
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger-input").val().trim()
        };
        $.post("/api/burgers", newBurger, function(data){
            console.log("Added new burger");
            location.reload();
        });
    });

    $(".devour-button").on("click", function(){
        var id = $(this).data("id");
        var devour = $(this).data("devour");
        if(devour){
            var newState = {
                devoured: devour
            };
            $.ajax("/api/burgers/" + id,{
                type: "PUT",
                data: newState
            }).then(function(){
                console.log("Changed devoured to " + devour);
                location.reload();
            });
        }
        else{
            $.ajax("/api/burgers/" + id, {
                type: "DELETE"
            }).then(function(){
                console.log("Digested burger!");
                location.reload();
            });
        }
    });
});