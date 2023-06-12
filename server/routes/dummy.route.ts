import express from 'express';
import { addAdmin_get, addGalleries_get, addPost_comments_get, addPosts_get, addUsers_get } from '../controllers/dummy.controller';

const router = express.Router();

router.get('/addusers', addUsers_get);
router.get('/addadmin', addAdmin_get);
router.get('/addposts', addPosts_get);
router.get('/addcomments', addPost_comments_get);
router.get('/addgalleries', addGalleries_get);


export default router;
