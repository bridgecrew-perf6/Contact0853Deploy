/*
    initContactList.js creates the dataset for the database with test data
*/

// only run this script once to init the Database!


var databaseName = 'ContactList'

// creates connection to database
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/" + databaseName

MongoClient.connect(url, function (err, db) {
    if (err) throw err
    console.log("Database " + databaseName + " created!");
    var dbo = db.db(databaseName)

    // creates collection in the database
    dbo.createCollection("Users", function (err, result) {
        if (err) throw err
        console.log("Collection Users created")
        db.close()
    })

    // test data
    var obj = [
        {
            username: "bob",
            password: "1234"
        },

        {
            username: "emma",
            password: "4321"
        },

        {
            username: "julia",
            password: "0000"
        },

    ]

    // inserts test data
    dbo.collection("Users").insertMany(obj, function (err, result) {
        if (err) throw err
        console.log("Inserted Users")
        db.close()
    })

    // creates the collection for the contacts
    dbo.createCollection("Contacts", function (err, result) {
        if (err) throw err
        console.log("Collection Contacts created")
        db.close()
    })

    var obj = [

        {
            contactid: 1,
            fname: "Kristy",
            lname: "Chung",
            mnumber: "099-000-1234",
            email: "kristy@vuejs.com",
            facebook: "https://facebook.com/kristy",
            image: ""
        },

        {
            contactid: 2,
            fname: "Matt",
            lname: "Giampietro",
            mnumber: "099-000-4567",
            email: "matt.g@vuejs.com",
            facebook: "https://facebook.com/matt.g",
            image: "https://semantic-ui.com/images/avatar2/large/matthew.png"
        },

        {
            contactid: 3,
            fname: "Molly",
            lname: " ",
            mnumber: "099-123-4567",
            email: "molly@vuejs.com",
            facebook: "https://facebook.com/molly",
            image: "https://semantic-ui.com/images/avatar2/large/molly.png"
        },
        
        {
            contactid: 4,
            fname: "Elyse",
            lname: " ",
            mnumber: "099-777-1111",
            email: "elyse@vuejs.com",
            facebook: "https://facebook.com/elyse",
            image: "https://semantic-ui.com/images/avatar2/large/elyse.png"
        }
    ]

    // inserts all contacts
    dbo.collection("Contacts").insertMany(obj, function (err, result) {
        if (err) throw err
        console.log("Inserted Contacts")
        db.close()
    })

});