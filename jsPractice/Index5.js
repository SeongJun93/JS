// const 키워드
// const 키워드는 상수를 선언하기 위해 사용한다 하지만 반드시 상수만을 위해 사용하지는 않는다 const 키워드는 let 키워드와 대부분 동일
// 다른점을 중점으로 본다

// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야한다
const foo = 1; // 선언과 동시에 초기화 하지 않으면 오류가 일어난다

// 변수 호이스팅이 발생하지 않는것처럼 동작한다
console.log(foo); // 레퍼런스 에러
const foo = 1;
console.log(foo)// 1

console.log(foo) // 블록레벨 스코프를 가진다.
// var let 은 변수는 재할당이 자유로우나 const 키워드로 선언한 변수는 재할당이 금지 된다.
const foo = 1;
foo = 2 ; // 타입에러
// const 타입은 상수로 표현하는데 사용하기도 한다 원시값과 마찬가지

let preTaxPrice = 100;

let afterpreTaxPrice = preTaxPrice + (preTaxPrice * 0.1);
console.log(afterpreTaxPrice) // 110
// const 키워드로 선언된 변수에 원시 값을 할당한 경우 원시 값은 변경할 수 없는 값이고 const 키워드에 의해 재할당이
// 금지되므로 할당된 값을 변경할 수 있는 방법은 없다

// 세율을 의미하는 0.1 은 변경할 수 없는 상수로서 사용될 값이다.
// 변수 이름을 대뭄ㄴ자로 선언해 상수임을 명확히 나타낸다
const TAX_RATE = 0.1;
// 세전 가격
let preTaxPrice = 100;
// 세후 가격
let afterpreTaxPrice = preTaxPrice +(preTaxPrice*TAX_RATE);
console.log(afterpreTaxPrice); //110

// const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다
const person = {
    name:'Lee'
};

// 객체는 변경 가능한 값이다 따라서 재할당 없이 변경이 가능하다
person.name = 'Kim';
console.log(person);//name:"Kim"
// const 키워드는 재할당을 금지할 뿐 '불변'을 의미하지는 않는다

// 재할당이 필요한 경우 한정해 let 키워드를 사용한다 이때 변수의 스코프는 최대한 좁게 만든다
// 변경이 발생하지 않고 읽기 전용으로 사용하는(재할당이 필요 없는 상수)원시 값과 객체에는 const 키워드를 사용한다 const 키워드는
// 재할당을 금지하므로 var.let 키워드보다 안전한다.

// 프로퍼티 어트리뷰트
// 데이터 프로퍼티 : 키와 값으로 구성된 일반적인 프로파티다 지금까지 살펴본 모든 프로퍼티는 데이터 프로퍼티다.
// 접근자 프로퍼티 : 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프러퍼티다.

const person = {
    // 데이터 프로퍼티
    firstName:'seongjun',
    lastName:'jo',
    // fullName 은 접근자 함수로 구성된 접근자 프로퍼티다
    // getter 함수
    get fullName(){
        return `${this.firstName}${this.lastName}`
    },
    set fullName(name){
        // 배열 디스트럭처링 할당 
        [this.firstName,this.lastName]=name.split('');
    }
};

// 데이터 프로퍼티를 통한 프러포티 값의 참조
console.log(person.firstName+''+person.lastName); //seougjun jo
// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName 에 값을 저장하면 setter 함수가 호출된다.
person.fullName = "seongjun jo";
console.log(person) // {firstName:'seongjun', lastName:'jo'}
// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다
console.log(person.fullName);// seongjun jo

// 접근지 프러퍼티와 데이터 프로퍼티를 구분
// 일반객체의 __proto__ 는 접근자 프로퍼티다
Object.getOwnPropertyDescriptor(Object.prototype,'__proto__');
// 함수 객체의 prototype 은 데이터 프로퍼티다.
Object.getOwnPropertyDescriptor(function(){},'prototype');

// 생성자 하수애 의한 객체생성
// 빈 객체의 생성
const person = new Object();
// 프로퍼티 추가
person.name = 'Lee';
person.sayHello = function(){
    console.log('Hi! My Name is ' +this.name);
};

