const db = require('../util/database')

module.exports = class Account {
    constructor(account_type, user_id, balance=0){
        this.account_type = account_type;
        this.user_id = user_id;
    }
}