# class와 id의 차이점
    - id는 유일한 요소에 적용할 때, class 복수의 요소에 적용할 때 사용한다.
    - 하나의 id는 한 문서에서 한번만 사용이 가능하지만 하나의 class는 여러번 사용이 가능하다.
    - 우선순위는 id가 class보다 높다.

# float

# clearing
    - 클리어링은 float 속성이 주변 요소의 배치에 영향을 미치지 않도록 하는 것
    - float 속성을 가진 요소는 자신의 위치를 주변 컨텐츠로부터 상대적으로 배치하기 때문에 다른 컨텐츠가 그 주위로 흐르게 된다.
    - 클리어링을 통해 이를 방지할 수 있는 방법
        - 1. float에 float로 대응
            - 자식 요소 뿐만 아니라 부모 요소에게도 float 속성을 지정하면 부모 요소가 자식 요소의 높이를 반영한다.
            - 단 이렇게 하면 부모 요소의 너비가 자식 요소를 담을 정도로 줄어든다.
        - 2. float에 overflow 속성으로 대응
            - 자식 요소의 높이를 부모에게 반영하는 방법
            - 부모 요소의 overflow 속성에 auto 또는 hidden 값을 부여
            - 하지만 auto 값의 경우, 자식 요소가 부모 요소보다 클 때 스크롤바가 생기며, hidden 값의 경우 넘치는 부분이 잘린다.
        - 3. float을 빈 엘리먼트로 클리어링
            - float가 지정된 요소 뒤에 빈 요소를 추가하고 빈 요소의 clear 속성에 both값을 부여한다.
            - 의미없는 요소를 사용하게 되기 때문에 권장 X
        - 4. float을 가상 선택자 :after로 클리어링
            - 가상 선택자는 가상 클래스와 가상 요소로 나뉜다.
                - 가상 클래스
                    - 특정 요소에 아무런 class를 부여하지 않았지만 마치 class를 변경한 것과 같은 역동적인 효과를 낼 수 있다.
                    - :hover, :active, :focus 등이 여기에 속한다.
                - 가상 요소
                    - 존재하지 않은 요소를 가상으로 생성하는 선택자
                    - :first-line, :before, :after가 여기에 속한다.
                    - 이렇게 가상 요소를 생성한 다음 display: block; clear: both; 처리를 하면 깔끔하게 클리어링 할 수 있다.

# padding과 margin의 차이
    - padding
        - 내부 컨텐츠와의 여백
    - margin
        - 외부 요소와의 여백

# CSS 전처리기의 장단점
    - CSS 문서가 방대해짐에 따라 작업 효율을 높이기 위해 등장한 기술
    - 전처리기를 사용하면 CSS 상의 반복적인 부분들을 스크립트나 변수로 처리할 수 있고, 다양한 연산이 가능해진다.
    - 선택자를 nesting으로 관리할 수 있다.
    - 웹에서는 CSS만 동작하기 떄문에 CSS로 컴파일 후 동작시켜야 한다.
    - Less나 Sass가 대표적인 CSS 전처리기
    - ex>
        @bgColor: #DFDFDF;
        body {
            background-color: @bgColor;
        }

# 페이지에서 표준 폰트가 아닌 폰트 디자인을 사용할 때 어떤 방식으로 처리하나
    - eot, woff, woff2와 같은 파일을 import하여 사용

# CSS 셀렉터의 원리
    - 오른쪽에서 왼쪽으로 이동하면서 요소가 규칙에 적합한지 확인한다.

# box-model이란?
    - 각각의 요소를 박스 형태로 나타내어 브라우저에 배치하기 위한 규칙

