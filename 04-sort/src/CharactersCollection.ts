export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    // 대문자가 소문자보다 숫자가 작기 때문에 모두 소문자로 바꿔줘야 함
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');

    const leftHand = characters[leftIndex]; // 왼쪽
    characters[leftIndex] = characters[rightIndex]; // 자리 바꾸기
    characters[rightIndex] = leftHand;

    this.data = characters.join('');
  }
}
