# React
    - 페이스북에서 개발하고 있는 UI를 만들기 위한 javascript 라이브러리
    - 특징
        - 단방향 데이터 흐름
        - virtual DOM
        - UI Component 기반 ( CBA )

# React vs Angular vs Vue
    - Vue
        - 가장 적은 러닝 커브
        - 가볍고 빠르게 개발이 필요하다면 추천
        - 가장 최신에 릴리즈 시작한 프레임워크
        - 양방향 데이터 바인딩
        - Virtual DOM
        - MVVM 구조를 가지고 있음
    - Angular
        - 구글 지원
        - 양방향 데이터 바인딩
        - 가장 복잡하고 큰 러닝커브
        - TypeScript로 매우 안정적이고 탄탄한 프론트 앱을 만들 수 있음

# Virtual DOM
    - Virtual DOM은 어플리케이션의 UI를 구성하는 HTML 요소를 메모리 내에서 구현한 것
    - 컴포넌트가 다시 렌더링될 때, Virtual DOM은 업데이트할 요소의 목록을 만들기 위해 기존의 DOM 모델에서 변경되는 사항을 비교한다.
    - DOM 전체를 다시 렌더링할 필요없이 실제 DOM에 필요한 최소한만 변경하여 효율성을 높인다.

# JSX
    - HTML처럼 보이는 코드를 작성할 수 있게 해주는 자바스크립트 문법의 확장
    - JSX는 자바스크립트 함수 호출 방식으로 컴파일되어 컴포넌트에 대한 마크업을 만들 수 있는 더 좋은 방법을 제공한다.
    - 기본적으로 React.createElement() 함수의 syntatic sugar 
    - ex>
        JSX
            <div className='sidebar'>
        JS
            React.createElement(
                'div',
                { className: 'sidebar' }
            )

# 클래스형 컴포넌트 vs 함수형 컴포넌트
    - 함수형 컴포넌트
        - props를 첫번째 파라미터로 받는 순수 자바스크립트 함수를 만들고, React.element를 return한다.
        - 라이프 사이클을 관리하기 위한 여러 hook들을 제공해준다.
    - 클래스형 컴포넌트
        - ES6의 클래스를 활용하여 컴포넌트 정의
        - 라이프 사이클 메소드가 존재하며 이를 이용해서 컴포넌트를 관리할 수 있다.
        - ex>
            class Greeting extends React.Component {
                render() {
                    return <h1>hi</h1>;
                }
            }
    
# Pure Component?
    - React.PureComponet는 React.Component에서 shouldComponentUpdate가 없다는 것만 제외하고 모두 동일하다.
    - props나 state에 변화가 있을 경우, PureComponent는 두 변수에 대해 얕은 비교를 한다.

# key props
    - React에서 collection을 렌더링할 때 엘리먼트와 데이터 사이의 관계를 추적하기 쉽도록 반복되는 각 엘리먼트에 key를 추가해야한다.
    - key는 고유한 ID를 사용해야하지만, 마지막 수단으로 Array index가 될 수 있다.

# props
    - props는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 data
    - props는 수정될 수 없으며 표시되거나 다른 값을 계산하는데만 사용된다.
# state
    - state는 컴포넌트의 생명 주기동안 수정될 수 있는 내부 data로 다시 렌더링해도 유지된다.
    - 다른 어떤 컴포넌트도 한 컴포넌트가 소유하고 있는 state에 접근할 수 없다.

# setState()
    - state 값을 직접 수정하는 것은 렌더링에 반영되지않으며, setState 함수를 이용해서 state 값을 변경해야함
    - setState에 변경할 값과 함께 콜백 함수도 넘겨줄 수 있는데 해당 콜백 함수는 setState가 끝나고 컴포넌트가 렌더링된 이후에 실행됨
    - setState는 비동기로 이루어지기 때문에 callback에서는 어떤 액션이든 취할 수 있다.
    - 그러나! 콜백함수를 사용하는 것보단 라이프 사이클 메소드를 사용하는게 더 좋다.
        - ex>
            setState({ name: 'John' }, () => console.log('blabla'));
    - setState()를 함수로 호출할 수 있다. 함수로 호출 시, 이전 state 값을 받을 수 있고, 업데이트할 때 사용할 prop도 받아올수 있다.
        - ex>
            this.setState((prevState, props) => ({
                conuter: prevState.counter + props.increment,
            }))

