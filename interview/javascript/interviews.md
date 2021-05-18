# Event Bubbling / Event Capturing
    - 이벤트 버블링
        - 한 요소에 이벤트가 발생하면 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작한다.
        - 가장 최상단의 요소를 만날 때까지 이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작하는 것
        - 거의 모든 이벤트는 버블링 되지만, 버블링이 되지 않는 이벤트도 존재
            - focus
        - event.target
            - 부모 요소의 핸들러는 이벤트가 정확히 어디서 발생했는지 등에 대한 자세한 정보를 얻을 수 있음
            - 이벤트가 발생한 가장 안쪽의 요소를 target이라 불리며, event.target를 접근하여 가져올 수 있음
            - event.currentTarget과 차이
                - event.target은 실제 이벤트가 시작된 요소 ( 버블링이 진행되어도 변하지 않는다. )
                - event.currentTarget은 "현재" 요소로서 현재 실행 중인 핸들러가 할당된 요소의 참조값
        - 버블링 중단하기
            - 이벤트 버블링은 타겟에서 시작해 <html> 요소를 거쳐 document 객체를 만날 때까지 각 노드에서 모두 발생
                - 몇몇 이벤트는 window 객체까지 거슬러 올라가기도 함
            - 핸들러에게 이벤트를 완전히 처리하고 난 후 버블링을 중단하도록 명령할 수 있음
                - event.stopPropagation() 함수를 사용하자
    - 이벤트 캡처링
        - 실제 코드에서 자주 쓰이진 않지만, 종종 유용한 경우가 있다.
        - 표준 DOM 이벤트에서 정의한 이벤트 흐름에는 3가지 단계가 존재
            - 1. 캡처링 단계 - 이벤트가 하위 요소로 전파되는 단계
            - 2. 타겟 단계 - 이벤트가 실제 타겟 요소에 전달되는 단계
            - 3. 버블링 단계 - 이벤트가 상위 요소로 전파되는 단계
            - 이 과정을 통해 요소에 할당된 이벤트 핸들러가 호출된다!
        - 캡처링 단계에서 이벤트를 잡아내려면? addEventListener의 capture 옵션을 true로 설정하면 된다!
            - elem.addEventListener(..., { capture: true });
            - elem.addEventListener(..., true);

# 브라우저의 기본 동작
    - 상당수의 이벤트는 발생 즉시 브라우저에 의해 특정 동작을 자동으로 수행합니다.
        - 링크를 클릭하면 해당 URL로 이동
        - 폼 전송 버튼을 클릭하면 서버에 폼이 전송
        - 마우스 버튼을 누른 채로 글자 위에서 커서를 움직이면 글자가 선택
    - 어떤 경우에는 이런 브라우저 기본 동작 대신에 자바스크립트를 이용해 직접 동작을 구현해야하는 경우가 있음
    - 브라우저 기본 동작을 취소할 수 있는 방법
        - event 객체에 구현된 event.preventDefault() 메서드 사용
        - 핸들러가 addEventListener가 아닌 on<event>를 사용해 할당되었다면 false를 반환하게 하여 기본 동작을 막을 수 있다.
    - ex> 메뉴를 만들어보자!
        - 메뉴를 만들때, <a> 태그가 아닌 <button>이나 <span> 태그로 만들면 마우스 오른쪽 클릭으로 새 창에서 열기를 할 수 없다!
        - menu.onClick = function(event) {
            let href = event.target.getAttribute('href');

            alert(href);
            return false;       // 브라우저의 동작을 취소!
        }

# Event Delegation
    - 특정 요소 하나하나를 개별적으로 이벤트를 부여하는 것이 아니라, 하나의 부모에 이벤트를 등록하여 부모가 이벤트를 위임하는 방식
    - 이 방법은 동적인 요소들에 대한 처리가 수월하며 이벤트 핸들러를 더 적거ㅔ 등록해주기 때문에 메모리도 절약됨

