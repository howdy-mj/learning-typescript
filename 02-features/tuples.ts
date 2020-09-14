const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type alias
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
pepsi[0] = 40; // 잘못 쓸 경우 에러가 뜸
const sprite: Drink = ['clear', true, 30];

// 이것만으로는 어떤 것인지 유추하기 힘듦
const carSpecs: [number, number] = [400, 3353];
// 객체로 쓴다면 어떤 내용인지 알 수 있음
const carStats = {
  horsepower: 400,
  weight: 3353,
};