# display 속성
    - block
        - 항상 새로운 라인에 요소가 시작되고 화면 크기의 전체 가로폭을 영역으로 차지한다.
        - width, height 속성 값을 부여해주면 그 너비만큼 영역을 차지
    - inline
        - 새로운 라인에서 시작되지 않고, 다른 요소들과 같은 줄에 배치가 될 수 있고 content 너비만큼 영역을 차지한다.
        - width, height, margin-top, margin-bottom 속성이 적용 X
    - inline-block
        - block, inline 요소의 특징을 모두 가지고 있다.
        - 한 줄에서 inline 요소들과 같이 배치될 수 있고, width, height 속성을 정해줄 수 있다.
    - none
        - 요소를 화면에 나타나지 않게한다.
        - visibility: hidden 차이가 있다.

# 요소를 배치하는 방법간의 차이
    - static
        - 기본값
        - 요소들이 겹치지 않고 상 -> 하로 배치된다.
    - relative
        - padding 값도 기준에 들어감
        - 자기 자신의 위치가 기준이 됨
    - absolute
        - padding 값은 absolute의 기준에 벗어남
        - 부모가 기준이 된다. ( 부모가 static이면 안됨 )
    - fixed
        - viewport 기준으로 고정값이 되며, 스크롤을 해도 고정됨
    - sticky
        - 최초에는 relative 속성처럼 동작하다가 스크롤이 특정 지점에 도달하면 요소를 고정시킬 수 있다.

# CSS 애니메이션과 JS 애니메이션의 차이
    - 자바스크립트는 메인 스레드가 무거운 작업을 하고 있을 때 애니메이션 처리의 우선순위를 미뤄두는 반면 CSS는 독립적인 스레드가 애니메이션을 처리해준다. 때문에 CSS 애니메이션은 최적화가 쉽다.
    - UI요소가 작은 경우 CSS를 사용하고, 세밀하게 애니메이션을 제어해야하는 경우 자바스크립트를 사용하는 것이 좋다.
    - CSS Animation
        - UI 요소가 작은 경우 사용하는 것이 좋다
        - 낮은 버전의 브라우저에서 지원을 안 하는 경우가 있다.
    - JS
        - 애니메이션을 세밀하게 제어해야하는 경우 JS를 사용한다.
        - 크로스 브라우징 측면에서 JS 애니메이션을 사용하는 것이 유리
        - velociry.js와 같은 라이브러리를 사용하면 CSS보다 성능이 좋다.

# flex

# CSS-in-JS
    - CSS보다 더 강력한 추상화
    - JS를 사용하여 스타일을 선언적이고, 유지보수가 가능한 방식으로 설명한다.
    - JS를 CSS로 전환하는 고성능 컴파일러로 런타임 및 서버 사이드에서 작동한다.
    - 장점
        - 컴포넌트 단위로 생각할 수 있다. 컴포넌트 레벨로 추상화한다.
        - 진정한 분리 법칙을 따른다. CSS에는 명시적으로 정의하지 않은 경우, 부모 요소에서 자동으로 상속되는 속성이 있다. CSS-in-JS의 경우 부모 요소의 속성을 상속하지 않는다.
    - 대표적인 라이브러리로 styled-components가 있다.
# FOUC
    - 외부의 CSS 코드를 불러오기 전 스타일이 적용되지 않은 페이지가 잠시 나타나는 현상
    - 특히 IE에서 자주 발생하는 현상으로 사용자 경험을 저하시키는 요인
    - FOUC가 발생하는 이유는 브라우저가 마크업에 참조된 파일들을 모아 DOM을 생성할 때 가장 빠르게 분석할 수 있는 부분(HTML)을 먼저 화면에 표시한 뒤, 화면에 출력된 마크업 순서에 따라 CSS를 적용하고 JavaScript를 실행하기 때문
    - 해결하는 방법
        - head 태그 안에 CSS를 링크하고, @import의 사용을 자제해야한다.
        - 또한 JavaScript를 head 태그 안에서 로드하는 것도 방법 (비추천)
        - FOUC가 발생하는 구역을 숨겼다가 브라우저가 준비됐을 때 다시 보여주는 방법
    
