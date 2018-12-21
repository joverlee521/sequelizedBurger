# Eat-Da-Burger: The Sequel
A full-stack burger order logger created with MySQL, Node, Express, Handlebars, and Sequelize.

## Deployment
The application is deployed to Heroku: [https://jl-sequelizedburgers.herokuapp.com](https://jl-sequelizedburgers.herokuapp.com)
  * There may be a small delay when you first try to access the application due to the web dyno going to sleep if it receives no traffic for 30 minutes

## How To
1. Enter the name of the burger and customer name then click "Submit"
1. The new burger with associated customer will be added to the list of "Pending Orders"
   * Burgers are ordered by customer then by alphabetical order
1. Click the "Complete!" button to move an order to the "Completed Orders" list
1. Click the "Delete!" button to delete the order from list

![Eat-Da-Burger](/public/assets/img/burger-page.png)

## Technologies Used
* HTML, CSS, Bootstrap, and Handlebars
* JavaScript, jQuery, Node.js
* [Express](https://www.npmjs.com/package/express)
* [Path](https://www.npmjs.com/package/path)
* [Sequelize](https://www.npmjs.com/package/sequelize) and [JawsDB MySQL](https://elements.heroku.com/addons/jawsdb)