# Execute context
    - 코드가 실행되고 있는 구역, 범위에 대한 개념
    - 실행 컨텍스트 타입
        - 전역 실행 컨텍스트
            - 가장 베이스가 되는 실행 구역
            - 특정 함수 안에서 실행되는 코드가 아니라면 코드는 전역 컨텍스트에서 실행된다.
            - window Object인 전역 컨텍스트를 생성하고, this를 global Object로 할당한다.
        - 함수 실행 컨텍스트
            - 함수가 호출될 때마다 해당 함수에 대한 실행 컨텍스트가 생성된다.
            - 각각의 함수들은 자신만의 실행 컨텍스트를 가지지만 실행 컨텍스트는 함수가 호출이 되어야 만들어짐
        - Eval 함수 실행 컨텍스트
            - eval 함수 또한 자신만의 실행 컨텍스트를 가진다.
            - 하지만 eval은 자바스크립트 개발자가 많이 사용하지 않는 개념이다.
    - Execution Stack( 호출 스택 )과 함수 실행 순서
        - 다른 프로그래밍 언어에서 불리는 호출 스택과 Execution Stack은 같은 말
        - 스택은 LIFO 자료 구조로 코드가 실행하면서 만드는 실행 컨텍스트들이 저장되는 구조
        - 자바스크립트 엔진은 script 태그를 처음 만나면 전역 컨텍스트를 만들고, 현재 실행되고 있는 호출 스택에 push함
        - 다른 함수가 호출되면 해당 함수에 대한 실행 컨텍스트를 생성하고 스택에 push함
        - 자바스크립트 엔진은 실행 컨텍스트가 호출 스택에서 가장 위에 있는 함수를 실행하며, 함수가 할 일을 마치면 스택에서 제거된다.
    - 자바스크립트 엔진이 실행 컨텍스트를 만드는 과정
        - 1. Creation phase
            - 1. Lexical environment 컴포넌트 생성
                - identifier-variable mapping 되는 곳
                - 참조 대상 식별자인 identifier는 함수와 변수의 이름과 같이 어떤 대상을 다른 대상과 구분하여 식별할 수 있는 유일한 이름
                - 자바스크립트는 이 규칙대로 식별자를 찾음
                - 즉! Lexical environment에서는 변수와 해당 변수에 대입된 값이 매핑되는 곳이라 할 수 있으며 매핑만 된다!!
                - ex>
                    var a = 20;
                    var b = 20;

                    function foo() { console.log('foo'); }

                    lexicalEnviroment = {
                        a: 20,
                        b: 40,
                        foo: <ref. to foo function>
                    }
                - Lexical environment가 하는 일
                    - 1. Environment Records
                        - 함수와 변수를 기록한다.
                        - Declarative enviromnent record
                            - 변수와 함수 선언을 저장하는 곳
                        - Object environment record
                            - 전역 코드에 대한 Lexical environment는 objective environment records를 포함
                            - 변수와 함수의 선언과 다르게 object environment record는 글로벌 오브젝트로 기록
                            - 각각의 객체의 속성을 바인딩하기 위해서 record에 새로운 엔트리가 형성됨
                    - 2. Reference to the outer environment
                        - 외부 환경으로의 참조값의 의미는 외부 lexical 환경으로 접근할 수 있다는 의미
                        - 자바스크립트 엔진이 현재의 lexical environment에서 변수를 찾기 못했다면 외부 환경에서 해당 변수를 찾아볼 수 있다는 의미
                    - 3. This binding
                        - this의 값이 여기서 결정됨
                        - 글로벌 실행 컨텍스트에서는 this는 글로벌 오브젝트이다.
                        - 함수 실행 컨텍스트에서 this 값은 어떻게 함수가 호출되었는지에 따라 달라진다.
                        - 만약 함수가 object reference로 호출되었다면 this는 해당 객체를 가리키게됨
                        - 그렇지 않으면 this는 글로벌 객체(window)를 가리키거나 strict mode에서는 undefined를 가리키고 있다.
            - 2. Variable environment 컴포넌트 생성
                - Lexical environment와 함수, 변수 식별자가 바인딩되는 점을 포함해 동일히다.
                - Variable environment는 결국 Lexical environment이다.
                - ES6에서 Lexical environment와 Variable environment 둘의 차이점은 전자가 함수 선언과 변수의 바인딩을 저장하고 후자는 변수만 저장한다.
            - 정리
                - Creation phase에서는..
                    - scope chain, 변수, 함수, 인자들을 만든다.
                    - this를 결정한다.
                    - 자바스크립트 엔진의 syntax parser가 코드를 읽으면서 컴퓨터가 알아들을 수 있는 언어로 변환
                    - 자바스크립트 엔진은 코드를 읽으면서 변수와 함수의 선언된 것을 찾고 메모리에 해당 변수와 함수를 저장한다. ( 호이스팅 )
        - 2. Execution phase
            - 드디어 자바스크립트 엔진이 한줄 한줄 위에서부터 코드를 읽으면서 코드를 실행할 차례
            - 이 단계에서 가장 중요한 것은 선언했던 변수들에 값이 할당된다는 것
            - ex> 아래 코드로 실행 컨텍스트의 과정을 이해하자!
                let a = 20;
                const b = 30;
                var c;

                function multiply(e, f) {
                    var g = 20;

                    return e * f * g;
                }

                c = multiply(20, 30);

                - 1. 자바스크립트 엔진은 script를 만나면 전역 컨텍스트를 만든다.
                    - 전역 변수 a, b, multiply는 LexcialEnvironment
                    - c는 VariableEnvironment에 이름과 값으로 매핑된다.
                - 2. 전역 컨텍스트의 Execution Phase에서 코드가 실행되고 각각의 변수에 값이 할당된다.
                - 3. multiply() 함수가 호출되는 순간 multiply() 함수의 실행컨텍스트가 만들어진다. 외부 환경으로는 전역 컨텍스트를 참고하고 있고, object reference로 호출되지 않았기 때문에 여전히 this는 글로벌 오브젝트이다.
                - 4. multiply 함수가 값을 리턴하면서 호출 스택에서 빠진다. 전역 컨텍스트에 있던 전역 변수 c에 값이 업데이트되며, 그 후, 글로벌 코드가 끝나면 프로그램도 종료된다.
    - 정리
        - let과 const는 컨텍스트가 만들어질때 ( creation phase ) 어떤 값도 가지고 있지 않다. 하지만 var은 undefined를 가지고 있다.
            - 그 이유는 실행 컨텍스트가 만들어지는 동안, 코드는 변수와 함수 선언을 위해 스캔된다.
            - 이 때 함수의 선언은 environment에 함수 전체가 저장되지만, 변수들은 기본값으로 undefined나 아직 초기화되지 않은 상태로 저장된다. ( 호이스팅 개념 )
            - 이 때문에 var 변수가 선언되기 전에 undefined라는 값으로 접근할 수 있는 것이고, let과 const는 선언하기 전에 접근하면 reference error를 얻게 되는 것이다.
            - execution phase 동안 자바스크립트 엔진이 소스코드에서 let 변수의 값이 선언된 곳을 찾지 못하면 undefined를 할당한다.
