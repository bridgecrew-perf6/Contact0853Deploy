/*
    authController.js is responsible for the login authentification. 
    It checks whether or not the entered data by the user is an existing dataset in the database and gives / declines access.
*/

'use strict'

var MongoClient = require('mongodb').MongoClient
var jwt = require('jsonwebtoken')
var url = "mongodb://localhost:27017/"

exports.authentication = function (req, res) {
    // Capture the input fields
    let username = req.body.username;
    let password = req.body.password;

    // console.log(username+' '+password)
    // Ensure the input fields exists and are not empty
    if (username && password) {

        MongoClient.connect(url, function (err, db) {
            if (err) throw err
            var dbo = db.db("ContactList")
            var query = {
                username: username,
                password: password
            }

            dbo.collection("Users").find(query).toArray(function (err, result) {

                // If there is an issue with the query, output the error
                if (err) throw error;
                // If the account exists
                if (result.length > 0) {
                    console.log('logged in')
                    const token = jwt.sign({ username: result.username, password: result }, 'secret_keys')
                    console.log(token)
                    res.json({
                        message: 'Hooray, authenticated! Utilize this token in the header',
                        token: token
                    })
                } 
                // error message if user input doesn't match with the dataset from the database
                else {
                    console.log('Incorrect Username and/or password!')
                    res.json({
                        message: 'Invalid Username or Password, try again!',
                        user: req.body
                      })
                }
                res.end();
            })
        })
    } 
    // Ensures the input fields exists and are not empty
    else {
        res.send('Please enter both a Username and Password!');
        res.end();
    }
}
