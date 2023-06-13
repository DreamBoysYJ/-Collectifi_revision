import express, {Request, Response, NextFunction} from 'express';
import {MyRequest} from '../@types/express/express';
import db from '../models';



export const rank_get = async (req: MyRequest, res: Response, next: NextFunction) => {
  try {
    // db rank 가져오기
    const ranks = await db.Rank.findAll({
      order: [['ranking', 'ASC']],
      include: [
        {
          model: db.User,
          attributes: ['nickname'],
        },
      ],
    });

    res.status(200).send({message: '성공', data: {ranks}});
  } catch (e) {
    console.log(e);
    res.status(400).send({message: '실패'});
  }
};
