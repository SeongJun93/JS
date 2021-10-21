// 객체 리터럴

// 객체란?
// 자바스크립트는 객체 기반의 프로그래밍 언어이면 자바스크립트를 구성하는 거의 '모든 것'이 객체다
// 원시 값을 제외한 나머지 값(함수.배열.정규식 등)은 모두가 객체다
// 원시타입의 값 즉 원시 값은 변경 불가능한 값 이지만 객체타입의 값 , 즉 객체는 변경 가능한 값 이다
// 객체는 0개 이상의 프로퍼티로 구성된 집합이며, 프로퍼티는 키와 값으로 구성된다.
var person = {
    name       : 'Lee', //프로퍼티
    age        :  20    //프로퍼티
//프로퍼티 키     프로퍼티 값
}

// 자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값이 될 수 있다 자바스크립트의 함수는 일급 객체이므로 값으로 취급할 수 있다
// 따라서 함수도 프로퍼티 값으로 사용할 수 있다. 프로퍼티 값이 함수일 경우. 일반 함수와 구분하기 위해 메서드라 부른다
// 자바스크립트는 프로토타입 기반 객체지향 언어로서 클래스 기반 객체지향 언어와는 달리 다양한 객체 생성 방법을 지원한다.
/*
 객체리터럴
 object 생성자 함수
 생성자 함수
 Object.create 메서드
 클래스 
*/

// 이러한 방법중에서 가장 일반적이고 간단한 방법은 객체 리터럴을 사용하는 방법이다. 5.2 절 "리터럴"에서 살펴보았듯이 리터럴은 사람이 이해할 수 있는
// 문자 또는 약속된 기호를 사용하여 값을 생성하는 표기법을 말한다 객체 리터럴은 객체를 생성하기 위한 표기법이다
// 객체 리터럴은 중괄호({}) 내에 0개 이상의 프로퍼티를 정의한다. 변수에 할당되는 시점에 자바스크립트엔진은 객체 리터럴을 해석해
// 객체를 생성한다

var person={
    name:'Lee',
    sayHello: function(){
        console.log(`Hello My name is ${this.name}`);;
    }
};

console.log(typeof person); //object
console.log(person); // {name:'Lee', sayHello:f}
// 만약 중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체가 생성된다

var empty={} // 빈 객체
console.log(typeof empty); //object

// 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.
var person = {
    // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
    name: 'Lee',
    // 프로퍼티 키는 age, 프로퍼티 값은 20
    age:20
}

// 프로퍼티를 나열할 때는 쉼표(,)로 구분한다 일반적으로 마지막 프로퍼티 뒤에는 쉼표를 사용하지 않으나 사용해도 좋다
// 프로퍼티 키와 프로퍼티 값으로 사용할 수 있는 값은 다음과 같다
// 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
// 프로퍼티 값 : 자바스크립트에서 사용할 수 있는 모든 값

// 프로퍼티 키는  프로퍼티 값에 접근할 수 있는 이름으로서 식별자 역할을 한다 하지만 반드시 식별자 네이밍 규칙을 따라야 하는 것은 아니다
// 단 식별자 네이밍 규칙을 준수하는 프로퍼티 키와 그렇지 않은 프로퍼티 키는 미묘한 차이가 있다
// 심벌 값도 프로퍼티 키로 사용할 수 있지만 일반적으로 문자열을 사용한다. 이때 프로퍼티 키는 문자열이므로 따옴표('...',"...")로 묶어야
// 한다 하지만 식별자 네이밍 규칙을 준수하는 이름 자바스크립트에서 사용 가능한 우효한 이름인 경우 따옴표를 생략할수 있다
// 식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용헤야 한다
// 식별자 네이밍 규칙을 따르지 않는 프로퍼티 키를 사용하면 번거로운 일이 발생한다
// 따라서 가급적 식별자 네이밍 규칙을 준수하는 프로퍼티 키를 사용할 것을 권장한다 

var person ={
    firstName:'Ung-mo', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'Last-name':'Lee' // 식뵬자 네이밍 규칙을 준수하지 않는 프로퍼티 키
};
console.log(person) // {firstName:'Ung-mo',last-name:'Lee'}
// 프로퍼티 키로 사용한 firstName 은 식별자 네이밍 규칙을 준수한다. 따라서 따옴표를 생략할 수 있다 하지만 Last-name 은 식별자
// 네이밍 규칙을 준수하지 않는다 따옴표 생략 불가능

// var person={
//     firstName:'Ung-mo',
//     last-name:'Lee' // syntaxerror 
// };

var object={}
var key = 'hello';
// 프로퍼티 키 동적 생성
obj[key]='world';
// 계산된 프로퍼티 이름
// var obj ={[key]:'world'};
console.log(obj) // {hello:'world'}
// 빈 문자열을 프로퍼티 키로 사용해도 에러가 발생하지 않는다 키로서의 의미를 갖지는 못하므로 권장하지 않는다

var foo={
    '':'' // 빈 문자열도 프로퍼티 키로 사용할수 있다
}
console.log(foo); // {"":""}

// 프로퍼티 키에 문자열이나 심벌 값 외의 값을 사용하면 암묵적 타입변환을 통해 문자열이 된다 예를 들어 프로퍼티 키로 
// 숫자 리터럴을 사용하면 따음표는 붙지 않지만 내부적으로는 문자열로 반환된다

var foo = {
    0:1,
    1:2,
    2:3
}
console.log(foo) // {0:1,1:2,2:3}
// var , function 과 같은 예약어를 프로퍼티 키로 사용햐도 에러가 발생하지 않는다 하지만 예상치 못한 에러가 발생할 여지가 있으므로 권장하지 않는다
var foo = {
    var:'',
    function:''
};
console.log(foo) // {var:'',function:''}
// 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓴다. 이때 에러가 발생하지 않는다는 점에 주의
var foo = {
    name:'Lee',
    name:'Kim'
}
console.log(foo) // {name:'Kim'}

