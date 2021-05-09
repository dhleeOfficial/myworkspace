[JavaScript]
    - HTML, CSS와 함께 웹을 구성하는 요소 중 하나로 웹 브라우저에서 동작하는 유일한 프로그래밍 언어
    - 기본 문법은 C, Java와 유사하며 Self에서는 프로토타입 기반 상속, Scheme에서는 일급 함수 개념 차용
    - 개발자가 별도의 컴파일 작업을 수행하지 않는 Interpreter Language
        - 대부분의 모던 자바스크립트 엔진은 인터프리터와 컴파일러의 장점을 결합하여 비교적 처리 속도가 느린 인터프리터의 단점을 해결
    - 명령형, 함수형, 프로토타입 기반 객체지향 프로그래밍을 지원하는 멀티 패러다임 프로그래밍 언어
    - 구글의 V8 자바스크립트 엔진으로 빌드된 런타임 환경의 Node.js 등장!
        - 웹 브라우저를 벗어나 서버 사이드 애플리케이션 개발도 가능
        - 본래 브라우저에서 HTML, CSS와 함께 실행되었기 때문에 더 효율적인 자바스크립트 프로그래밍 가능
    - 브라우저의 핵심 기능은 사용자가 참조하고자 하는 웹페이지를 서버에 요청하고 응답을 받아 표시하는 것
    - 브라우저는 서버로부터 HTML, CSS, JavaScript, Image 파일 등을 응답받음
        - HTML, CSS 파일은 렌더링 엔진의 HTML 파서와 CSS 파서에 의해 파싱되어 DOM, CSSOM 트리로 변환되고 렌더 트리로 결합, 이를 기반으로 웹페이지 표시
    - 자바스크립트는 자바스크립트 엔진이 처리

    [Version]
        - ECMAScript?
            - 약어
                - ES
            - 자바스크립트를 이루는 코어스크립트 언어
            - 다양한 환경에서 운용될 수 있게 확장성을 갖고 있기 때문에 사용처가 웹으로 국한되어있지않다.
            - 버전에 따라 문법과 기능을 확장시킨다.
                - 버전 히스토리
                    - ES3 → ES5 → ES6(ES2015) → ES7(ES2016)
                - 버전 특징
                    - ES3
                        - 대중적으로 알고 있는 그냥 자바스크립트
                        - 함수 단위의 스코프, 호이스팅, 클로저, 프로토타입 등등
                        - 대부분의 브라우저에서 지원하며, IE8까지 크로스 브라우징을 지원하는 환경이라면 ES3을 쓰고 있는 것
                    - ES5
                        - 배열과 관련한 메소드 추가
                            - forEach, map, reduce, some, filter, every 등의 순환 메소드
                        - 객체과 관련한 메소드 추가
                            - 객체 생성, 수정, 복사
                                - Object.create(), Object.defineProperty(), Object.freeze(), Object.assign()
                            - Object.keys() 메소드를 이용하여 for..in문도 대체 가능
                            - setter, getter 추가
                        - strict 모드 추가
                        - bind() 메소드 추가
                            - this를 강제로 바인딩 시키는 메소드
                    - ES6
                        - ES2015, ES6 Harmony라고도 불린다.
                        - 추가 사항
                            - 변수 호이스팅을 없애주는 let, const
                            - 함수 단위의 스코프에서 블록 단위 스코프로 변경
                            - this를 동적으로 바인딩하지 않는 화살표 함수
                            - 모듈화 지원
                            - Callback hell을 탈출시키는 Promise
                            - default, rest 파라미터
                            - 비구조화 할당, Spread 연산자
                            - 템플릿 리터럴
                            - 클래스
                        - 추가 사항이 많아져 진입 장벽이 높아짐..?!
                            - 브라우저(특히 MS 계열)에서는 ES6를 지원해주지 않는 경우가 많아 바벨(babel)이라는 트랜스컴파일러를  사용한다.
                            - 바벨은 브라우저가 아닌 node.js 위에서 돌아간다.
                            - 모듈화를 위해 Webpack과 같은 모듈 번들러를 알아야한다.
                    - ES7(ES2016)
                        - 제곱 연산자(**) 등장
                        - Array.includes() 메소드
                            - 배열에 해당 요소가 존재하는지 확인
                    - ES8(ES2017)
                        - async, await 발표
                        - 객체의 심화된 메소드 등장
                            - Object.keys()에 대응되는 메소드인 Object.values()
                            - Object.keys()와 Object.values()를 합쳐놓은 Object.entries()
                            - Object.getOwnPropertyDescriptor의 복수 형태인 Object.getOwnPropertyDescriptors()
                        - 문자열 단순 편의 기능 추가
                            - String.padStart()
                                - 문자열 앞부분에 공백을 넣어 자리수를 맞춰줌
                            - String.padEnd()
                                - 문자열 뒷부분에 공백을 넣어 자리수를 맞춰줌
                        - 매개변수 마지막에 콤마를 붙이는 것을 허용함
    [Compilation]
        - Compilation 3 Steps
            - Tokenizing & Lexing
                - 코드를 의미있는 토큰으로 만드는 과정
                    - ex> let a = 2; -> let, a, =, 2, ;
            - Parsing
                - 문법 구조를 반영하여 중첩 원소를 갖는 트리 형태로 바꾸는 과정
                - AST라고 부름 ( Abstract Syntax Tree )
            - Code
                - AST를 실행 코드 ( 기계어 )로 바꾸는 과정 이후, 자바스크립트 엔진 실행
        - LHS & RHS Search
            - 대입 연산의 방향을 의미
                - LHS ( Left-Hand-Side ) & RHS ( Right-Hand-Side )
                - RHS 검색
                    - 변수가 대입 연산자의 오른쪽에 있을 때 수행
                    - 단순히 특정 변수의 값을 찾는 것
                - LHS 검색
                    - 변수가 대입 연산자 왼쪽에 있을 때 수행
                    - 값을 넣어야하므로 변수 컨테이너 자체를 찾는 것
                - ex>
                    function foo(a) { console.log(a); }

                    foo(2);

                    - foo(2)가 실행되면서 참조할 수 있는 foo 함수가 있는지 RHS 검색
                    - scope 내에 참조 가능한 foo가 있으므로 오류 없이 foo(2) 실행
                    - foo의 param인 a는 LHS 검색으로 foo(a = 2)와 같이 할당
                    - 참조할 수 있는 console 객체가 있는지 RHS 검색
                    - console은 global scope에 선언되어 있으므로 오류 없이 실행
                    - log(a)는 foo 함수 scope 내에서 a를 RHS 검색
                    - console.log의 param a는 console.log(a = 2) LHS로 할당

    [Variable and Scope]
        - Variable
            - var
                - ES5까지 변수를 선언하는 키워드
                - 특징
                    - Function level scope
                        - 함수의 코드 블럭만 스코프로 인정
                        - for 문의 변수 선언문에서 선언한 변수를 외부에서도 참조가 가능
                    - var 키워드 생략 허용
                    - 변수 중복 선언 허용
                    - 변수 호이스팅
                        - 변수를 선언하기 이전에 참조할 수 있음
                        - ex>
                            var v = 0;

                            {
                                var v = 1;
                                console.log(v);     // 1
                            }

                            console.log(v);     // 1
                - 전역 변수는 유효 범위가 넓기도 하며, 비순수 함수에 의해 의도하지 않게 변경될 수 있어 복잡성을 증가시킴
                    - 전역 변수의 최소한 사용을 위해
                        - 전역 변수 사용을 위한 전역 변수 객체를 하나 만들어 사용하자! ( 더글라스 크락포드의 제안 )
                        - IIFE ( 즉시 실행 함수 )를 사용하자!
                            - 즉시 실행되고 종료되기 때문에 전역 변수를 만들지 않음
                - 변수의 스코프는 좁을수록 좋음
            - let
                - Block level scope
                    - 모든 코드 블럭 내에서 선언된 변수는 블럭 내에서만 유효하며 외부에서는 참조할 수 없음
                - 변수 중복 선언 금지
                - 호이스팅
                    - 자바스크립트는 호이스팅을 허용하지만 let 키워드로 선언된 변수를 이전에 참조하면 ReferenceError가 발생
                - 전역 객체
                    - var 키워드로 선언된 전역 변수는 전역 객체의 프로퍼티가 됨
                    - let 키워드로 선언된 변수는 그렇지 않음
            - const
                - 상수값을 위해 사용
                - let은 재할당이 자유롭지만 const는 재할당이 금지된다.
                - 반드시 선언과 동시에 할당이 이루어져야 한다.
                - const와 객체
                    - const 변수의 타입이 객체인 경우, 객체에 대한 참조를 변경하지 못하나, 객체의 프로퍼티는 보호되지 않는다.
            - Implicit Global ( 암묵적 전역 )
                - 변수 키워드가 붙지 않은 변수를 할당하여도 에러가 나지 않음
                - ex>
                    var x = 10;

                    function foo() {
                        y = 20;

                        console.log(x + y);
                    }

                    foo();      // 30
                    
                    - 변수 y에 값을 할당하기 위해 스코프 체인을 통해 변수를 확인함
                    - y = 20을 window.y = 20으로 해석하여 프로퍼티를 동적으로 생성 ( 암묵적 전역 )
                    - y는 프로퍼티이므로 delete 연산자로 삭제가 가능하며, 변수 호이스팅이 발생하지 않는다.
        - Scope
            - 어느 범위까지 참조하는가? 변수와 파라미터의 접근성과 생존기간을 뜻한다.
            - 자바스크립트 유효범위의 특징
                - 함수 단위의 유효범위
                    - ex>

                        function scopeTest() {
                            var a = 0;

                            if (true) {
                                var b = 0;

                                for (var c = 0; c < 5; c++) { console.log('c = ' + c); }

                                console.log("c = " + c);
                            }

                            console.log("b = " + b);
                        }

                        scopeTest();        // c = 0, 1, 2, 3, 4, 5, b = 0

                        - a, b, c는 모두 같은 스코프를 가지게 된다.
                - 변수명 중복 허용
                - var 키워드의 생략
                - 렉시컬 특성