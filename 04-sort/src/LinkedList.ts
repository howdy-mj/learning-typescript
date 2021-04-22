class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList {
  // 처음 노드가 비어있을 수 있어서
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      // head가 없다면 이 data를 head로 지정
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      // next가 존재한다면, 이를 tail에 저장
      tail = tail.next;
    }
    // 마지막을 node로 저장
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      // 다음 것이 있을 때 까지,
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
