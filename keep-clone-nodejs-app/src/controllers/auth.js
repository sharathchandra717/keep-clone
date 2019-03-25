import SimpleCrypto from 'simple-crypto-js';

const _secretkey = "gibberishkey";
const crypto = new SimpleCrypto(_secretkey);

module.exports = {
    authenticate: (req, res) => {
        var name = req.body.name;
        var pass = crypto.decrypt(req.body.pass);
        if(name === 'pavan' && pass === 'root') {
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