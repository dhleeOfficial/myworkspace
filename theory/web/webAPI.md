# Element
    - document 내의 모든 객체가 상속하는 제일 범용적인 기반 클래스
    - 공통 메서드와 속성만 가지며, 이를 상속받아 상세하게 Element를 표현한다.
    - 부모 인터페이스인 Node와 그 부모인 EventTarget을 상속받음.
    - 속성
        - Element.attributes
            - HTML 요소에 할당한 속성을 담은 객체 반환
        - Element.classList
            - 요소의 클래스 석성 리스트를 담은 객체 반환
        - Element.className
            - 요소의 클래스를 나타내는 DOMString 반환
        - etc

    # Element.classList
        - 메서드
            - add( string or array[string])
                - 지정한 클래스 값을 추가
                - 만약 존재하는 클래스라면 무시
            - remove( string or array[string])
                - 지정한 클래스 값 제거
                - 존재하지 않는 클래스를 제거해도 에러 X
            - toggle( string )
                - 클래스 값을 토글링
                - 클래스가 존재하면 제거하고, 없으면 추가한다.
            - item( Number )
                - 컬렉션의 인덱스를 사용하여 클래스 값을 반환한다.
            - contains( string )
                - 지정한 클래스 값이 요소의 class 속성에 존재하는지 확인
            - replace( oldClass, newClass )
                - 존재하는 클래스를 새로운 클래스로 교체한다.
                
# getElementById vs querySelector
    - document.getElementById('idName')
        - 주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고, 해당하는 Element 객체 반환, 없으면 null
        - id는 문서 내에서 유일해야 하기 때문에 특정 요소를 빠르게 찾을 때 유용
        - id가 없는 요소에 접근하려면 querySelector를 사용!
        - example)
            let elem = document.getElementById('idName');
    - document.querySelector(selectors)
        - selectors의 구체적인 그룹과 일치하는 documnet 내 첫번째 Element 객체 반환, 없으면 null

# getElementsByClassName vs querySelectorAll
    - 파라미터에 넘기는 className or 선택자와 일치하는 Element들을 반환
    - 차이점
        - getElementsByClassName는 HTML Collection을 반환
        - querySelectorAll은 NodeList를 반환
    ## HTML Collection vs NodeList
        - HTML Collection
            - document 내에 순서대로 정렬된 노드의 컬렉션
            - 유사 배열
                - 배열에서 제공하는 모든 메서드를 가지고 있지 않다는 뜻
                - Array.from() 메서드를 통해 배열에서 제공하는 메서드를 사용할 수 있다.
            - HTML Element의 children 속성에 접근하면 HTML Collection을 반환받을 수 있다.
            - 접근 방법
                - 배열의 인덱스로 접근 가능
                - 객체의 속성 접근하듯이 .[속성명]으로 접근 가능
                    - 숫자나 띄어쓰기가 되어있으면 불가능
                    - namedItem() 메서드를 통해 가져올 수 있다.
                example)
                    HTML)
                        <body>
                            <div name = 'myDiv'></div>
                            <div name = 'my div'></div>
                            <div name = '3'></div>
                        </body>
                    js)
                        const collection = document.body.children;

                        collection.myDiv ( O )
                        collection.3     ( x ) -> collection.namedItem(3)  ( O )
                        collection.item(0)
                            -> <div name = 'myDiv'></div>
        - NodeList
            - element.childNodes나 document.querySelectorAll 메서드로 반환되는 값
            - 유사 배열
                - forEach는 가지고 있음!
                - map, filter 메서드를 사용하기 위해선 역시나 Array.from() 메서드를 사용해야함
                - entries(), keys(), values() 메서드를 사용할 수 있음
    ## childNodes vs quetySelectorAll
        - 두 메서드 모두 NodeList를 반환한다.
        - 차이점
            - childNodes
                - Live Collection
                - DOM의 변경사항을 실시간으로 반영
            - querySelectorAll
                - Static Collection
                - DOM이 변경되어도 Collection 내용에는 영향을 주지 않음
