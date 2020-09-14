interface Vehicle {
  // 어떤 타입이든 쓸 수 있음
  name: string;
  year: number;
  broken: boolean;
  summary(): string; // string을 반환하는 summary 함수
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  // Reportable이 있으면 넘어감
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// 너무 길고, 함수를 만들 때마다 쓰기에 비효율적임
// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken? ${vehicle.broken}`);
// };

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
  console.log(vehicle.summary());
};
printVehicle(oldCivic);

// -------------

const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drinks); // 다른 내용을 담고 있지만, summary()를 갖고 있기 때문에 사용할 수 있음
