import {SessionData} from 'express-session';




export interface MySessionData extends SessionData {
  user?: User | null;
  loggedIn?: boolean;
  admin?: boolean;
}

