import jwt from 'jsonwebtoken'
import {newError} from './error.js'

export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token

    if(!token) {
        return next(newError(401, "You are not authenticated"))
    }
   
    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) {
            return next(newError(403, "Token is not valid"))
        }        
        req.user = user
        next()
    })
}

export const verifyUser = (req, res, next) => {
    
    verifyToken(req, res, (err) => {
    const userIdFromURL = Number(req.params.id)

    if(err) {
        return next(err)
    }
        if (userIdFromURL === req.user.id || req.user.isAdmin) {
            return next()
        } else {
            return next(newError(403, "You are not authorized"))}
    })
}