// 데이터 타입
/*
자바스크립트는 7개의 데이터 타입을 제공
원시타입 과 객체타입으로 분류
--원시타입
number : 숫자와 정수와 실수 구분없이 하나의 숫자 타입만 존재
String : 문자열
Boolean : 논리적 참 거짓
undifind : var 키워드로 선언된 뱐수에 암묵적으로 할당되는 값
null : 값이 없다는 것을 의도적으로 명시할때 사용하는 값
symbol : 추가된 7번째 타입
--객체타입
객체 함수 배열 등

숫자타입의 값과 문자열의 값은 다르다 1, '1' 은 다르다

숫자 타입 c 나 자바의 경우 int,long,float,double 등과 같은 다양한 숫자타입을 제공하지만 자바스크립트는 하나의 숫자타입만 존재한다
모든 수를 실수로만 처리하며, 정수로 표현하기 위한 데이터 타입이 별도로 존재하지 않음
*/

var integer = 10; //정수
var double = 10.12; //실수
var negative = -20; // 음의 정수

// 모두 10진수로 해석된다.

var binary = ob01000001; // 2진수
var octal = 0o101;       // 8진수
var hex = 0x41;          // 16진수

console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65
console.log(binary === octal); // ture
console.log(octal===hex); // ture

// 자바스크립트의 숫자 티입은 정수만을 위한 타입이 없고 모든 수를 실수로 처리한다고 했다, 이는 정수로 표시된다 해도 사실은
// 실수라는 것을 의미 따라서 정수로 표시되는 수끼리 나누더라도 실수가 나올수 없다

console.log(1 === 1.0) //true
console.log(4 / 2) //2
console.log(3 / 2) //1.5

// 숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
/*
 Infinity : 양의 무한대
 -Infinity : 음의 무한대
 NaN : 산술 연산 불가 (not - a - number)
*/

console.log(10/0); // infinity
console.log(10/-0); // -infinity
console.log(1*'String'); // infinity

// 자바스크립트 엔진은 대소문자 구별 다르게 작성하면 식별자로 구별한다

var string = hello; // ReferenceError : hello is not defind 
// 만약 따옴표로 문자열을 감싸지 않는다면 스페이스 와 같은 공백 문자도 포함시킬수 없다

/* 탬플릿 리터럴

탬플릿 리터럴 문자열 표현식 삽입 태그드 템플릿 등 편리한 문자열 처리기능을 제공, 템플릿 리터럴은 런터임에 일반 문자열로 전환한다
작은따옴표 큰따옴표 같은 일반적인 따옴표 대신 백틱(``)을사용 
*/

var template = `Template literal`;
console.log(template); // Template literal

// 멀티라인 문자열 
// 일반 문자열 내에서는 줄바꿈 이 허용되지 않는다

//var str = 'Hello
//world.'; SyntaxError : Invalid or unexpected token

// 따라서 일반 문자열 내에서 줄바꿈 등의 공백 을 표현하려면 백슬래시로 시작하는 이스케이프 시퀸스를 사용해야한다.

// 표현식 삽입

var first = 'ung-mo';
var last = 'Lee';

console.log('my name is' + first+` `+ last+`.`) // my name ius ungmo lee.

// 템플릿 리터럴 내에서는 표현식 삽입을 통해 간단히 문자열을 삽입할수 있다, 이를 통해 문자열 연산자보다 가독성 좋고 간편하게 문자열을 조합할수 있다.

