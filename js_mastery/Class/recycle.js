// 모든 객체가 동일하게 참조해야 하는 프로퍼티, 메소드가 있다면?
// class 레벨의 프로퍼티와 메소드를 사용하면 된다. static
// 만들어진 인스턴스에 포함되지 않고, class에서 단 한 번만 정의되고 재사용된다.
// 호출할 때에도 className.classMethod 형태로

// static 정적 프로퍼티, 메소드 학습
// static 이 없으면 instance 에 포함되기 때문에 className.property로 접근 불가

class Fruit {
  static MAX_FRUITS = 4;

  constructor(name, color) {
    this.name = name;
    this.emoji = color;
  }

  // instance level method
  display = () => {
    console.log(`${this.name} is ${this.emoji}`);
  };

  // class level method
  static makeRandomFruit() {
    return new Fruit('banana', 'yellow');
  }

  // 이 메소드를 통해 인스턴스를 리턴할 수 있다.
  // static 메소드(class level)에서는 값이 채워져 있지 않다.
  // 그래서 this 참조가 불가능하다. 왜? 내용이 아직 없잖아.
}

const BANANA = Fruit.makeRandomFruit();
console.log(BANANA);
console.log(Fruit.MAX_FRUITS);

const APPLE = new Fruit('apple', 'red');
console.log(APPLE);
APPLE.display();

///

Math.pow(); // built-in object
