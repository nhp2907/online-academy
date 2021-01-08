const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const UserService = require("./user.service");

/**
 * Verify authentication middleware
 * @param req
 * @param res
 * @param next
 */
const verifyJwt = (req, res, next) => {
    console.log('cookies', req.cookies);
    console.log('url', req.originalUrl);
    const token = req.cookies.token;
    if (req.originalUrl === '/logout' || !token) {
        next();
    } else {
        jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
            console.log(token);
            console.log('temp decode decode', decoded)

            if (err) {
                res.redirect('/');
            }
            console.log('decoded', decoded)
            const user = await UserService.findByUsername(decoded.username);
            delete user.password;
            res.locals.user = user;
            next();
        })
    }
}

/**
 * @param user
 */
const signup = (user) => {
    bcrypt.hash(user.password, 10, (err, hashedPassword) => {
        user.password = hashedPassword;
        UserService.save(user).then(() => console.log('Signup Save account successfully'));
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
                const token = jwt.sign({username}, process.env.JWT_SECRET_KEY);
                jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
                    console.log(token);
                    console.log('login decode', decoded)
                })

                return token;
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