# 웹 동작 방식
    - 사용자가 브라우저에 URL 입력
    - 브라우저는 DNS를 통해 서버의 진짜 주소를 찾음
    - HTTP 프로토콜을 사용하여 HTTP 요청 메시지를 생성
    - TCP/IP 연결을 통해 HTTP 요청이 서버로 전송
    - 서버는 HTTP 프로토콜을 활용해 HTTP 응답 메시지 생성
    - TCP/IP 연결을 통해 요청한 컴퓨터로 전송
    - 도착한 HTTP 응답 메시지는 웹페이지 데이터로 변환되고, 웹 브라우저에 의해 출력되어 사용자가 볼 수 있게 됨

# TCP / UDP
    - TCP
        - TCP는 연결형 서비스로 3-way handshaking 과정을 통해 연결을 설정
        - 그렇기 때문에 높은 신뢰성을 보장하지만 속도가 비교적 느리다는 단점이 있음
        - 신뢰성이 중요한 파일 교환과 같은 경우에 쓰임
    - UDP
        - 비 연결형 서비스로 3-way handshaking을 사용하지 않기 때문에 신뢰성이 떨어지는 단점이 있다.
        - 하지만 수신 여부를 확인하지 않기 때문에 속도가 빠르다.
        - 실시간성이 중요한 스트리밍에 자주 사용

# GET / POST
    - GET
        - 데이터를 조회하기 위해 사용되는 방식으로 데이터를 헤더에 추가하여 전송하는 방식
        - URL에 데이터가 노출되기 떄문에 보안적으로 중요한 데이터를 포함해서는 안됨
        - 캐싱이 가능하다.
    - POST
        - 데이터를 추가 또는 수정하기 위해 사용되는 방식으로 데이터를 body에 추가하여 전송하는 방식
        - 완전히 안전하다는 것은 아니지만 URL에 데이터가 노출되지 않아 GET보다는 안전하다.
        - 캐싱이 불가능하다.

# 공인 IP / 사설 IP
    - 공인 IP
        - 전세계에서 유일한 IP로 ISP가 제공하는 IP주소
        - 외부에 공개되어 있기 때문에 인터넷에 연결된 다른 장비로부터 접근이 가능하다.
        - 그에 따라 방화벽 등과 같은 보안 설정을 해줘야함
    - 사설 IP
        - 어떠 네트워크 안에서 사용되는 IP주소
        - IP4의 부족으로 인해 모든 네트워크가 공인 IP를 사용하는 것이 불가능하기 때문에 네트워크 안에서 라우터를 통해 할당받는 가상의 주소
        - 별도의 설정 없이는 외부에서 접근이 불가능