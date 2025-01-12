const db = require('../util/database')

module.exports = class User {
    constructor(firstname, lastname, email, username, address, password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.address = address;
        this.username = username;
        this.password = password;
    }
}