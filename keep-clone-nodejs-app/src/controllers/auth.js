import SimpleCrypto from 'simple-crypto-js';
const passwordHash = require('password-hash');
import UsersTable from '../db/models/users_table';

const _secretkey = "gibberishkey";
const crypto = new SimpleCrypto(_secretkey);

module.exports = {
    authenticate: (req, res) => {
        var username = req.body.username;
        // var password = crypto.decrypt(req.body.password);
        var password = req.body.password;
        UsersTable.where({ "username": username })
            .fetch({ columns: ["password"] })
            .then((result) => {
                if (passwordHash.verify(password, result.get('password'))) {
                    res.status(200).json({
                        "username": true,
                        "password": true
                    });
                }
                else {
                    res.status(200).json({
                        "username": true,
                        "password": false
                    });
                }
            })
            .catch(() => {
                res.status(200).json({
                    "username": false,
                    "password": false
                })
            })
    }
}