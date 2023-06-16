import cron from 'node-cron';
import db from './models';

// 랭킹선정 함수
const setRank = async () => {
    try {
// 1. db rank에서 이전 랭커들 찾기
const prevRankers = await db.Rank.findAll();
// 2. db User에서 해당 랭커들의 user 필드 비워주기
console.log(prevRankers);
prevRankers.map((rank: any) => {
  const result = db.User.update({rank: 0}, {where: {id: rank.user_id}});
});
// 3. db Post들 중에서 likes가 가장 높은 post 3개 뽑아오기
const posts = await db.Post.findAll({
  order: [['likes', 'DESC']],
  limit: 3,
});
console.log(posts);
// 4. db rank 테이블 비우기
const empty = await db.Rank.destroy({
  where: {},
  truncate: true,
});

// 5. db rank 테이블에 posts 3개 삽입
posts.map((post: any, index: number) => {
  const result = db.Rank.create({
    post_id: post.id,
    user_id: post.user_id,
    likes: post.likes,
    ranking: index + 1,
  });
});

// 6. db user의 rank 테이블 업데이트
posts.map((post: any, index: number) => {
  const result = db.User.update({rank: index + 1}, {where: {id: post.user_id}});
});
console.log(`Updating Ranking is Completed.`)
    }catch (e) {
        console.log(`Error setRank : ${e}`)
    }
    
  };

  // 스케줄러 함수들 실행
export const schedulerTask = () => {
    try {
        cron.schedule('0 0 * * 1', setRank); // 매주 월요일 00:00에 실행

    } catch(e) {
        console.log(e);
    }
}

