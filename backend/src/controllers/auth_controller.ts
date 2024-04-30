import express from 'express';

export const signup_get = async (req:express.Request, res:express.Response) => {
    res.send("signup");
}

export const login_get = async (req:express.Request, res:express.Response) => {
    res.send("Login");
}

export const signup_post = async (req:express.Request, res:express.Response) => {
    res.send('new signup');
}

export  const login_post= async (req:express.Request, res:express.Response)=> {
    res.send("user login");
}