# HTML과 React의 이벤트 핸들링 차이
    - HTML
        - <button onclick='handler()'></button>
            - 이벤트 명은 소문자로!
        - <a href='#' onclick='return false;' />
            - false를 리턴하면 이후 기본 액션을 막을 수 있다.
    - React
        - <button onClick={handler}></button>
            - 이벤트 명은 camelCase
        - 이벤트의 기본 동작을 막기 위해서는 event.preventDefault()를 명시적으로 호출해줘야함

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

# createPortal
    - portals은 상위 컴포넌트의 DOM 계층 구조 외부에 존재하는 DOM 노드로 자식을 렌더링하는데 권장되는 방법
    - v16 이전에는 컴포넌트를 렌더링하게 될 때, children prop은 부모 컴포넌트의 DOM 내부에 렌더링되어야 했음
    - 하지만 Portals를 사용하면 DOM의 계층구조 시스템에 종속되지 않으면서 컴포넌트를 렌더링할 수 있따.
    - ReactDOM.createPortal(child, container);
        - 첫번째 인자 ( child )
            - elements, string, fragment와 같은 어떤 종류이든 렌더링할 수 있는 React 자식
        - 두번째 인자 ( container )
            - DOM 엘리먼트

# Component Life cycle
    - Mouting -> Updating -> Unmounting
    - Mouting
        - constructor -> getDerivedStateFromProps -> render -> componentDidMount
    - Updating
        - getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
    - Unmounting
        - componentWillUnmount

    - getDerivedStateFromProps()
        - render() 함수가 불리기 직전에 호출된다.
        - object를 반환하여 state를 업데이트하거나
        - null을 리턴하여 새로운 props에서 state update가 필요하지 않도록 나타낸다.
    - getSnapshotBeforeUpdate()
        - DOM 업데이트 직전에 호출됨
        - 이 메서드의 반환값은 componentDidUpdate()의 세번째 파라미터로 전달된다.

# Hook의 규칙
    - React에서 Hook을 사용할 때는 두 가지 규칙을 준수해야한다.
    - React에서는 규칙을 자동으로 강제하기 위해 linter 플러그인을 제공한다.
    - 규칙
        - 최상위에서만 Hook을 호출해야한다.
            - 반복문, 조건문 혹은 중첩된 함수 내에서 Hook을 호출하면 안된다.
            - 항상 React 함수의 최상위에서 Hook을 호출해야한다.
            - 컴포넌트가 렌더링 될 때마다 동일한 순서로 Hook이 호출되는 것이 보장됨
            - React가 useState와 useEffect가 여러번 호출되는 중에도 Hook의 상태를 올바르게 유지할 수 있게 해준다.
        - 오직 React 함수 내에서 Hook을 호출해야한다.
            - 일반적인 JS 함수에서 Hook을 호출하면 안된다.
            - 가능한 호출 방법은 React 함수 컴포넌트에서 호출, Custom Hook에서 호출 두가지이다.
    - 이 두 규칙을 강제하는 eslint-plugin-react-hooks라는 ESLint 플러그인이 있다.
        - CRA에 기본적으로 포함되어 있다.
        - 설치방법
            - npm install exlint-plugiiin-react-hooks --save-dev
            - // ESLint 설정 파일
                {
                    "plugins": [
                        "react-hooks"
                    ],
                    "rules": {
                        "react-hooks/rules-of-hooks": "error",
                        "react-hooks/exhaustive-deps": "warn"
                    }
                }
    - 만약 조건부로 effect를 실행하기 원한다면, 조건문을 Hook 내부에 넣으면 된다.
        - ex>
            useEffect(() => {
                if (name !== '') localStorage.setItem('formData', name);
            })
    - Custom Hook
        - 컴포넌트 로직을 함수로 뽑아내어 재사용할 수 있다.
        - 1) Custom hook 추출하기
            - 두 개의 자바스크립트 함수에서 같은 로직을 공유하고자 할 때는 또 다른 함수로 분리한다. Hook 또한 함수이므로 보통의 함수와 같은 방법으로 사용함
            - ex> function useFriendStatus(friendId) {
                const [ isOnline, setIsOnline ] = useState(null);

                return isOnline;
            }
        - 2) Custom hook 이용하기
            - ex>
                function FriendStatus(props) {
                    const isOnline = useFriendStatus(props.friend.id);
                    ...
                }

                function FriendListItem(props) {
                    const isOnline = useFriendStatus(props.friend.id);
                    ...
                }
            - custom hook은 React의 특별한 기능이라기 보다는 기본적으로 hook의 디자인을 따르는 관습
            - custom hook의 이름은 use-로 시작되어야 함. 이를 따르지 않으면 특정한 함수가 그 안에서 hook을 호출하는지 알 수 없기 때문에 hook 규칙 위반 여부를 자동으로 체크할 수 없다.
            - 같은 hook을 두 개의 컴포넌트는 state를 공유하지 않는다.
                - custom hook은 상태 관련 로직을 재사용하는 매커니즘일 뿐, hook을 사용할 때마다 그 안의 state와 effect는 완전히 독립적이다.

