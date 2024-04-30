import express from 'express'

import test from './test';
import auth from './auth';

const router = express.Router();

export default():express.Router => {
    test(router);
    auth(router);
    return router;
}