# this
    - 자바스크립트에서의 this는 함수 호출 방식에 따라 바인딩되는 객체가 동적으로 결정
    - 자바스크립트는 함수 호출 시, 매개변수로 전달되는 인자값 이외에 arguments 객체와 this를 암묵적으로 전달받는다.
    - 상황별 this 바인딩
        - 단독으로 쓴 this
            - global object를 가리킴
            - 브라우저의 경우 window object ( ES5에서 추가된 strict mode에서도 마찬가지 )
        - 함수 안에서 쓴 this
            - 함수 안에서 this는 함수의 주인에게 바인딩됨
            - 함수의 주인 역시 global object
            - ex>
                var num = 0;
                function addNum() {
                    this.num = 100;
                    num++;

                    console.log(num);                   // 101
                    console.log(window.num);            // 101
                    console.log(num === window.num)     // true
                }

                addNum();

            - 하지만 strict mode에서는 함수 내의 this에 디폴트 바인딩이 없기 때문에 undefined이다.
        - 메서드 안에서 쓴 this
            - 메서드 호출 시, 메서드 내부 코드에서 사용된 this는 해당 메서드를 호출한 객체로 바인딩됨
            - ex>
                var num = 0;

                function showNum() { console.log(this.num); }

                showNum();      // 0

                var obj = { num: 200, func: showNum };

                obj.func();     // 200

        - 이벤트 핸들러 안에서 쓴 this
            - 이벤트 핸들러에서 this는 이벤트를 받는 HTML 요소를 가리킴
            - ex>
                var btn = document.querySelector('#btn');

                btn.addEventListener('click', function() {
                    console.log(this);      // #btn
                });
        - 생성자 안에서 쓴 this
            - 생성자 함수가 생성하는 객체로 this가 바인딩됨
            - ex>
                function Person(name) {
                    this.name = name;
                }

                var kim = new Person('kim');
                var lee = new Person('lee');

                console.log(kim.name);      // kim
                console.log(lee.name);      // lee
            - 하지만, new 키워드를 빼먹는 순간 일반 함수 호출과 같아지기 때문에 위의 경우, this는 window에 바인딩됨
        - 명시적 바인딩을 한 this
            - apply, call 메소드는 Function Object에 기본적으로 정의된 메소드
            - 인자를 this로 만들어주는 기능을 함
            - ex>
                function whoisThis() { console.log(this); }
                
                whoisThis();    // window

                var obj = { x: 123 };

                whoisThis().call(obj);  // { x: 123 }
        - 화살표 함수로 쓴 this
            - 전역 컨텍스트에서 실행되더라도 this를 새로 정의하지 않는다.
            - 바로 바깥 함수나 클래스의 this를 씀
        - 메소드의 내부함수에서의 this
            - ex>
                const obj1 = {
                    outer: function() {
                        console.log(this);          // (1)

                        const innerFunc = function () {
                            console.log(this);      // (2)(3)
                        };

                        innerFunc();

                        const obj2 = {
                            innerMethod: innerFunc
                        };

                        obj2.innerMethod();
                    }
                };

                obj1.outer();

                - 동작
                    - (1)에서 가장 먼저 호출되며 this가 obj1 reference로 바인딩되어 있음
                    - 그다음 innerFunc()가 호출되는데, this를 함수로서 호출한 것이므로 자동으로 스코프 체인상의 최상위 객체인 전역객체가 바인딩되어 출력됨
                    - 마지막 obj2.innerMethod()가 호출되면서 this가 출력되고, 이때 obj2로 바인딩되어 있음
            - this 바인딩에 관해서는 함수를 실행하는 당시의 주변 환경이 중요하지 않고, 오로지 해당 함수를 호출하는 구문 앞에 점 또는 대괄호 표시가 있는지 없는지가 관건!
            - 메서드 내부 함수에서 this를 우회하는 방법 ( ES5 )
                - ex>
                    const obj = {
                        outer: function() {
                            console.log(this);

                            const innerFunc1 = function() {
                                console.log(this);
                            };

                            innerFunc1();

                            const self = this;
                            const innerFunc2 = function() {
                                console.log(self);
                            };
                            innerFunc2();
                        }
                    };

                    obj.outer();

                    - 동작
                        - 위 코드에서 innerFunc1의 내부에서 this는 전역객체를 가리킴
                        - outer 스코프에서 self라는 변수에 this를 저장한 상태에서 호출하는 innerFunc2()는 객체 obj가 출력된다.
            - this를 바인딩하지 않는 함수
                - 화살표 함수는 실행 컨텍스트를 생성할 때 this 바인딩 자체가 빠지게 되어 상위 스코프 this를 그대로 활용할 수 있다.
