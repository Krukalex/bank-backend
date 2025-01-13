const db = require('../util/database')

const Account = require("./account");

module.exports = class User {
    constructor(firstname, lastname, email, username, address, password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.address = address;
        this.username = username;
        this.password = password;
    }

    async getAccount(){
        const [user, userRowData] = await db.execute(
            'SELECT * FROM users WHERE username = ? and email = ?',
            [this.username, this.email]
        )
        const user_id = user[0].user_id;

        const [account, accountRowData] = await db.execute(
            "SELECT * FROM account WHERE user_id = ?",
            [user_id]
        );
        return account[0];
    }


    createAccount(account_type, user_id){
        const newAccount = new Account(account_type, user_id);
        db.execute(
            "INSERT INTO account (type, balance, user_id) VALUES(?, ?, ?)",
            [newAccount.account_type, 0, newAccount.user_id]
        )
    }
}