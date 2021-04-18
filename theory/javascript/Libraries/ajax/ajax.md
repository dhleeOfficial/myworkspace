# AJAX ( Asynchronous Javascript And XML )
    - 자바스크립트의 라이브러리
    - 브라우저가 가지고 있는 XMLHttpRequest 객체를 이용해서 전체 페이지를 새로 고치지 않고 페이지의 일부만을 위한 데이터를 로드하는 기법
    - 자바스크립를 사용한 비동기 통신, 클라이언트와 서버 간에 XML 데이터를 주고받는 기술
        - XML은 잘 안 쓰이지 않으며, 데이터 전송의 흐름이 JSON으로 넘어왔기 때문!
    - 자바스크립트를 통해서 서버에 데이터를 요청하는 것!

    # 비동기 방식
        - 웹 페이지를 새로고침하지 않고 데이터를 불러오는 방식
        - Ajax를 통해서 서버에 요청을 한 후, 멈춰있지 않고 프로그램은 계속 실행된다.
        - 페이지를 새로고침하게 되면, 전체 리소스를 다시 불러와야 하는데...
            - 이미지, 스크립트, 기타 코드 등을 모두 재요청할 경우 불필요한 리소스 낭비가 발생한다.
        - 비동기 방식의 경우 필요한 부분만 불러와 사용할 수 있으므로 큰 장점이 있다.

    # XMLHttpRequest
        - 모든 AJAX를 실현하는 라이브러리들의 모체 객체