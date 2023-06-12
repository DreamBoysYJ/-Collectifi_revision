import { MyRequest } from "../@types/express/express";
import  {Response, NextFunction} from 'express';
import { nft_infos } from "../data/nft_infos";
import db from "../models";

// 실제 nft_info 90장 카드 데이터 넣기
export const addNft_infos_get = async (req: MyRequest, res: Response, next: NextFunction) => {
    try {
      nft_infos.map(item => {
        const result = db.Nft_info.create({
          player: item.player,
          season: item.season,
          team: item.team,
          card_pack: item.card_pack,
          card_color: item.card_color,
          img_url: item.img_url,
          team_record: item.team_record,
          man_record: item.man_record,
        });
      });
    res.status(200).send({message : "Add 90 Nft_infos Success!"})
  
  
    } catch (e) {
      console.log();
      res.status(400).send({message: 'Add 90 Nft_infos  Fail!'});
    }
  }; 
  
  