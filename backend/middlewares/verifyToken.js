import jwt from "jsonwebtoken"

const verifyToken = async (req, res, next) => {
    try {
        const { token } = req.cookies
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)

        if( !token || !verifyToken ) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        req.userId = verifyToken.userId
        next()
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

export default verifyToken