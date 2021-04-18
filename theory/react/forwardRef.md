# forwardRef
    # HTML 요소의 Ref Prop
        - ref prop은 HTML 요소에 직접 접근하기 위해서 사용됨
        - 예제>
            import React, { useRef } from 'react'

            function Field() {
                const inputRef = useRef(null);

                function handleFocus() {
                    inputRef.current.focus();
                }

                return {
                    <>
                        <input type='text' ref={iputRef} />
                        <button onClick={handleFocus}>Button</button>
                    </>
                }
            }
    # React 컴포넌트의 ref Prop
        - 어떤 컴포넌트에서 다른 컴포넌트 내부에 있는 HTML 요소에 직접 접근해야할 떄가 있을 수 있다.
        - 그렇다면..?
            import React, { useRef } from 'react'

            function Input({ ref }) {
                return <input type='text' ref={ref} />
            }

            function Field() {
                const inputRef = useRef(null);

                function handleFocus() {
                    inputRef.current.focus();
                }

                return {
                    <>
                        <Input ref={iputRef} />
                        <button onClick={handleFocus}>Button</button>
                    </>
                }
            }
            - 이렇게 코드를 작성하게 되면 브라우저 콘솔에서 에러를 뱉는다.
        - React에서 특수한 목적으로 사용되기 때문에 일반적인 용도로 사용할 수 없는 prop이 있다.
            - key prop -> 루프를 돌면서 동일한 컴포넌트를 여러번 렌더링할 때 사용
            - ref prop -> HTML 엘리먼트 접근에 사용
        - 이 경우에는 React에서 제공하는 forwardRef() 함수를 사용하면된다.
            - forwardRef를 통해 컴포넌트를 감싸주면, 두번째 매개변수로 ref를 받게 된다.
            