# ARIA(Accessible Rich Internet Applications와 스크린 리더)
    - ARIA
        - 접근 가능한 인터넷 어플리케이션을 의미
        - 이는 웹 컨텐츠를 개발할 때 장애인을 위한 접근성 향상 방법을 정의
        - <html> 태그에 role 속성을 지정하는 방식으로 사용할 수 있으며, 대부분의 브라우저와 스크린리더가 ARIA를 지원하고 있다.
    - 스크린 리더
        - 웹사이트의 구성 요소를 읽어주는 프로그램으로, 시각 장애를 가진 사용자가 컴퓨터 화면에 무엇이 있는지 인지할 수 있게 돕는다.

# 시각적으로 보이지 않고 스크린 리더에서만 가능하게 하는 방법
    - 1. display: none;
        - 영역 자체가 없어지면서 컨텐츠가 안보임
    - 2. visibility: hidden;
        - 영역은 존재하고 컨텐츠만 안보임
    - 3. box 요소 크기를 작게하고, overflow: hidden; 사용
        - width: 0; height: 0;
    - 4. text-indent, position 등에 음수 사용

# 인쇄하기 위해 웹 페이지를 어떻게 최적화 하나?
    - 미디어 쿼리를 이용해 print용 스타일을 따로 만든다.

# reset css
    - 브라우저에서 제공하는 기본 스타일을 초기화하는 방법
    - reset css는 브라우저 간의 차이를 최대한 없애는 코드를 넣어서, 브라우저 요소들의 스타일이 0인 상태에서 디자인을 만들어 나가기 위해 생겨난 것
    - reset css와 비슷한 것 -> Normalize.css
        - 약간의 디자인적인 요소가 가미되어 있다.

# 반응형 디자인 vs 적응형 디자인
    - 반응형 디자인
        - 디스플레이의 너비에 따라 레이아웃을 변형시킴
        - 반응형 웹이 미디어 쿼리를 사용해 스타일 분기를 나누는 방법
    - 적응형 디자인
        - 고정적 레이아웃을 가진다.
        - 디바이스를 체크해 그 디바이스에 최적화된 마크업을 호출하는 방법

# IE box model vs W3C box model 차이
    - 브라우저에 따라 box model이 달라 요소에 지정된 너비와 높이가 같아도 서로 다르게 렌더링됨
    - box model은 기본적으로 margin, border, padding, content로 구성됨
    - W3C의 표준 box model은 컨텐츠의 너비와 높이만을 width, height로 계산한다.
    - IE box model은 컨텐츠와 padding, border를 포함한 너비와 높이를 width, height로 계산한다.
    - 해결책
        - DTD를 통해 브라우저가 쿼크모드로 동작하지 않도록 한다.
        - wrapper 요소를 사용해 width, height 값을 할당하고 내부 엘리먼트에 padding, border 값 할당한다.

# % / em / rem / vw / 
    - %
        - 부모의 넓이 기준으로 적용된다.
    - em
        - 상위 요소의 폰트 사이즈의 몇 배인가?
    - rem
        - 최상위 폰트사이즈 기준
    - vw & vh
        - v는 viewport의 약자

# transition
    - 전환
    - cubic-bezier 가속 모델

# z-index
    - z-index는 겹치는 요소들 간에 어떤 것을 상위에 표시할 것인지에 대한 명시값
    - z-index를 사용하기 위해서는 3가지 사항이 있다.
        - 우선 z-index 값을 지정하기 위해서는 해당 요소의 position 속성이 relative, absolute, fixed 중 하나여야만 한다.
            - position 값이 지정되지 않으면 해당 요소들은 z-index: 0;처럼 동작
        - z-index의 값은 같은 depth의 요소끼리 비교하는 것이 워닉
        - z-index의 기본값은 auto이며, 이 경우 브라우저는 그 요소를 제쳐두고 자식 요소의 z-index값을 비교대상으로 삼는다.

# CSS Sprite 기법
    - 웹사이트의 성능 향상을 위하여 여러 개의 이미지를 합쳐서 하나의 이미지로 만들고 이를 잘라 사용하는 방식
    - 예를 들어, 한 페이지에서 10개의 이미지 리소스가 필요한 경우, 서버로부터 10번 요청을 해야하지만 CSS 스프라이트 기법을 사용하면 한 번의 요청으로 이미지를 받아온 후 화면에 렌더링할 수 있다.

