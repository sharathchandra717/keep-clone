import SimpleCrypto from 'simple-crypto-js';
const passwordHash = require('password-hash');

const _secretkey = "gibberishkey";
const crypto = new SimpleCrypto(_secretkey);

module.exports = {
    register: (req, res) => {
        var name = req.body.name;
        var pass = crypto.decrypt(req.body.pass);
        var hashedPass = passwordHash.generate(pass);
        //store username and pass
        res.status(200).json({
            "message": "user added"
        })
    }
}