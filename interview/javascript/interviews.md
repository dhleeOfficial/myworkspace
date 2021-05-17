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
# protoType

# hoisting

# closure

# callback / promise / async & await

# AJAX



# Event loop

#