function solution(record) {
    let user = {};
    let message = [];
    let result = [];
    record.forEach((data) => {
        const [action, uid, nickname] = data.split(' ');
        if (action === 'Enter') {
            user[uid] = nickname;
            message.push([uid, '님이 들어왔습니다.']);
        } else if (action === 'Leave') {
            message.push([uid, '님이 나갔습니다.']);
        } else if (action === 'Change') {
            user[uid] = nickname;
        }
    });

    for (let i = 0; i < message.length; i++) {
        result.push(`${user[message[i][0]]}${message[i][1]}`);
    }

    return result;
}

console.log(
    solution([
        'Enter uid1234 Muzi',
        'Enter uid4567 Prodo',
        'Leave uid1234',
        'Enter uid1234 Prodo',
        'Change uid4567 Ryan',
    ])
);
//["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
