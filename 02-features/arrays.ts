const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['ford'], ['toyota'], ['chevy']];

// TypeScript with Array 특징
// Help with inference when extracting values
const car = carMakers[0]; // 자동으로 string인걸 앎
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100); // 숫자를 넣으면 에러가 남

// Help with 'map'
carMakers.map((car: string): string => {
  return car; // .을 찍으면 string으로 인식하고 자동으로 메소드가 나옴
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2020-10-10');
importantDates.push(new Date());
importantDates.push(100); // 숫자나 날짜가 아니기에 에러가 뜸
