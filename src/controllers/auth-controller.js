import User from '../models/user-model.js'
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'
import jwt from 'jsonwebtoken'


//registrar
export const register = async(req, res) => {
    const {email, password,username} = req.body
    try {
        const userFound = await User.findOne({email})
        if(userFound) 
            return res.status(400).json( ["El usuario ya existe"])

        const passwordHash = await bcrypt.hash(password,10)
        // se crea un nuevo usuario
        const newUser = new User({
            username,
            email,
            password: passwordHash
        })
        // se guarda el nuevo usuario
        const userSaved = await newUser.save()
        // se crea el Token
       const token = await createAccessToken({id: userSaved._id})
        res.cookie('token', token)
        res.json({
            message: "Usuario creado correctamente"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}
//login
export const login = async (req, res) => {
    const {email, password} =  req.body
    
    try {
        const userFound = await User.findOne({email})
        if(!userFound) return res.status(400).json({message: "Usuario no encontrado"})

        const isMatch = await bcrypt.compare(password, userFound.password)
        if(!isMatch) return res.status(400).json({message:"Credencial invalida"})

        // se crea el Token
       const token = await createAccessToken({id: userFound._id})
        res.cookie('token', token)
        res.json({
            message: "Sesion iniciada"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}
//cerrar sesion
export const logout = (req,res) =>{
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const profile = async (req,res) =>{
   const userFound = await User.findById(req.user.id)

   if(!userFound) return res.status(400).json({message:"Usuario no encontrado"})

    return res.json({
        id:userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
}

export const verifyToken = async (req,res) =>{

    const TOKEN_SECRET = process.env.TOKEN_SECRET

    const {token} = req.cookies

    if(!token) return res.status(401).json({message:"Token no encontrado"})

    jwt.verify(token,TOKEN_SECRET,async (err,user) => {
        if(err) return res.status(401).json({message:"Token no valido"})
        
        const userFound = await User.findById(user.id)
        if(!userFound) return res.status(401).json({message:"Token no valido"})
        
        res.json({
            id:userFound._id,
            username: userFound.username,
            email: userFound.email,
        })
    })
}