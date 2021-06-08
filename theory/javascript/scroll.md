# 스크롤 위치 값 가져오는 방법
    1. window.scrollY
    2. document.scrollingElement.scrollTop
    3. document.documentElement.scrollTop
    4. document.querySelector('html').scrollTop

    - 1, 2번은 IE에서 동작하지 않는다.
    - 예제> 크로스 브라우징을 위한 스크롤 위치 가져오기
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;
        
# clientHeight, offsetHeight, scrollHeight
    - clientHeight
        - 요소의 내부 높이
        - 패딩 값이 포함되며, 스크롤바, 테두리, 마진은 제외됨
    - offsetHeight
        - 요소의 높이
        - 패딩, 스크롤바, 테두리가 포함되며 마진은 제외됨
    - scrollHeight
        - 요소에 들어있는 컨텐츠의 전체 높이
        - 패딩과 테두리가 포함되며 마진은 제외됨