# protoType
    - 자바스크립트는 클래스라는 개념이 없었다. ( ES6 이전 )
        - 기존의 객체를 복사하여 새로운 객체를 생성하는 프로토타입 기반의 언어임
            - 프로토타입 기반 언어는 객체 원형인 프로토타입을 이용하여 새로운 객체를 만들어냄
            - 이렇게 생성된 객체 역시 또 다른 객체의 원형이 될 수 있다.
    - 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거함 ( 기존의 코드를 재사용하므로서 )
    - 즉, 생성자 함수가 생성할 모든 인스턴스가 공통적으로 사용할 프로퍼티나 메소드를 프로토타입에 미리 구현해놓음으로서 또 구현하는 것이 아니라 상위 객체인 프로토타입의 자산을 공유하여 사용할 수 있음
    - __proto__ 접근자 프로퍼티로 자신의 프로토타입, 즉 Prototype 내부 슬롯에 접근할 수 있음
    - 프로토타입 체인?
        - 객체의 프로퍼티에 접근하려고 할 때, 객체에 접근하려는 프로퍼티가 없으면 __proto__ 접근자 프로퍼티가 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색
        - 프로타입 체인의 최상위 객체는 Object.prototype이다.
            - Object.prototype의 프로퍼티와 메소드는 모든 객체에 상속된다.
        - prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.
    - 프로토타입의 이해
        - 자바스크립트에 클래스는 없지만 함수와 new 키워드를 통해 클래스 비스무리하게 흉내낼 수 있다.
        - ex>
            function Person() {
                this.eyes = 2;
                this.nose = 1;
            }

            let kim = new Person();
            let park = new Person();

            console.log(kim.eyes, kim.nose);        // 2 1
            console.log(park.eyes, park.nose);      // 2 1

            - kim과 park은 eyes와 nose를 공통적으로 가지고 있는데, 메모리에는 eyes와 nose가 두 개씩 총 4개가 할당된다. ( 이 문제를 프로토타입으로 해결할 수 있다. )
            - ex>
                function Person {}

                Person.prototype.eyes = 2;
                Person.prototype.nose = 1;

                let kim = new Person();
                let park = new Person();
            
        - 자바스크립트에는 Prototype Link와 Prototype Object라는 것이 존재하며 이를 통틀어 Prototype이라고 부른다.
            - Prototype Object
                - 객체는 언제나 함수로 생성된다!
                    - ex>
                        function Person() {}    // 함수

                        var personObj = new Person();   // 함수로 객체를 생성
                    
                    - personObj 객체는 Person이라는 함수로 생성된 객체!
                    - 일반적으로 사용하는 객체 생성도 마찬가지이다!
                        - ex>
                            var obj = {};

                        - 이 코드는 사실 var obj = new Object(); 와 같다.
                - Object와 마찬가지로 Function, Array도 모두 함수로 정의되어 있다!
                - 함수가 정의될 때는 2가지 일이 동시에 이루어진다!
                    - 1. 해당 함수에 Constructor 자격 부여
                        - Constructor 자격이 부여되면 new를 통해 객체를 만들어낼 수 있다.
                        - 이것이 함수만 new 키워드를 사용할 수 있는 이유
                    - 2. 해당 함수의 Prototype Object 생성 및 연결
                        - 함수를 정의하면 함수만 생성되는 것이 아니라 Prototype Object도 같이 생성된다.
                        - 생성된 함수는 prototype 속성을 통해 Prototype Object에 접근할 수 있다.
                        - Prototype Object는 일반적인 객체와 같으며 기본적인 속성으로 constructor와 __proto__를 가지고 있음
                            - constructor는 Prototype Object와 같이 생성되었던 함수를 가리키고 있음
                            - __proto__는 Prototype Link
                        - Prototype Object는 일반적인 객체이므로 속성을 마음대로 추가 / 삭제할 수 있다.
                            - kim과 park은 Person 함수를 통해 생성되었으니 Person.prototype을 참조할 수 있게됨
            - Prototype Link
                - kim에는 eyes 속성이 없는데도 kim.eyes를 실행하면 2라는 값을 참조한다. ( Prototype Object의 eyes를 참조한 것 )
                - __proto__ 프로퍼티가 이를 가능케함
                    - prototype 속성은 함수만 가지고 있던 것과 달리 __proto__ 속성은 모든 객체가 빠짐없이 가지고 있는 속성
                    - __proto__는 객체가 생성될 때 조상이었던 함수의 Prototype Object를 가리킴
                        - kim 객체는 Person 함수로부터 생성되었으니 Person 함수의 Prototype Object를 가리키는 것
                - kim 객체가 eyes를 직접 가지고 있지 않기 때문에 eyes 속성을 찾을 때까지 상위 프로토타입을 탐색한다.
                - 최상위인 Object의 Prototype Object까지 도달했는데도 못 찾았을 경우 undefined를 리턴함
                - 이렇게 __proto__ 속성을 통해 상위 프로토타입과 연결되어 있는 형태를 프로토타입 체인이라고 함
                    - 이런 프로토타입 체인 구조 때문에 모든 객체는 Object의 자식이라고 불리고, Object Prototype Object에 있는 모든 속성을 사용할 수 있다. ( ex. toString )

                        