// 메서드 
// 자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값으로 사용할 수 있다고 했다. 아직 살펴보지 않았지만 자바스크립트의 함수는 객체(일급객체)다
// 따라서 함수는 값으로 취급할 수 있기 때문에 프로퍼티 값으로 사용할 수 있다
// 프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드라 부른다 즉 메서드는 객체에 묶여 있는 함수를 의미한다

var circle = {
    radius:5, // < 프로퍼티

    // 원의 지름
    getDimeter: function(){ // 메서드
        return 2 * this.radius; // this는 circle을 가리킨다
    }
}
console.log(circle.getDimeter); // 10
// 메서드 내부에서 사용한 this 키워드는 객체 자신(위에 circle) 을 가리키는 참조변수다

// 프로퍼티에 접근하는 방법은 다음과 같이 두 가지다
// 마침표 프로퍼티 접근 연산자(.) 를 사용하는 마침표 표기법
// 대괄호 프로퍼티 접근 연산자([...]) 를 사용하는 대괄호 표기법

// 프로퍼티 키가 식별자 네이밍 규칙을 준수하는 이름, 즉 자바스크립트에서 사용 가능한 유효한 이름이면 마침표 표기법과 대괄호 표기법을
// 모두 사용할수 있다

var person = {
    name:'Lee'
}
console.log(person.name); //Lee
console.log(person['name']); //Lee
// 대괄호 표기법을 사용하는 경우 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 한다
// 대괄호 프로퍼티 접근 연산자 내에 따옴표로 감싸지 않은 이름을 프로퍼티 키로 사용하면 자바스크립 엔진은 식별자로 해석한다

var person = {
    name:'Lee'
}
console.log(person[name])// ReferenceError: name is not defined
// 위 예제에서 ReferenceError: name is not defined가 발생한 이유는 대괄호 연산자 내의 따옴표로 감싸지 않은 이름,
// 즉 식별자 name 을 평가하기 위해 선언된 name 을 찾았지만 찾지 못해서이다
// 객체가 존재하지 않는 프로퍼티에 접근하면 undefined 를 반환다 이때 ReferenceError가 나오지 않는대 주의하자

var person = {
    name:'Lee'
}
console.log(person.age) //undefind

// 프로퍼티 값 갱신

var person = {
    name:'Lee'
};

person.name='Kim';
console.log(person); // {name:'Kim'}

// 프로퍼티 동적 생성
// 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당된다
var person={
    name:'Lee'
}

// person 객체에는 age 프로퍼티가 존재하지 않는다
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다
person.age=20;
console.log(person)// {name:Lee, age:20}

// 프로퍼티 삭제
// delete 연산자는 객체의 프로퍼티를 삭제한다 이때 delete 연산자의 피연산자는 프로퍼티 값에 접근할 수 있는 표현식이어야 한다.
// 만약 존재하지 않는 프로퍼티를 삭제하면 아무런 에러 없이 무시된다

var person = {
    name:'Lee'
}
// 프로퍼티 동적 생성
person.age =20;
// person 객체에 age 프로퍼티가 존재한다
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다
delete person.age;
// person 객체에 address 프로퍼티가 존재하지 않는다.
// 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다 이때 에러가 발생하지 않는다
delete person.addressl

console.log(person); //{name:"Lee"}

// 추가된 객체 리터럴의 확장기능
// 프로퍼티 축약 표현
// 객체 리터럴의 프로퍼티는 프로퍼티 키와 프로퍼티 값으로 구성된다. 프로퍼티 값은 변수에 할당된 값 , 즉 식별자 표현식일 수도 있다
var x = 1, y = 2
var object = {
    x:x,
    y:y
}
console.log(obj)// {x:1,y:2}

// 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략 할 수 있다 이때 프로파티
// 키는 변수 이름으로 자동 생성된다.
let x = 1, y = 2;
// 프로퍼티 축약 표현
const ojb = {x,y}
console.log(obj); //{x:1,y:2}

// 계산된 프로퍼티 이름
// 문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성 할 수도 있다. 단. 프로퍼티 
// 키로 사용할 표현식을 대괄호([...])로 묶어야 한다. 이를 계산된 프로퍼티 이름이라 한다
// 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성하려면 객체 리터럴 외부에서 대괄호([...])표기법을 사용해야 한다

var prefix = 'prop';
var i = 0 ;
var obj = {};

// 계산된 프러퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
console.log(obj) // {prop-1:1,prop-2:2,prop-3:3}

// 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있다
const prefix = 'prop';
let i =0
// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
const obj = {
    [`${prefix}-${++i}`]:i,
    [`${prefix}-${++i}`]:i,
    [`${prefix}-${++i}`]:i,
}
console.log(obj); // {prop-1:1,prop-2:2,prop-3:3}

// 메서드의 축약 표현
// 메서드를 정의하려면 프로퍼티 값으로 함수를 할당한다.

var obj = {
    name:'Lee',
    sayHi:function(){
        console.log('Hi'+this.name)
    }    
}
obj.sayHi() // Hi! Lee

// 메서드를 정의할 때 function 키워드를 생략한 축약 표현을 사용할 수 있다
const obj = {
    name:'Lee',
    // 메서드의 축약 표현
    sayHi(){
        console.log('Hi'+this.name);
    }
}
obj.sayHi(); //Hi! Lee
// 메서드의 축약 표현으로 정의한 메서드는 프로퍼티에 할당한 함수와 다르게 동작한다