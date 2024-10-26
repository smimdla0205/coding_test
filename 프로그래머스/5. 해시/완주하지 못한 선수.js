function solution(participant, completion) {
  const obj = {};
  for (const p of participant) {
    if (obj[p]) {
      obj[p] += 1;
    } else {
      obj[p] = 1;
    }
  }
  for (const c of completion) {
    obj[c] -= 1;
  }
  for (const key in obj) {
    if (obj[key] > 0) {
      return key;
    }
  }
}
function solution(participant, completion) {
  // 참가자와 완료자 목록 정렬
  participant.sort();
  completion.sort();

  // 참가자와 완료자를 비교
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i]; // 일치하지 않는 첫 번째 참가자가 누락된 참가자
    }
  }

  return participant[participant.length - 1]; // 모든 완료자가 일치한 경우 마지막 참가자가 누락됨
}
