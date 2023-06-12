import express from 'express';
import router from './routes';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import { schedulerTask } from './scheduler';
import { sessionMiddleware } from './middlewares/sessionMiddleware';
import { connectDataBase } from './db';

const app = express();

// DB 연결
connectDataBase();

// Middlewares
app.use(morgan('dev')); // 로그
app.use(express.static(path.join(__dirname, 'public'))); // 요청시 기본 경로 설정
app.use(express.json()); // json 파싱
app.use(express.urlencoded({extended: false})); // uri 파싱
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(sessionMiddleware);
app.use('/', router);

// 주기적으로 실행하는 스케쥴러 함수들
// 매주 월요일 00:00에 Ranking 업데이트
schedulerTask();

app.listen(8000, () => {
  console.log('server listening...');
});
