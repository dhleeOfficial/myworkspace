# noul source code zip
    - 소스코드가 실행되기 위해서 node가 로컬환경에 설치되어 있어야 합니다.
    - 소스코드 zip 압축을 풀어 아래와 같이 실행하면 됩니다.
    - 자세한 소스코드 설명은 safe.js에 주석으로 달아놓았습니다.

    - 코드 실행
        1. npm install 명령어 실행
            - jest 라이브러리 다운로드
        2. safe.js
            - node safe.js 명령어 실행으로 입력을 받을 수 있습니다.
            - 문제에서 타일을 텍스트로 입력받아서 구현하라고 기입되어있어 readline 모듈을 이용하였습니다.
            - 한 줄로 타일 입력 후, enter키 입력하여 다음 줄 타일을 기입합니다.
            - 타일을 모두 입력한 후, ctrl + c 키를 입력하면 MaxRectangleArea 함수를 실행시켜 정답을 출력합니다.
        3. safe.test.js
            - jest를 이용한 테스트 파일
            - npm test 명령어 실행으로 테스트를 실행할 수 있습니다.
            - 단, safe.js의 readline 모듈과 관련된 부분을 주석하여야 테스트가 올바르게 종료됩니다. ( 주석 처리 부분은 safe.js에 명시해놓았습니다. )