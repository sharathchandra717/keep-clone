import SimpleCrypto from 'simple-crypto-js';
const passwordHash = require('password-hash');

const _secretkey = "gibberishkey";
const crypto = new SimpleCrypto(_secretkey);

module.exports = {
    authenticate: (req, res) => {
        var username = req.body.username;
        var password = crypto.decrypt(req.body.password);
        if(username === 'pavan' && password === 'root') {
            res.status(200).json({
                "status": "OK"
            })
        } else {
            res.status(200).json({
                "status": "NOT OK"
            })
        }
    },
    
    getSecretKey: (req, res) => {
        res.status(200).json({
            key: _secretkey
        })
    }
}