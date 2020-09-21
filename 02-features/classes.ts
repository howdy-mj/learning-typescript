class Vehicle {
  constructor(public color: string) {
    // public을 쓰면서 초기화
  }
  // public drive(): void {
  //   console.log('something');
  // }

  protected honk(): void {
    // 외부가 아닌 자식에서만 불러올 수 있음
    console.log('honk');
  }
}

const vehicle = new Vehicle('green');
// vehicle.drive();
// vehicle.honk();
console.log(vehicle.color);
// ts-node classes.ts

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    // color는 재할당하기 싫어서 그냥 씀
    super(color);
  }

  // private은 오직 안에서만 불러올 수 있음
  // 기존의 Vehicle 클래스에서 overwriting하고 있기 때문에 에러가 뜨는 것
  private drive(): void {
    // 주로 다른 개발자들이 불러오는 실수를 없애기 위해 private 사용
    console.log('car drive');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
// car.drive();
car.startDrivingProcess();
