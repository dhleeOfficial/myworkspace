# MobX
    - MobX란?
        - state를 전역적으로 쉽게 관리할 수 있게 해주는 라이브러리( Redux와 유사 )
        - Commponent와 State를 연결하는 번잡한 보일러 플레이트 코드들을 데코레이터( Annotation )로 깔끔하게 표현한다.
        - observer / @action / @observable / @computed 개념을 알아야한다!
        - MobX에서 리렌더링 대상이 되는 state를 관찰 대상( observable value )이라고 칭하며, @observable 데코레이터로 지정한 State는 관찰 대상이 된다.
        - 관찰 대상이의 값이 변경될 때마다 리렌더링된다.
    - 설치
        - MobX의 기능 중 하나인 데코레이터를 이용해서 적용하는 코드는 create-react-app에서 공식적으로 지원하는 메서드가 아니다.
            - 이를 지원하게 하려면, babel 설정을 만져야한다!
                - 방법 1> yarn eject
                    - 의존성 관리가 어려움
                    - 다른 패키지와의 의존성을 신경써줘야한다.
                - 방법 2> customize-cra, react-app-rewired 패키지 사용
        - npm install customize-cra, react-app-rewired, @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties, core-decorators
        - package.json의 scripts를 수정
            - eject에 있는 것을 제외한 모든 react-scripts를 react-app-rewired로 교체하면 된다.
                ...
                "scripts": {
                    "start": "react-app-rewired start",
                    "build": "react-app-rewired build",
                    "test": "react-app-rewired test",
                    "eject": "react-scripts eject",
                    ...
                }
                ...
        - package.json에 babel 설정을 추가
            ...
            "babel": {
                "presets": [
                    "react-app"
                ],
                "plugins": [
                    [
                        "@babel/plugin-proposal-decorators",
                        {
                            "legacy": true
                        }
                    ],
                    [
                        "@babel/plugin-proposal-class-properties",
                        {
                            "loose": true
                        }
                    ]
                ]
            }
            ...
        - 프로젝트 파일 루트 폴더에 config-overrides.js 추가
            const { addDecoratorsLegacy, disableEsLint, override } = require("customize-cra")

            module.exports = {
                webpack: override(
                    disableEsLint(),
                    addDecoratorsLegacy()
                )
            }

        - jsconfig.json에서 컴파일 옵션 추가
            - 루트 디렉토리에 파일을 만든다.
            - 타입스크립트라면 tsconfig.json으로 만든다.
            {
                "compilerOptions": {
                    ...
                    "experimentalDecorators": true,
                    ...
                }
                ...
            }
            - experimentalDecorators를 true로 설정해줘야 lint 상에서 오류가 발생하지 않음

    - MobX를 React에 적용
        - 패키지 설치
            - npm install mobx, mobx-react
    
    - 기본 개념 및 특징
        - 