# hoisting

# closure
    - 함수와 그 함수가 선언된 렉시컬 환경의 조합
    - 반환된 내부 함수가 자신이 선언되었을 때의 환경인 스코프를 기억하여 자신이 선언되었을때의 환경 밖에서 호출되어도 그 환경에 접근할 수 있는 함수 ( 자신이 생성될 때의 환경을 기억하는 함수 )
    - 사용하는 이유
        - 현재 상태를 기억하고 변경된 최신 상태를 유지하기 위해
        - 전역 변수의 사용을 억제하기 위해
        - 정보를 은닉하기 위해

# callback / promise / async & await

# XMLHttpRequest
    - 브라우저는 이 객체를 이용하여 AJAX 요청을 생성하고 전송
    - 서버가 브라우저의 요청에 대해 응답을 반환하면 같은 객체가 그 결과를 처리함
    - ex>
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200 || xhr.status === 201) {
                    console.log(xhr.responseText);
                } else {
                    console.error(xhr.responseText);
                }
            }
        };

        xhr.open('GET', '/users');
        xhr.send();

    - 메소드
        - open
# AJAX
    - Asynchronous Javascript and XML
    - 클라이언트와 서버가 xml 데이터를 주고 받는 정보 교한 기법 중 하나
        - Javascript 구문 내에서 xml ( json / yaml / text )를 이용해서 비동기를 사용하기만 하면 됨
        - 그래서 여러 서드 파티 라이브러리들이 존재
            - 하지만 모든 라이브러리들은 결국 XMLHttpRequest 객체를 사용한다.
    - 기존에는 클라이언트에서 서버로 요청을 보내고 응답을 받으면 다시 화면을 갱신해야 했고 이 과정에서 많은 리소스가 낭비된다.
    - 이를 해결하기 위해 AJAX는 페이지에서 필요한 일부만 갱신할 수 있도록 XMLHttpRequest 객체를 서버에 요청함
    - 실제로 XML은 AJAX에서 잘 쓰이지 않으며 데이터 전송의 흐름이 XML에서 JSON으로 넘어왔기 때문

