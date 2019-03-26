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
            .fetch()
            .then((result) => {
                if (passwordHash.verify(password, result.get('password'))) {
                    console.log('User ', username, ' login success')
                    res.status(200).json({
                        "uname": result.get('username'),
                        "uid": result.get('id'),
                        "authenticated": true,
                        "firstname": result.get('firstname'),
                        "lastname": result.get('lastname')
                    });
                }
                else {
                    console.log('User ', username, ' login failed')
                    res.status(200).json({
                        "authenticated": false
                    });
                }
            })
            .catch(() => {
                console.log('User ', username, ' does not exist')
                res.status(200).json({
                    "authenticated": false
                })
            })
    }
}