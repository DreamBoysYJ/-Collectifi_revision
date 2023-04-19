import express from 'express';
import {
  admin_login_post,
  admin_posts_get,
  admin_users_get,
  admin_comments_get,
} from '../controllers/admin.controller';

const router = express.Router();

router.post('/login', admin_login_post);
router.get('/users', admin_users_get);
router.get('/posts', admin_posts_get);
router.get('/comments', admin_comments_get);

export default router;