# Event loop
    - 자바스크립트는 단일 스레드 기반의 언어로 비동기처럼 동작할 수 있게 하는 것
    - Call stack이 비어있을 경우, Callback queue에서 함수를 꺼내 Call stack에 추가하는 역할
    - ex>
        console.log('first');
        setTimeout(function cb() { console.log('second'); }, 0);

        wait3Seconds();
        console.log('third');

        function wait3Seconds() {
            let start = Date.now(), now = start;

            while (now - start < 3 * 1000) {
                now = Date.now();
            }
        }

        - 실행 결과
            first
            third
            second
        - Event loop는 Call Stack이 비어있지 않기 때문에 Callback queue를 체크하지 않음!
        - setTimeout의 delay 인자가 delay ms 후에 실행되는 것을 보장하지 않는다! 정확히는 delay ms 후에 Callback queue에 들어가는 것을 보장하는 것!
            - 자바스크립트 언어 자체가 비동기 특성을 제공하는게 아니라 Browser의 구성 요소들이 제공하는 것이다!
    - ES6/ES2015에서 소개된 Job queue는 Callback queue와 다른 queue이며 Promise를 사용할 경우, Job queue를 사용하게됨
        - Promise를 사용할 때, callback 함수 역할을 하는 .then을 사용하게 되며 이런 thenable한 함수들은 Job queue에 추가된다!
        - 우선순위는 Job queue의 우선 순위가 Callback queue보다 높다.
        - Event loop는 Call stack이 비어있을 경우, Job queue에서 기다리는 모든 작업을 처리하고 Callback queue로 이동하게 된다.
        - HTML 스펙에서는 Job queue를 microtask queue라고도 부름

