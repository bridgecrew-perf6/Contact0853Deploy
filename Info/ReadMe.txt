
# About

Repository established by: Emma Victoria Baudy (6480853), Julia Fraunhoffer (6480XX)
Webprogramming-Individualassignment: Contactpage
Established in March 2022

If there are any problems with setting up the Application, do not hesitate to contact "emma.bau@student.mahidol.edu" or "julia.fra@student.mahidol.edu"


# Setting up the Client Application

For starting the webapplication, go to `"/ContactList/"`

## Install the required dependencies with the following commands:

1. npm install vue

2. npm install node

## Start the Webapplication-Client with the following command:

npm run dev

# Setting up the Server

Switch to `"/Server"`

## Install the required dependencies with the following commands:

1. npm install body-parser

2. npm install express

3. npm install jsonwebtoken

4. npm install cors

5. 1.npm install mongodb


## Start the Server with the following command:

node server.js

# Setting up the Database:
1. To set up the database on the right Localhost, start the mongodb via `"localhost:27017"`, if not done yet- please run this script only once to initialize the Database

2. Switch to `"/Server/init"`

## Start Database with the following command:

node initContactList.js