console.log(person); //{name:"Lee",sayHello:f}
person.sayHello(); // Hi! My name is Lee

// 생성자 함수
const circle = {
    radius:5,
    getDiameter(){
        return 2 * this.radiusl
    }
};

console.log(circle.getDiameter())//10

const circle2 = {
    radius:10,
    getDiameter(){
        return 2 * this.radius;
    }
};
console.log(circle2.getDiameter()); //20

// 생성자 함수의 인스턴스 생성과정
// 생성자 함수의 역할은 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 탬플릿 으로서 동작하여 인스턴스를 생성 하는 것과 생성된
// 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기화 할당)
// 생성자 함수

function Circle(radius){
    // 인스턴스 초기화
    this.radius=radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
};
// 인스턴스 생성
const circle = new Circle(5); //반지름이 5인 Circle 객체를 생성

function Circle(radius){
    console.log(this); // Circle{}
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}

// 일급객체
// 다음 조건을 만족하면 일급객체라 한다
// 무명의 리터럴로 생성할수 있다 즉 런타임 생성이 가능하다
// 변수나 자료구조에 저장할수 있다
// 함수의 매개변수에 전달할수 있다
// 함수의 반환값으로 사용할 수 있다
// 자바스크립트의 함수는 다음 예제와 같이 위의 조건을 모두 만족하므로 일급객체다

// 1함수는 무명의 리터럴로 생성할 수 있다
// 2 함수는 변수에 저장할 수 있다
// 런타임에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다
const increase = function (num){
    return ++num
};
const decrease = function (num){
    return --num
}

// 2함수는 객체에 저장할 수 있다.
const predicates = {increase,decrease};
// 함수의 매개변수에 전달할 수 있다
// 4 함수의 반환값으로 사용할 수 있다.
function makeCounter(predicates){
    let num = 0;
    return function(){
        num=predicates(num);
        return num;
    };
}

// 함수는 매개변수에게 함수를 전달할 수 있다
const increaseer = makeCounter(predicates.increase);
console.log(increase()); // 1
console.log(increase()); // 2

// 함수는 매개변수에게 함수를 전달할 수 있다
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser())//-1
console.log(decreaser())//-2

// 함수 객체의 프러퍼티
function sqaure(number){
    return number*number;
}
console.dir(sqaure)

// 함수 아규먼트 프러퍼티
function multiply(x,y){
    console.log(arguments);
    return x+y;
}
console.log(multiply()); //NaN
console.log(multiply(1)); //NaN
console.log(multiply(1,2)); // 2
console.log(multiply(1,2,3)); // 2
// argument 객체는 배열 형태로 인자 정보를 담고 있지만 살제 배열이 아닌 유사 배열 객체다 유사 배열 객체란
// 랭스 프로퍼티를 가진 객체로 for 문으로 순회할 수 있는 객체를 말한다.

// 프로토타입
// 자바스크립트는 객체 기반의 프로그래밍 언어이며 자바스크립트를 이루고 있는 거의 모든것 이 객체다
// 원시타입을 제외한 나머지 값들 등 은 모두 객체다
// 객체지향 프로그래밍 
// 객체지햐우 프로그래밍은 실세계의ㅜ 실체를 인식하는 철학적 사고를 프로그래밍에 접목하려는 시도에서 시작한다 실체는 특징이나 성질을
// 나타내는 속성을 가지고 있고 이를 통해 실체를 인식하거나 구별할 수 있다
// 다양항 속성중에서 프로그램에 필요한 속성만 간추려 내어 표현하는 것을 추상화 라 한다
// 이름과 주소 속성을 갖는 객체
const person = {
    name:'Lee',
    address:"seoul",
}
console.log(person)//{name:'Lee'.address:'seoul'}
// 이처럼 객체지향 프로그래밍은 객체의 상태를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작을 하나의 논리적인 단위로 묶어 생각한다
// 따라서 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶음 복합적인 자료구조 라고 할수 있다 이때 객체의 상태 데이터를 프로퍼티 동작을 메서드라 부른디