# Recoil
    - 기존의 상태 관리 라이브러리 ( Redux or MobX )들은 어떠한 문제도 없다.
    - 하지만 중요한 점은 상태 관리 라이브러리들이 React 라이브러리가 아니라는 점
    - Recoil
        - 배우기 쉽다.
            - API가 단순하고 이미 hook을 사용하고 있는 사람들에게 익숙하다.
            - 어플리케이션을 RecoilRoot로 감싸고, 데이터를 atom이라는 단위로 선언하여 useState를 Recoil에 useRecoilState로 대체한다.
        - 컴포넌트가 사용하는 데이터 조각만 사용할 수 있고, 계산된 selector를 선언할 수 있으며, 비동기 데이터 흐름을 위한 내장 솔루션까지 제공한다.
    - 기본부터 시작
        - Atom
            - 하나의 상태
            - 컴포넌트가 구독할 수 있는 React state라고 생각하면 된다.
            - atom의 값을 변경하면 그것을 구독하고 있는 컴포넌트들이 모두 렌더링이 된다.
            - atom을 생성하기 위해 어플리케이션에서 고유한 키 값과 디폴트 값을 설정해야 한다.
                - 디폴트 값은 정적인 값, 함수 또는 심지어 비동기 함수가 될 수 있다.
            - ex>
                export const nameState = atom({
                    key: 'nameState',
                    default: 'Jane Doe'
                });
        - useRecoilState
            - atom의 값을 구독하여 업데이트할 수 있는 hook, useState와 동일한 방식으로 사용할 수 있다.
        - useRecoilValue
            - setter 함수없이 atom의 값을 반환만 한다.
        - useSetRecoilState
            - setter 함수만 반환한다.
            - ex>
                import { nameState } from './somplace';

                const NameInput = () => {
                    const [ name, setName ] = useRecoilState(nameState);
                    const onChange = (e) => {
                        setName(event.target.value);
                    };

                    return (
                        <>
                            <input type="text" value={name} onChange={onChange} />
                            <div>
                                Name: {name}
                            </div>
                        </>
                    );
                }

                const SomeOtherComponentWithName = () => {
                    const name = useRecoilValue(nameState);

                    return <div> {name} </div>;
                }

                const SomeOtherComponentThatSetsName = () => {
                    const setName = useSetRecoilState(nameState);

                    return (
                        <button onClick={() => setName('Jone')}>
                            SetName
                        </button>
                    );
                }
        - selector
            - selector는 상태에서 파생된 데이터로, 다른 atom에 의존하는 동적인 데이터를 만들 수 있게 해준다.