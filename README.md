# Eat-Da-Burger: The Sequel
A full-stack burger-logger created with MySQL, Node, Express, Handlebars, and Sequelize.

## Deployment
The application is deployed to Heroku: [https://jl-sequelizedburgers.herokuapp.com](https://jl-sequelizedburgers.herokuapp.com)
  * There may be a small delay when you first try to access the application due to the web dyno going to sleep if it receives no traffic for 30 minutes

## How To
1. Enter the name of the burger you would like to add and click "Submit"
1. The new burger will be added to the list of "Available Burgers"
1. Click the "Devour!" button to move a burger to the "Devoured Burgers" list
1. Click the "Digest!" button to delete the burger from list

## Technologies Used
* HTML, CSS, Bootstrap, and Handlebars
* JavaScript, jQuery, Node.js
* [Express](https://www.npmjs.com/package/express)
* [Path](https://www.npmjs.com/package/path)
* [Sequelize](https://www.npmjs.com/package/sequelize) and [JawsDB MySQL](https://elements.heroku.com/addons/jawsdb)
