var express = require('express');
var mysql = require('mysql');
const bodyParser = require("body-parser");
var app = express();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser')


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


var connection = mysql.createPool({
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'takumDB',
    insecureAuth: true,

});


connection.getConnection( function(error){
    if(error){
        console.log(error);
        throw error;
    }else{
        console.log('CONNECTED');
    }
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
;



app.get('/getallusers', function (req, resp) {

    connection.getConnection(function (error, tempCont) {
        if (!!error) {
            tempCont.release();
        } else {
            tempCont.query("SELECT * FROM Users", function (error, rows, fields) {
                tempCont.release();
                if (!!error) {
                    console.log('query ERROR');
                } else {
                    resp.json(rows)
                }
            });
        }
    });
});

app.get('/getUserByEmail/:emailUser', function (req, resp) {

    connection.getConnection(function (error, tempCont) {
        if (!!error) {
            tempCont.release();
        } else {
            var email = req.params.emailUser;

            tempCont.query("SELECT * FROM Users WHERE Email='"+email+"'", function (error, rows, fields) {
                tempCont.release();
                if (!!error) {
                    console.log('query ERROR');
                } else {
                    console.log(rows);
                    console.log(resp);
                    resp.json(rows)
                }
            });
        }
    });
});

app.get('/loginUser/:emailUser/:passUser', function (req, resp) {

    connection.getConnection(function (error, tempCont) {
        if (!!error) {
            tempCont.release();
        } else {
            var email = req.params.emailUser;
            var password = req.params.passUser;
            tempCont.query("SELECT * FROM Users WHERE Email='"+email+"'", function (error, rows, fields) {
                tempCont.release();
                if (!!error) {
                    console.log('ERROR', error);
                } else {
                    var currentJson = rows[0];
                    if(currentJson){
                        if(currentJson.Password === password){
                            resp.status(200).send(currentJson);
                        }else{
                            resp.status(401).send('There is an error with the password');
                        }
                    }else{
                        resp.status(401).send('User is not registered');
                    }
                    
                }
            });
        }
    });
});


app.get('/getClothesProductsById/:idUser', function (req, resp) {

    connection.getConnection(function (error, tempCont) {
        if (!!error) {
            tempCont.release();
        } else {
            var id = req.params.idUser;

            var queryListClothesProducts = "SELECT * FROM Products WHERE Type IN (SELECT Type FROM Users WHERE IdUsers='"+id+"') AND Topic IN(SELECT Topic FROM Products WHERE Topic='Clothes')";


            tempCont.query(queryListClothesProducts, function (error, rows, fields) {
                tempCont.release();
                if (!!error) {
                    console.log(error);
                } else {
                    //resp.json(rows);
                    resp.status(200).send(rows);                    
                }
            });
        }
    });
});

app.get('/getToysProductsById/:idUser', function (req, resp) {

    connection.getConnection(function (error, tempCont) {
        if (!!error) {
            tempCont.release();
        } else {
            var id = req.params.idUser;

            var queryListToysProducts = "SELECT * FROM Products WHERE Type IN (SELECT Type FROM Users WHERE IdUsers='"+id+"') AND Topic IN(SELECT Topic FROM Products WHERE Topic='Toys')";


            tempCont.query(queryListToysProducts, function (error, rows, fields) {
                tempCont.release();
                if (!!error) {
                    console.log(error);
                } else {
                    resp.status(200).send(rows);                    
                }
            });
        }
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/addProduct', function (req, resp) {
    connection.getConnection(function (error, tempCont) {
        if (!!error) {
            tempCont.release();
        } else {
            var name = req.body.Name;
            var description = req.body.Description;
            var cost = req.body.Cost;
            var type = req.body.Type;
            var topic = req.body.Topic;

            var productQuery = "INSERT INTO Products (Name, Description, Cost, Type, Topic) VALUES ('"+name+"','"+description +"',"+cost+",'"+type+"','"+topic+"')";
            tempCont.query(productQuery, function (error, rows, fields) {
                tempCont.release();
                if (!!error) {
                    resp.status(400).send(error);
                } else {
                    var json={'added': true};
                    resp.status(200).send(json);
                }
            });
        }
    });
});

app.delete('/removeProduct/:idProduct', function (req, resp) {

    connection.getConnection(function (error, tempCont) {
        if (!!error) {
            console.log('conection error');
            tempCont.release();
        } else {
            var id = req.params.idProduct;


            var productQuery = "DELETE FROM Products WHERE idProducts='"+id+"'";
            tempCont.query(productQuery, function (error, rows, fields) {
                tempCont.release();
                if (!!error) {
                    console.log(error);
                    resp.status(400).send(error);
                } else {
                    var json={'removed': true};
                    resp.status(200).send(json);
                }
            });
        }
    });
});


app.put('/updateProduct/', function (req, resp) {

    connection.getConnection(function (error, tempCont) {
        if (!!error) {
            console.log('conection error');
            tempCont.release();
        } else {
            console.log(req.body);
            var id = req.body.idProducts;
            var name = req.body.Name;
            var description = req.body.Description;
            var cost = req.body.Cost;
            var type = req.body.Type;
            var topic = req.body.Topic;

            var productQuery = "UPDATE Products SET Name='"+name+"',Description='"+description+"',Cost='"+cost+"',Type='"+type+"',Topic='"+topic+"' WHERE idProducts='"+id+"'";
            tempCont.query(productQuery, function (error, rows, fields) {
                tempCont.release();
                if (!!error) {
                    console.log(error);
                    resp.status(400).send(error);
                } else {
                    var json={'updated': true};
                    resp.status(200).send(json);
                }
            });
        }
    });
});

app.post('/addUser', function (req, resp) {
    connection.getConnection(function (error, tempCont) {
        if (!!error) {
            tempCont.release();
        } else {
            var name = req.body.Name;
            var lastname = req.body.LastName;
            var password = req.body.Password;
            var type = req.body.Type;
            var email = req.body.Email;
            var gender = req.body.Gender;

            var productQuery = "INSERT INTO Users (Name, LastName, Password, Type, Email, Gender) VALUES ('"+name+"','"+lastname +"',"+password+",'"+type+"','"+email+"','"+gender+"')";
            tempCont.query(productQuery, function (error, rows, fields) {
                tempCont.release();
                if (!!error) {
                    resp.status(400).send(error);
                } else {
                    var json={'added': true};
                    resp.status(200).send(json);
                }
            });
        }
    });
});

app.listen(1337);