# forEach와 map의 주요 차이점
    - forEach
        - 배열의 요소를 반복
        - 각 요소에 대해 콜백을 실행
        - 값을 반환하지 않는다.
    - map
        - 배열의 요소를 반복
        - 각 요소에서 함수를 호출하여 결과로 새 배열을 작성하여 각 요소를 새 요소에 매핑
    - 가장 큰 차이점은 map 메소드는 새로운 배열을 반환한다는 것
    - 결과가 필요하지만 원본 배열을 변경하고 싶지 않으면 .map이 확실한 선택
    - 단순히 배열을 반복할 필요가 있다면, forEach가 좋은 선택

# .call과 .apply의 차이점
    - 모두 함수를 호출하는데 사용
    - 첫번째 매개변수는 함수 내에서 this의 값으로 사용
    - call
        - 쉼표로 구분된 인수를 두번째 인수로 취함
    - apply
        - 인수의 배열을 두번째 인수로 취함
    - ex>
        function add(a, b) { return a + b; }

        console.log(add.call(null, 1, 2));
        console.log(add.apply(null, [1, 2]));

# function foo() {}와 var foo = function {}에서 foo의 차이점
    - function foo() {}
        - 함수 선언 ( function statement )
        - 코드 블럭 자체가 실행 가능 코드가 아니다.
        - 해당 코드 블럭을 콘솔에서 실행하여도 어떠한 결과가 리턴되지 않는다.
        - 호이스팅이 됨
    - var foo = function {}
        - 함수 표현 ( function literal )
        - 특정 변수에 할당되거나 즉시 실행가능한 코드 블럭으로서 존재하는 함수를 의미
        - 호이스팅 되지 않음

# null vs undefined vs undeclared
    - null
        - NULL의 symbol
        - 의도를 가지고 변수에 null을 할당하여 값이 없다는 것을 나타냄
        - null이 할당된 변수의 타입을 확인해보면 object
    - undefined
        - 변수를 선언하고 값을 할당하기 전의 형태
        - undefined가 나오는 경우의 예시
            - 존재하지 않는 객체의 프로퍼티를 읽으려고 할 때
            - 존재하지 않는 배열에 요소를 읽으려고 할 때
    - undeclaraed
        - 접근 가능한 스코프에 변수 선언조차 되어있지 않은 상태
        - 타입을 확인해보면 undefined
    
# '==' vs '===' 차이
    - '=='
        - 서로 다른 유형의 두 변수의 값 비교
    - '==='
        - 엄격한 비교
    - ex>
        - 0 == false            // true
        - 0 === false           // false
            - typeof 0 : number type
            - typeof false : boolean type
        - 2 == "2"              // true
        - 2 === "2"             // false
            - typeof 2          // number type
            - typeof "2"        // string type
        - null == undefined     // true
        - null === undefined    // false
            - typeof null       // object type
            - typeof undefined  // undefined

# js class

# 