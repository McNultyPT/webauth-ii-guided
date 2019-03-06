module.exports = role => {
    return function (req, res, next) {
        if (req.decodedJwt.role && req.decodedJwt.role.includes(role)) {
            next();
        } else {
            res.status(403).json({ message: 'you shall not pass!' });
        }
    }
}