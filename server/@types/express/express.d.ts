import express from 'express';


export interface MyRequest extends express.Request {
    session: MySessionData;
  }