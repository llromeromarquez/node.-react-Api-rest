const jwt = require("jsonwebtoken");
const config = require("../config");


module.exports = {

    verifyToken (req, res, next) {
        const token = req.headers["x-access-token"];
        
        if (!token) {
           
            return res.status(401).json({
                auth: false,
                message: "No token provided"
            });

        };
     
        const decoded = jwt.verify(token, config.secret);
        req.userId = decoded.id;
        
        return next();
    },

    isNotLoggedIn(req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        res.json({auth: true});
    }

}
    
