/*
    contactController.js for the data from the contacts. 
    This file requests data, requests data by id, saves data, updates data, and deletes data from the database for the contacts
*/

'use strict'

var MongoClient = require('mongodb').MongoClient
var jwt = require('jsonwebtoken')
var url = "mongodb://localhost:27017/"


// requests data from the server, saves it as an array
exports.getContacts = function (req, res) {

    MongoClient.connect(url, function (err, db) {
        if (err) throw err
        var dbo = db.db("ContactList")
        dbo.collection("Contacts").find({}).toArray(function (err, result) {
            if (err) throw err
            console.log(result)
            res.json(result)
            db.close()
        })
    })
}

// requests the data via ID
exports.getContactByID = function (req, res) {

    console.log(req.params.id)
    MongoClient.connect(url, function (err, db) {
        if (err) throw err
        var dbo = db.db("ContactList")

        dbo.collection("Contacts").find({ contactid: parseInt(req.params.id) }).toArray(function (err, result) {
            if (err) throw err
            console.log(result)
            res.json(result)
            db.close()
        })
    })
}

// sends the data from an additional contact to save it in the database
exports.addContact = function (req, res) {
    var contact = req.body
    MongoClient.connect(url, function (err, db) {
        if (err) throw err
        
        var dbo = db.db("ContactList")
        dbo.collection("Contacts").find({ contactid: parseInt(contact.contactid) }).toArray(function (err, result) {
            //sends error if process fails
            if (err) throw err
            //adds contact to database

            if (result.length == 0) {
                dbo.collection("Contacts").insertOne(contact, function (err, result) {
                    if (err) throw err
                    console.log("Inserted 1 item")
                    console.log(contact)
                    res.json(result)
                    db.close()
                })
            } 

            // error message if ID is taken
            else {
                res.json(400, {
                    error: 1,
                    msg: "ID already exists"
                });
                db.close()
            }
        })
    })

}


//updated a contact by sending the updated data to the database
exports.updateContactByID = function (req, res) {
    var contact = req.body
    MongoClient.connect(url, function (err, db) {
        if (err) throw err
        var dbo = db.db("ContactList")
        dbo.collection("Contacts").updateOne({ contactid: parseInt(req.params.id) }, { $set: contact }, { upsert: true }, function (err, result) {
            if (err) throw err
            console.log("Update 1 item")
            console.log(contact)
            res.json(result)
            db.close()
        })
    })
}


// deletes the contact by deleting the dataset in the database
exports.deleteContactByID = function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err
        var dbo = db.db("ContactList")
        dbo.collection("Contacts").deleteOne({ contactid: parseInt(req.params.id) }, function (err, result) {
            if (err) throw err
            console.log("Element " + req.params.id + " is deleted")
            res.json(result)
            db.close()
        })
    })

}

