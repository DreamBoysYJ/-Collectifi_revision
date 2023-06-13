import { MyRequest } from "../@types/express/express";
import  {Response, NextFunction} from 'express';
import { nft_infos } from "../data/nft_infos";
import db from "../models";
import { sendResponse } from "../utils/responseUtils";

// 리팩토링 부분 테스트용
export const test_get = async (req: MyRequest, res: Response, next: NextFunction) => {
    try {

    sendResponse(res,200,"hi",{hi : "sc", dhi: "djfi"})
  
  
    } catch (e) {
      console.log(e);
    sendResponse(res,500,"server error", {server : "error"})
    }
  }; 
  
  