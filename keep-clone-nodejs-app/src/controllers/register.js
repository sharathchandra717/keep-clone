import SimpleCrypto from 'simple-crypto-js';
const passwordHash = require('password-hash');

const _secretkey = "gibberishkey";
const crypto = new SimpleCrypto(_secretkey);

module.exports = {
    register: (req, res) => {
        var username = req.body.username;
        var password = crypto.decrypt(req.body.password);
        var hashedPass = passwordHash.generate(password);
        //store username and pass
        res.status(200).json({
            "message": "user added"
        })
    }
}