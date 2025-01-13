const express = require("express");
const db = require("./util/database");

const Users = require("./models/users");
const User = require("./models/user");

const app = express();


// const mike = new User("Mike", "Smith", "mike@email.com", "mike1", "address","password")

// console.log(mike);
// Users.addUser(mike);

Users.getAllUsers().then(([data, rowData])=>{
    const {
        user_id, 
        firstname, 
        lastname, 
        email, 
        username, 
        address, 
        password
    } = data[1];
    const user = new User(firstname, lastname, email, username, address, password);
    user.getAccount()
        .then((account)=>{
            console.log(account);
        });
});

app.get("/", (req, res, next)=>{
    res.write("<h1>Hello World</h1>");
});

app.listen(3000);