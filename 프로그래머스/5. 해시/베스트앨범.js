function sortKeysByValues(obj) {
  const entries = Object.entries(obj);
  entries.sort((a, b) => b[1] - a[1]);
  const sortedKeys = entries.map((entry) => entry[0]);

  return sortedKeys;
}

function solution(genres, plays) {
  let list = {};
  let listSum = {};
  let result = [];
  let answer = [];

  // 장르별로 곡 번호와 재생 횟수 저장
  for (let i = 0; i < genres.length; i++) {
    if (!list[genres[i]]) {
      list[genres[i]] = [];
    }
    list[genres[i]].push({ id: i, plays: plays[i] });
  }

  // 장르별로 재생 횟수를 기준으로 내림차순 정렬, 같은 재생 횟수면 고유 번호 기준 오름차순
  for (let key in list) {
    list[key].sort((a, b) => {
      if (b.plays === a.plays) {
        return a.id - b.id; // 재생 횟수가 같으면 고유 번호가 작은 순서로
      }
      return b.plays - a.plays; // 재생 횟수 순서대로 정렬
    });
    listSum[key] = list[key].reduce((acc, cur) => acc + cur.plays, 0); // 장르별 총 재생 횟수 계산
  }

  // 장르별 총 재생 횟수 기준으로 장르 정렬
  const genreOrder = sortKeysByValues(listSum);

  // 장르별로 최대 2개의 곡을 결과에 추가
  for (let j = 0; j < genreOrder.length; j++) {
    const songs = list[genreOrder[j]];
    result.push(songs[0].id); // 가장 많이 재생된 곡
    if (songs.length > 1) {
      result.push(songs[1].id); // 두 번째로 많이 재생된 곡 (있을 경우)
    }
  }

  return result;
}
