const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const UserService = require("./user..service");

/**
 * Verify authentication middleware
 * @param req
 * @param res
 * @param next
 */
const verifyJwt = (req, res, next) => {
    const privateRoute = ['teacher', 'admin', 'student']

    if (req.originalUrl.startsWith('/teacher')
        || req.originalUrl.startsWith('/admin')
        || req.originalUrl.startsWith('/student')) {
        const token = req.header('Authentication').split(' ')[1];
        jwt.verify(token, process.env.JWT_SERET_KEY, async (err, decoded) => {
            if (err) {
                throw new err;
            }
            const user = await UserService.findByUsername(decoded.username);
            res.locals.user = user;
            next();
        })
    } else {
        next();
    }
}

/**
 * Hash password and save user with the hashedPassword
 * @param user
 */
const signup = (user) => {
    bcrypt.hash(user.password, 10, (err, hashedPassword) => {
        user.password = hashedPassword;
        UserService.save(user);
    })
}

/**
 * Login
 * @param username {string}
 * @param password {string}
 * @returns {Promise<string>}
 */
const login = async (username, password) => {
    try {
        const user = await UserService.findByUsername(username)
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                return jwt.sign({username}, process.env.JWT_SECRET_KEY);
            }
            return null;
        }
    } catch (err) {
        throw err;
    }
}

module.exports = {
    verifyJwt,
    signup,
    login
};