# reflow와 repaint
    - 브라우저의 렌더링 과정
        - 렌더링 엔진은 HTML, CSS 파일을 받아와 파싱하면서 DOM, CSSOM 트리를 생성한다.
        - 이 둘을 합쳐 렌더 트리를 생성한다.
            - 렌더 트리는 실제 화면에 표시되는 노드들로 구성
            - CSS 속성에 따라 display: none과 같은 속승을 가진 노드는 렌더 트리에 포함되지 않음
            - visibility: hidden;은 공간은 차지하고 요소만 보이지 않도록 처리하는 것이므로 노드 트리에 표시된다.
        - 렌더 트리 구성이 끝나면 layout 단계가 실행되어 브라우저는 viewport 내에서 각 노드의 크기와 위치를 계산한다.
            - 렌더 트리 안에 있는 노드들이 가진 스타일 속성에 따라 화마ㅕㄴ에 출력될 정확한 레이아웃을 계산하는 것
            - 노드의 스타일 속성 중, vw, vh, %와 같은 상대적 단위가 있다면 이것들도 실제 pixel 숫자로 계산하여 처리된다.
            - 이 계산은 HTML 문서의 <html> 태그에 해당하는 최상위 렌더러에서 시작된다.
        - layout 단계가 끝나면 이제 브라우저는 계산된 값으로 실제 화면을 그리며 이 단계를 Paint라고 한다.
            - 위치와 크기, 스타일 속성을 통해 정확한 레이아웃 정보를 가진 노드들이 화면에 배치되고 컬러, 그라데이션, 이미지와 같은 부가적인 스타일 속성들도 적용된다.
    - reflow와 repaint
        - reflow
            - 브라우저가 렌더링을 하는 과정에서 layout 단계가 다시 수행되는 것
            - 브라우저 렌더링 최초 실행 후에 어떤 이벤트나 액션에 의해 레이아웃에 변경이 생기면 변경이 일어난 노드의 크기나 위치 등이 다시 계산되어야 한다.
            - 또한 변경된 요소에 영향을 받는 자식 노드들의 위치도 다시 계산이 필요하다.
            - reflow가 일어난 후에는 재계산된 결과를 다시 그려주는 repaint 단계가 실행됨
        - 이 과정에서 브라우저는 변경에 대해 최소한의 동작으로 반응하려고 한다.
            - 어떤 요소의 color나 visibility가 바뀌면 해당 요소에 대해서는 레이아웃을 재계산할 필요가 없으므로 화면에만 다시 그려지는 repaint만 일어난다.
            - 만약 요소의 위치가 바뀌면 해당 요소와 그 형제노드, 하위에 있는 자식노드에도 영향을 미쳐 재배치가 추가로 필요하므로 reflow와 repaint가 모두 일어난다.
        - 대표적인 reflow 케이스
            - 윈도우 resizing 시 ( viewport가 변경되었을 경우 )
            - 노드의 추가 혹은 제거
            - 요소의 위치, 크기가 변경되었을 경우
            - 폰트의 변경, 텍스트의 추가 혹은 제거, 이미지 크기 변경
        - CSS 스타일 속성 중에서도 reflow를 일으키는 속성이 있다.
            - 이러한 속성이 많다면 그만큼 연산과 재배치가 많이 일어나는 것이므로 성능 최적화를 위해서는 reflow를 피할 수 있는 속성으로 대체에서 사용하는 것이 좋다.
    - 성능 최적화를 위해..
        - 1. 레이아웃의 변화가 많은 경우, position에 fixed와 absolute를 사용한다.
            - 절대와 고정 포지션으로 배치된 요소는 다른 요소의 위치에 영향을 미치지 않는다.
        - 2. 애니메이션을 구현할 때는 프레임을 조절한다.
            - 요소를 0.1s당 1px씩 4번 이동시키면 부드러운 UX를 구현할 수 있지만 그만큼 많은 reflow와 repaint가 발생한다.
            - 대신 요소를 4px 이동하면 덜 부드럽지만 reflow를 1/4로 줄일 수 있다.
        - 3. 화면에서 숨겨지는 노드에는 visibility보다 display: none 속성을 사용한다.
            - visibility는 화면에 보이지 않더라도 레이아웃 상에서 공간을 차지하기 때문에 reflow의 영향을 받는다.
        - 4. CSS 하위 셀렉터를 최소화하고, 클래스 변경을 통해 스타일을 제어할 때는 최대한 마지막 단계에 있는 노드의 클래스를 변경시켜 영향받는 범위를 줄인다.
        - 5. js를 통해 스타일을 변경할 경우, cssText를 사용하여 한번에 설정하는 것이 좋다.
            - ex>
                const el = document.getElementById('refow-test');

                el.style.padding = '8px';
                el.style.width = '320px';
                el.style.height = '240px';
                // 3번의 reflow

                el.style.cssText = 'padding: 8px; width: 320px; height: 240px';
                // 1번의 reflow

