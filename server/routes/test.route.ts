import express from 'express';
import { test_get } from '../controllers/test.controller';




const router = express.Router();

router.get('/', test_get);



export default router;
