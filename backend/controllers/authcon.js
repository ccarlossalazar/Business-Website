import {newError} from '../util/error.js'
import bycrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res,next) => {
try{
    const salt = bycrypt.genSaltSync(10)
    const hashedPassword = bycrypt.hashSync(req.body.password, salt)

    const newUser = new Users ({
        ...req.body,
        password: hashedPassword,
    })

    await newUser.save()
    res.status(200).send("User was created successfully!")
} catch (err) {
    next(err)
    }
}

export const login = async (req,res,next) => {
    try{
    const user =await Users.findOne({where: {username: req.body.username}})
    if(!user) {return (next(newError(404, "User not found")))}

    const correctPassword = await bycrypt.compare(req.body.password, user.password)
    if(!correctPassword) {return (next(newError(400, "Incorrect Password or Username")))}
    
    const token = jwt.sign({id:user.id, role: user.role}, process.env.JWT)
    

    const { password, ...otherDetails } = user.dataValues
    res.cookie("access_token", token,{
        httpOnly: true
    }).status(200).json({details:{...otherDetails}, role: user.role})
    } catch (err) {
        next(err)
        }
    } 