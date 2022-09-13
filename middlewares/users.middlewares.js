const { User } = require('../models/user.model');

const validateRegister = async (req, res, next) => {
	try {
    const { id } = req.params;

	const user = await User.findOne({ where: { id } });

	if (!user) {
		res.status(400).json({
            status: 'error',
            message: 'User not found',
        });
    }
    req.user = user;
	next();
    } catch (error) {};
};

module.exports = { validateRegister };