import session from "express-session";
import db from "../models";
import {Store} from 'express-session';
import SequelizeStoreConstructor from 'connect-session-sequelize';

interface SessionStore extends Store {
    sync: () => Promise<void>;
  }
  
  const SequelizeStore = SequelizeStoreConstructor(session.Store);
  


const sequelizeStore = new SequelizeStore({
    db: db.sequelize, // Your Sequelize instance
  }) as unknown as SessionStore;
  

export const sessionMiddleware = session({
    secret: 'Hello!',
    resave: false,
    saveUninitialized: false,
    store: sequelizeStore,
    rolling: false,
    cookie: {
      httpOnly: false,
      //   secure: true,
      //   sameSite: 'none',
      maxAge: 3600000,
    },
  })