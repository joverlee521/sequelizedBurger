module.exports = function(sequelize, DataTypes){
    // Defining the Customer model
    var Customer = sequelize.define("Customer", {
        // Name cannot be null and is a string
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Customer can be associated with many Burgers
    Customer.associate = function(models){
        Customer.hasMany(models.Burger, {
            onDelete: "CASCADE"
        });
    };

    return Customer;
}