# BFC( Block Formatting Context )
    - 다음 조건 중 하나 이상을 만족하는 HTML BOX
        - 1. float 값은 none이 아니다.
        - 2. position의 값은 static도 relative도 아니다.
        - 3. display 값은 table-cell, table-caption, inline-block, flex 또는 inline-flex이다.
        - 4. overflow 값은 표시되지 않는다.

# CSS에서 C는 Cascading을 의미하는데 이는 무엇인가? 또한 cascading system의 장점은?
    - Cascading은 계단 모양의 폭포를 의미하며 CSS에서 스타일 시트의 우선 순위를 지정하는 방식이 폭포수와 붙여진 의미
    - cascading system을 사용하였을 때의 장점은 HTML 요소마다 일일이 스타일을 지정하지 않아도 되므로 렌더링 속도와 코드의 양을 줄여 성능 향상에 기여할 수 있다.

# innerHTML, innerText, textContent
    - innerHTML과 innerText는 다루는 값이 text element인지 html element인지에 따라 차이가 난다.
    - element.innerText
        - 이 속성은 element 안의 text 값들만 가져온다.
    - element.innerHTML
        - innerText와는 달리 innerHTML은 element 안의 HTML이나 XML을 가져온다.
    - 값 설정하기
        - ex>
        function setInnerText() {
            const element = document.getElementById('content');

            element.innerText = "<div style="color:red">A</div>";
        }

        function setInnerHTML() {
            const element = document.getElementById('content');

            element.innerHTML = "<div style="color:red">A</div>";
        }

        - innerText
            - innerText에 html을 포함한 문자열을 입력하면, html 코드가 문자열 그대로 element안에 포함된다.
        - innerHTML
            - innerHTML 속성에 html 코드를 입력하면, html element가 element 안에 포함되게 된다.
    - textContent
        - Node의 속성으로 innerText와는 달리 <script>나 <style> 태그와 상관없이 해당 노드가 가지고 있는 텍스트 값을 그대로 읽는다.
        - innerText는 불필요한 공백을 제거하고 텍스트로 반환하지만 textContent는 모든 텍스트를 그대로 가져오는 차이점이 있다.
    - innerHTML
        - innerText와 textContent는 text/plain으로 파싱한 결과이지만 textContent는 raw text 그대로의 값을 가져오며, innerText는 내용 숨김이나 줄바꿈 같이 의도적인 스타일링이 들어간 후의 모습이 나온다.
        - innerHTML은 text/html으로 파싱한 결과이기 때문에 상대적으로 파싱이 느리다.
        - 또한 XSS 공격에 취약한 사례로 언급된다.
        - HTML5에서는 innerHTML과 함께 삽입된 <script> 태그가 실행되지 않도록 지정했지만, 여전히 다른 공격 루트들은 방어하지 못한다.
