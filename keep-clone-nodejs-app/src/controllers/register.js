import SimpleCrypto from 'simple-crypto-js';
import UsersTable from '../db/models/users_table';
const passwordHash = require('password-hash');

const _secretkey = "gibberishkey";
const crypto = new SimpleCrypto(_secretkey);

module.exports = {
    register: (req, res) => {
        const username = req.body.username;
        // const password = crypto.decrypt(req.body.password);
        const password = req.body.password;
        const hashedPassword = passwordHash.generate(password);
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        UsersTable.where({ "username": username })
            .count()
            .then((count) => {
                if (count !== 0) {
                    console.log('User' + username + 'already exists');                    
                    res.status(200).json({
                        exists: true,
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
                        console.log('User' + username + 'account creation success');
                        res.status(200).json({
                            exists: false,
                            success: true
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                        console.log('User' + username + 'account creation failed');
                        res.status(200).json({
                            exists: false,
                            success: false
                        })
                    })
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(200).json({
                    exists: false,
                    success: false
                })
            })
    }
}