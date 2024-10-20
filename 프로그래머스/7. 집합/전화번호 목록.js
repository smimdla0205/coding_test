function solution(phone_book) {
    phone_book.sort();
    let phoneNum = '';

    for (let i = 0; i < phone_book.length; i++) {
        phoneNum = phone_book[i];
        for (let j = i + 1; j < phone_book.length; j++) {
            if (phoneNum === phone_book[j].substring(0, phoneNum.length)) {
                return false;
            } else if (phoneNum.length > 20) {
                return true;
            }
        }
    }
    return true;
}

function solution(phone_book) {
    phone_book.sort(); // 전화번호 리스트를 정렬합니다.

    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)) {
            return false;
        }
    }
    // sort 공부
    return true; // 접두어가 없는 경우 true를 반환합니다.
}
