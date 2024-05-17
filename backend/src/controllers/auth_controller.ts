import express from 'express';
import User from '../models/User';

export const signup_get = async (req:express.Request, res:express.Response) => {
    res.send("signup");
}

export const login_get = async (req:express.Request, res:express.Response) => {
    console.log(req.body)
    res.send("Login");
}

export const signup_post = async (req:express.Request, res:express.Response) => {
    const {name, email, password} = req.body;
    try {
        const user = await User.create({
            name,
            email,
            password
        });
        await user.save();
        res.status(201).json(user);
    }catch (err) {
        res.status(400).send('Error user');

    }
}

export  const login_post= async (req:express.Request, res:express.Response)=> {
    const {email, password} = req.body;
    console.log(email,password)
    res.send("user login");
}

