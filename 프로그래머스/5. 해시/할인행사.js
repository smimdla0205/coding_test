function shop(array) {
  let shop = {};
  for (let i = 0; i < array.length; i++) {
    if (shop[array[i]]) {
      shop[array[i]] += 1;
    } else {
      shop[array[i]] = 1;
    }
  }
  return shop; // 객체 반환
}

function solution(want, number, discount) {
  let shopping = {};
  let answer = 0;

  // 원하는 물품과 그 수량을 저장
  for (let i = 0; i < want.length; i++) {
    shopping[want[i]] = number[i];
  }

  // 10일씩 할인 목록을 확인
  for (let j = 0; j <= discount.length - 10; j++) {
    let discountList = shop(discount.slice(j, j + 10)); // 10일 분량 추출 후 카운트

    // 모든 원하는 아이템이 일치하는지 확인
    let isMatch = true;
    for (let key in shopping) {
      if (!discountList[key] || shopping[key] !== discountList[key]) {
        isMatch = false;
        break;
      }
    }

    // 일치하면 answer 증가
    if (isMatch) {
      answer++;
    }
  }

  return answer;
}
console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
// 결과: 0
