class Queue {
  items = [];
  front = 0;
  rear = 0;
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items[this.front++];
  }
  isEmpty() {
    return this.front === this.rear;
  }
}
const queue = new Queue();
// 큐에 아이템 추가
queue.push(1);
queue.push(2);
queue.push(3);

// 큐에서 아이템 꺼내기
console.log(queue.pop()); // 출력: 1
console.log(queue.items); // 출력: 2

// 큐가 비었는지 확인
console.log(queue.isEmpty()); // 출력: false

// 큐에서 마지막 아이템 꺼내기
console.log(queue.pop()); // 출력: 3

// 큐가 비었는지 확인
console.log(queue.isEmpty()); // 출력: true

// 큐가 비어있을 때 pop 시도
console.log(queue.pop()); // 출력: "Queue is empty"
