module.exports = function(sequelize, DataTypes){
    // Defining the Burger model
    var Burger = sequelize.define("Burger", {
        // Burger name cannot be null and is a string
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Completed status is a boolean with default value of false
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    // Associated Burger model with Customer model
    Burger.associate = function(models){
        Burger.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false,
            }
        });
    };

    return Burger;
}