const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const User = require('../models/user');

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

            res.locals.user = await User.findByUsername(decoded.username);
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
        User.save(user);
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
        const user = await User.findByUsername(username)
        if (!user) {
            throw new Error(`User with username = ${username} not found`)
        }

        if (bcrypt.compareSync(password, user.password)) {
            return jwt.sign({username}, process.env.JWT_SECRET_KEY);
        } else {
            throw new Error(`Username or password is incorrect`)
        }

    } catch (err) {
        throw err;
    }
}

module.exports = {
    verifyJwt: verifyJwt,
    signup: signup,
    login: login
};