# nodejs-server

This project was made with nodeJS, to create the services that I used in the Front-end project.

## Development server

Run `node script.js` for a dev server. Backend will be automatically running.

## Database setup

Name the database `takumDB` or change the name whitin `script.js` file by new one instead the current name. You have to set the values "password" and "database" inside it if ypu create a new database with other name.

## Important!

To avoid unexpected errors, create the database in the root user and start mysql server and run `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY ''` and `flush privileges;`, this allow us avoid ER_NOT_SUPPORTED_AUTH_MODE Error.
If you did it you have to change the connection variables by:

`var connection = mysql.createPool({
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'takumDB', 
    insecureAuth: true,

});`

Finally run `node script.js`.
