const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  // return을 쓰지 않아서 void, 아무것도 반환하지 않음
  a - b;
  // 따라서 함수에 number라는 것을 알려주어, return 값이 있는지 확인하는 것이 좋음
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // void는 아무것도 반환하지 않는 것
};

const throwError = (message: string): void => {
  // never는 절대 이 함수를 실행하지 않음
  throw new Error(message);
  // 어떤 것이 있을수도 없을 수도 있으니 void
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather)
// };

// 비구조화
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
