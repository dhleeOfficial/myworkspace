# Intersection Observer
    - 브라우저 ViewPort와 설정한 요소의 교차점을 관찰하며, 요소가 ViewPort에 포함 유무를 관찰한다.
    - 사용자 화면에 지금 보이는 요소인지 아닌지를 구별하는 기능을 제공한다.
    - 이 기능은 비동기적으로 실행되기 때문에 scroll 같은 이벤트 기반의 요소 관찰에서 발생하는 렌더링 성능이나 이벤트 연속 호출 같은 문제 없이 사용한다.

    - new IntersectionObserver()를 통해 생성한 인스턴스로 관찰자를 초기화하고, 관찰할 대상을 지정한다.
    - 생성자는 2개의 인수를 가진다.
        const io = new IntersectionObserver(callback, options);

        io.observe(element)

        - callback 인수
            - 관찰할 대상이 등록되거나 가시성에 변화가 생기면 관찰자는 콜백을 실행한다.
            - 콜백은 2개의 인수를 가진다. (entries, observer)

            - entries
                - IntersectionObserverEntry 인스턴스의 배열
                - Read-Only 속성들을 포함하고 있다.
                    - boundingClientRect
                        - 관찰 대상의 사각형 정보
                        - Element.getBoundingClientRect()와 동일한 정보
                    - intersectionRect
                        - 관찰 대상의 교차한 영역 정보
                    - intersectionRatio
                        - 관찰 대상의 교차한 영역 백분율
                        - intersectionRect 영역과 boundingClientRect 영역의 비율을 의미
                    - isIntersecting
                        - 관찰 대상의 교차 상태 ( Boolean )
                    - rootBounds
                        - 지정한 루트 요소의 사각형 정보
                        - 이는 옵션 rootMargin에 의해 값이 변경됨
                        - 별도의 루트 요소( options의 root )를 선언하지 않았을 경우 null 반환
                    - target
                        - 관찰 대상 요소 ( Element )
                    - time
                        - 변경이 발생한 시간 정보
                const io = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => console.log(entry))
                }, options)

                io.observer(element)

            - observer
                - 콜백이 실행되는 해당 인스턴스를 참조한다.
        
        - options
            - root
                - 타겟의 가시성을 검사하기 위해 ViewPort 대신 사용할 요소 객체를 지정한다.
                - 타겟의 조상 요소이어야 하며, 지정하지 않거나 null일 경우 브라우저의 ViewPort가 기본 사용된다.
                - 기본값은 null이다.
            - rootMargin
                - 바깥 여백을 이용해 Root 범위를 확장하거나 축소할 수 있다.
                - CSS의 margin과 같이 4단계로 여백을 설정할 수 있으며, px 또는 %로 나타낼수 있다.
                - 기본 값은 0px 0px 0px 0px이며 단위를 꼭 입력해야한다.
            - threshold
                - 옵저버가 실행되기 위해 타겟의 가시성이 얼마나 필요한지 백분율로 표시한다.
                - 기본값은 Array 타입의 [0]이지만 Number 타입의 단일 값으로도 작성할 수 있다.
                - 0.3: 타겟의 가시성이 30%일 때 옵저버가 실행됨

    - Methods
        - observe()
            - 대상 요소의 관찰을 시작한다.
        - unobserve()
            - 대상 요소의 관찰을 중지한다.
            - 관찰을 중지할 하나의 대상 요소를 인수로 지정해야한다.
            - 단, IntersectionObserver 인스턴스가 관찰하고 있지 않은 대상 요소가 인수로 지정된 경우, 아무 동작도 하지 않는다.
        - disconnect()
            - IntersectionObserver 인스턴스가 관찰하는 모든 요소의 관찰을 중지한다.
    
    - IE 지원 ( polyfill )
        - 모듈을 가져와서 사용하면 끝
        
        // IE
        import 'intersection-observer'

        const io = new IntersectionObserver(callback, options)
        const els = document.querySelectorAll('element')

        Array.prototype.slice.call(els).forEach(el => {
            io.observe(el)
        })

        - 또는 HTML 상에서 선언하여 전역적으로 사용이 가능하다.
            - <script src='https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"></script>