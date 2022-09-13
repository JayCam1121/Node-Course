const validateSession = (req, res, next) => {
    console.log('Middleware 1: Validate session...');
    const validateSession = true;
    if (!validateSession) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid session'
        });
    }
    next();
};

const validateUserRole = (req, res, next) => {
    console.log('Middleware 2: Validate user role...');
    next();
};
const validateUserData = (req, res, next) => {
    console.log('Middleware 3: Validate user data...');
    next();
};

module.exports = { validateSession, validateUserData, validateUserRole};