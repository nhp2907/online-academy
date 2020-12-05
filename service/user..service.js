const User = require('../models/user')

module.exports = {
    async findByUsername(username) {
        const user = await User.findOne({
                where: {
                    username
                }
            }
        )
        return user;
    },
    async save(user) {
        const savedUser = await User.build({...user}).save();
        return savedUser;
    }

}