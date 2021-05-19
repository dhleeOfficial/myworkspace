# React
    - 페이스북에서 개발하고 있는 UI를 만들기 위한 javascript 라이브러리
    - 특징
        - 단방향 데이터 흐름
        - virtual DOM
        - UI Component 기반 ( CBA )
# Virtual DOM
    - Virtual DOM은 어플리케이션의 UI를 구성하는 HTML 요소를 메모리 내에서 구현한 것
    - 컴포넌트가 다시 렌더링될 때, Virtual DOM은 업데이트할 요소의 목록을 만들기 위해 기존의 DOM 모델에서 변경되는 사항을 비교한다.
    - DOM 전체를 다시 렌더링할 필요없이 실제 DOM에 필요한 최소한만 변경하여 효율성을 높인다.

# JSX
    - HTML처럼 보이는 코드를 작성할 수 있게 해주는 자바스크립트 문법의 확장
    - JSX는 자바스크립트 함수 호출 방식으로 컴파일되어 컴포넌트에 대한 마크업을 만들 수 있는 더 좋은 방법을 제공한다.
    - ex>
        JSX
            <div className='sidebar'>
        JS
            React.createElement(
                'div',
                { className: 'sidebar' }
            )

# 클래스형 컴포넌트 vs 함수형 컴포넌트
    - React 16.8 이전에는 내부 state를 유지하는데 필요한 컴포넌트를 생성하거나 생명주기 메소드를 활용하기 위해 클래스 기반 컴포넌트를 사용함
    - 클래스형 컴포넌트는 React의 Component 클래스를 확장하는 ES6 클래스이며, 최소한 render() 메소드를 포함해야한다.
    - 함수형 컴포넌트는 state를 갖지 않으며 (hook 도입 이전) 렌더링할 출력 결과를 return 문에 반환한다.

# key props
    - React에서 collection을 렌더링할 때 엘리먼트와 데이터 사이의 관계를 추적하기 쉽도록 반복되는 각 엘리먼트에 key를 추가해야한다.
    - key는 고유한 ID를 사용해야하지만, 마지막 수단으로 Array index가 될 수 있다.

# state vs props
    - props는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 data
    - props는 수정될 수 없으며 표시되거나 다른 값을 계산하는데만 사용된다.
    - state는 컴포넌트의 생명 주기동안 수정될 수 있는 내부 data로 다시 렌더링해도 유지된다.

# prop으로 전달되는 값 type 강제, 필수 prop
    - ClassComponentName.propTypes = {
        name: PropsTypes.string
    }
    - ClassComponentName.defaultProps = {
        name: 'hi'
    }
        - defaultProps 프로퍼티를 할당함으로써 props의 초깃값을 정의할 수 있다.
    - 함수형 컴포넌트도 export하기 전에 동일한 방법으로 정의할 수 있다.

# HOC ( High Order Component )
    - 컴포넌트 로직을 재사용하기 위한 기술
    - 컴포넌트를 받아 컴포넌트를 반환한다.
    - HOC 접두사는 보통 with-로 시작한다.

# Flux
    - FE에서 적용된 MVC 패턴에 대한 문제로 나온 패턴
    - 단방향 데이터 흐름 모델의 개념을 따르는 아키텍쳐
    - flux에서는 UI는 데이터를 전달받기만 하면 됨
    - UI 쪽에 데이터를 변경할 때마다 action을 일으켜 store에 변경사항을 업데이트하고 그 변경사항을 UI에 전달한다.
        - 데이터가 한방향으로 흐르기 때문에 추적이 쉽고 예측가능하다.

# Redux
    - Flux 아키텍쳐를 기반으로 단방향 데이터 흐름 상태관리 라이브러리
    - 3가지 원칙
        - single source of truth
            - redux는 어플리케이션 상태를 한곳에서 관리하기 위해 단 한 개의 store만 사용하는 것을 권장
        - state is readOnly 
            - UI에서 state를 직접 접근하여 변경할 수 없다.
        - Changes are made with pure functions
            - reducer는 순수함수으로만 되어야한다.