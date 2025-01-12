const express = require("express");
const db = require("./util/database");

const Users = require("./models/users")
const User = require("./models/user")

const app = express();


const mike = new User("Mike", "Smith", "mike@email.com", "mike1", "address","password")

console.log(mike);
Users.addUser(mike);

Users.getAllUsers().then(([data, rowData])=>{
    console.log(data);
})

app.get("/", (req, res, next)=>{
    res.write("<h1>Hello World</h1>");
});

app.listen(3000);