import SimpleCrypto from 'simple-crypto-js';
import UsersTable from '../db/models/users_table';
const passwordHash = require('password-hash');

const _secretkey = "gibberishkey";
const crypto = new SimpleCrypto(_secretkey);

module.exports = {
    register: (req, res) => {
        var username = req.body.username;
        // var password = crypto.decrypt(req.body.password);
        var password = req.body.password;
        var hashedPassword = passwordHash.generate(password);
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        UsersTable.where({ "username": username })
            .fetch()
            .then(() => {
                res.status(200).json({
                    newUser: false,
                    success: false
                })
            })
            .catch(() => {
                new UsersTable({
                    username: username,
                    pass: hashedPassword,
                    firstname: firstname,
                    lastname: lastname
                })
                    .save()
                    .then(() => {
                        res.status(200).json({
                            newUser: true,
                            success: true
                        })
                    })
                    .catch(() => {
                        res.status(200).json({
                            newUser: true,
                            success: false
                        })
                    })
            })
    }
}