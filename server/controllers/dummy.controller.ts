
import { MyRequest } from "../@types/express/express";
import  {Response, NextFunction} from 'express';
import db from "../models";
import { data } from "../data/dummy_posts";
import bcrypt from 'bcrypt';
import { gallerys } from "../data/dummy_gallery";



//더미 User 10개 만들고 넣기
export const addUsers_get = async (req: MyRequest, res: Response, next: NextFunction) => {
    try {
    for (let i = 0; i < 10; i++) {
        let users = await db.User.create({
          nickname: `user${i}`,
          address: `xdf3234${i}`,
          token_amount: 1000,
        });
      }  
    res.status(200).send({message : "Add dummy Users Success!"})
  

    } catch (e) {
      console.log();
      res.status(400).send({message: 'Add dummy Users Fail!'});
    }
  };


// 더미 Admin 1개 넣기
export const addAdmin_get = async (req: MyRequest, res: Response, next: NextFunction) => {
  try {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash('1234', saltRounds);

  const admin = await db.Admin.create({
    username: 'admin',
    password: hashedPassword,
  });
  res.status(200).send({message : "Add dummy Admin Success!"})


  } catch (e) {
    console.log();
    res.status(400).send({message: 'Add dummy Admin Fail!'});
  }
};  
  

// 더미 Post 200개 불러와서 넣기
export const addPosts_get = async (req: MyRequest, res: Response, next: NextFunction) => {
    try {
        data.map((item, index) => {
          const posts = db.Post.create({
            user_id: Math.floor(Math.random() * 10 + 1),
            title: item.title,
            content: item.content,
            likes: index,
          });
        });
    res.status(200).send({message : "Add dummy Posts Success!"})
  

    } catch (e) {
      console.log();
      res.status(400).send({message: 'Add dummy Posts Fail!'});
    }
  };  

// 더미 Post_comment 10개를 200번째 Post에 넣기
export const addPost_comments_get = async (req: MyRequest, res: Response, next: NextFunction) => {
  try {
      for (let i = 0; i < 5; i++) {
      let result = await db.Post_comment.create({
        user_id: Math.floor(Math.random() * 10 + 1),
        post_id: 200,
        content: 'hello testttt',
        likes: 50,
        dislikes: 50,
      });
    }
  res.status(200).send({message : "Add dummy Comments Success!"})


  } catch (e) {
    console.log();
    res.status(400).send({message: 'Add dummy Comments Fail!'});
  }
};    



// 더미 Gallery 데이터 3개 넣기
export const addGalleries_get = async (req: MyRequest, res: Response, next: NextFunction) => {
    try {
        gallerys.map(item => {
          const datas = db.Gallery.create({
            title: item.title,
            description: item.description,
            img_url: item.img_url,
            tags: item.tags,
            date: item.date,
          });
        });
    res.status(200).send({message : "Add 3 Galleries Success!"})
  

    } catch (e) {
      console.log();
      res.status(400).send({message: 'Add 3 Galleries  Fail!'});
    }
  };    




