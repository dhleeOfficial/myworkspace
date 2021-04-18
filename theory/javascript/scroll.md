# 스크롤 위치 값 가져오는 방법
    1. window.scrollY
    2. document.scrollingElement.scrollTop
    3. document.documentElement.scrollTop
    4. document.querySelector('html').scrollTop

    - 1, 2번은 IE에서 동작하지 않는다.
    - 예제> 크로스 브라우징을 위한 스크롤 위치 가져오기
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;
        