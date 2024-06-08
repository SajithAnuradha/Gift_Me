import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers // Access token directly



    if (!token) {
        return res.status(401).json({ success: false, message: 'Not authorized, please login again' });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded.id;
        // console.log('Decoded Token:', decoded); // Log the decoded token
        // console.log('User ID:', req.body.userId); // Log the user ID
        next();
    } catch (error) {
        console.error('JWT Verification Error:', error); // Log the error details
        let message = 'Error';
        if (error.name === 'TokenExpiredError') {
            message = 'Token expired, please login again';
        } else if (error.name === 'JsonWebTokenError') {
            message = 'Invalid token, please login again';
        }
        res.status(401).json({ success: false, message });
    }
};

export default authMiddleware;
