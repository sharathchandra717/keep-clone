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
            .count()
            .then((count) => {
                if (count !== 0) {
                    res.status(200).json({
                        newUser: false,
                        success: false
                    })
                }
                else {
                    new UsersTable({
                        username: username,
                        password: hashedPassword,
                        firstname: firstname,
                        lastname: lastname
                    })
                    .save()
                    .then(() => {
                        console.log('User ' + username + ' account creation success');
                        res.status(200).json({
                            newUser: true,
                            success: true
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                        console.log('User ' + username + ' account creation failed');
                        res.status(200).json({
                            newUser: true,
                            success: false
                        })
                    })
                }
            })
            .catch((err) => {
                res.status(200).json({
                    err
                })
            })
    }
}