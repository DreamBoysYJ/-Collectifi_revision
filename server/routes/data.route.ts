import express from 'express';


import { addNft_infos_get } from '../controllers/data.controller';

const router = express.Router();

router.get('/addnftinfos', addNft_infos_get);



export default router;
