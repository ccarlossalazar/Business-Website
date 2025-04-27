import { ref, push, set } from "firebase/database"
import db from "../databaseconfig.js"

export const newClient = async (req, res, next) => {
    try {
        const newClient = push(ref(db, 'clients'))
        await set(newClient, req.body) 
        res.status(202).json({message: "Client created successfully", id: newClient.key})
    } catch (err) {
        next(err)
    }
}