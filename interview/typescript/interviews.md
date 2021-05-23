# interface와 type의 차이

    interface PeopleInterface {
        name: string
        age: number
    }

    const me1: PeopleInterface = {
        name: 'yc',
        age: 34,
    }

    type PeopleType = {
        name: string
        age: number
    }

    const me2: PeopleType = {
        name: 'yc',
        age: 31,
    }

    - interface는 type과 마찬가지로 객체 타입의 이름을 지정하는 또 다른 방법
    - 차이점
        - 확장
            - interface
                interface People {
                    name: string
                    age: number
                }

                interface Student extends People {
                    school: string
                }

            - type
                type PeopleType = {
                    name: string
                    age: number
                }

                type StudentType = PeopleType & {
                    school: string
                }

            - interface에서 할 수 있는 대부분의 기능들은 type에서 가능하지만, 한가지 중요한 차이점은 type은 새로운 속성을 추가하기 위해서 다시 같은 이름으로 선언할 수 없지만, interface는 항상 선언적 확장이 가능하다는 것!
                - ex>
                    interface Window {
                        title: string
                    }

                    interface Window {
                        ts: TypeScript
                    }
                    // 같은 interface 명으로 Window을 다시 만든다면, 자동으로 확장됨
            - interface는 객체에만 사용이 가능하다.