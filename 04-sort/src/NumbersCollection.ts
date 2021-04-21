export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex]; // 왼쪽
    this.data[leftIndex] = this.data[rightIndex]; // 자리 바꾸기
    this.data[rightIndex] = leftHand;
  }
}
