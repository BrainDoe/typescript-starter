import express from 'express'
import {getPlanets} from './planets.controller'
const router = express.Router();


router.get('/planets', getPlanets);

// module.exports = router;
export default router