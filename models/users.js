const db = require('../util/database')

module.exports = class Users {

    static getAllUsers(){
        return db.execute("SELECT * FROM users");
    }

    static addUser(user){
        return db.execute(
            "INSERT INTO users (firstname, lastname, email, username, address, password) VALUES(?, ?, ?, ?, ?, ?)",
            [user.firstname, user.lastname, user.email, user.username, user.address, user.password ]
        );
    }
}