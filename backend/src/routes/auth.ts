import express from 'express'
import { signup_get,signup_post, login_get, login_post } from '../controllers/auth_controller'


export default(router:express.Router) => {
    router.get("/signup", signup_get);
    router.post("/signup", signup_post);
    router.get("/login", login_get);
    router.post("/login", login_post);
}