## Case8 : Footer - 출제자 해설코드

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>02-footer (solution)</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="reset.css" />
    <link rel="stylesheet" href="solution.css" />
  </head>
  <body>
    <footer class="footer">
      <div class="footer-left-container">
        <div class="footer-logo">
          <img src="./images/logo.png" alt="logo fastcampus" />
        </div>
        <div class="footer-company-info">
          패스트캠퍼스(주)<br />
          사업자번호 : 810-86-00658<br />
          사무실 : 서울시 강남구 강남대로 364 미왕빌딩 15층
        </div>
      </div>

      <!-- 브라우저 사이즈에 따라 레이아웃 위치를 변경하기 위해 -->
      <div class="footer-right-container">
        <nav class="footer-menu-container">
          <ul class="footer-menu">
            <li class="footer-menu-item">
              <a href="#" class="footer-menu-item-link">회사소개</a>
            </li>
            <li class="footer-menu-item">
              <a href="#" class="footer-menu-item-link">이용약관</a>
            </li>
            <li class="footer-menu-item">
              <a href="#" class="footer-menu-item-link">개인정보처리방침</a>
            </li>
            <li class="footer-menu-item">
              <a href="#" class="footer-menu-item-link">취소/환불 정책</a>
            </li>
            <li class="footer-menu-item">
              <a href="#" class="footer-menu-item-link">자주 묻는 질문</a>
            </li>
            <li class="footer-menu-item">
              <a href="#" class="footer-menu-item-link">공지사항</a>
            </li>
          </ul>
        </nav>

        <nav class="footer-channel-container">
          <ul class="footer-channel">
            <li class="footer-channel-item">
              <a class="footer-channel-item-link" href="#">
                <img
                  class="footer-chnnel-item-icon"
                  src="./images/icon-facebook.png"
                  alt="facebook icon"
                />
              </a>
            </li>
            <li class="footer-channel-item">
              <a class="footer-channel-item-link" href="#">
                <img
                  class="footer-chnnel-item-icon"
                  src="./images/icon-instagram.png"
                  alt="instagram icon"
                />
              </a>
            </li>
            <li class="footer-channel-item">
              <a class="footer-channel-item-link" href="#">
                <img
                  class="footer-chnnel-item-icon"
                  src="./images/icon-youtube.png"
                  alt="youtube icon"
                />
              </a>
            </li>
            <li class="footer-channel-item">
              <a class="footer-channel-item-link" href="#">
                <img
                  class="footer-chnnel-item-icon"
                  src="./images/icon-naver.png"
                  alt="naver icon"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  </body>
</html>
```

```scss
// figma : https://www.figma.com/file/9FXkniEMPgZKtJY4GwP60z/Input?node-id=0%3A3

// color palette
$gray1: #333333;
$gray2: #4f4f4f;
$gray3: #828282;
$gray4: #bdbdbd;
$gray5: #e0e0e0;
$gray6: #f2f2f2;
$gray7: #f9f9f9;
$primary: #ed234b;

// color variable rename
$background-color: $gray2;
$text-color: $gray6;
$menu-text-color: $gray5;
$divider-color: $gray3;

// default
html,
body {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: $text-color;
}

.footer {
  display: flex;
  justify-content: space-between;
  background: $background-color;
  padding: 32px;

  .footer-left-container {
    .footer-logo {
      margin-bottom: 16px;
    }
  }

  .footer-right-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .footer-menu-container {
      .footer-menu {
        display: flex;

        .footer-menu-item {
          display: flex;
          align-items: center;

          &:not(:last-child)::after {
            content: "";
            background: $divider-color;
            height: 11px;
            width: 1px;
            margin: 0 10px;
          }

          .footer-menu-item-link {
            font-size: 12px;
            color: $menu-text-color;
            text-decoration: none;
          }
        }
      }
    }

    .footer-channel-container {
      .footer-channel {
        display: flex;
        justify-content: flex-end;

        .footer-channel-item {
          &:not(:last-child) {
            margin-right: 16px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 769px) {
  .footer {
    // 모바일인 경우 레이아웃 위치를 변경하기 위해
    flex-direction: column;
    padding: 24px 24px 40px 24px;

    .footer-right-container {
      // 모바일인 경우 레이아웃 순서를 변경하기 위해
      flex-direction: column-reverse;

      .footer-menu-container {
        .footer-menu {
          flex-direction: column;

          .footer-menu-item {
            //  브라우저 사이즈에 따라 메뉴의 divider를 변경하기 위해
            &:not(:last-child)::after {
              content: none;
            }

            &:not(:last-child) {
              margin-bottom: 8px;
            }

            .footer-menu-item-link {
              font-size: 14px;
            }
          }
        }
      }

      .footer-channel-container {
        margin: 32px 0 40px;

        .footer-channel {
          justify-content: flex-start;
        }
      }
    }
  }
}

```

### < Case8 : Footer > 문제와 같이 보면 좋은 팁
다른강사님께서 해당 출제문제를 본 후, 같이 확인하면 좋겠다고 주신 의견입니다.

#### HTML
푸터는 섹셔닝 콘텐츠나 섹셔닝 루트 예를 들어 `<body>`, `<section>`, `<article>` 등의 요소에서 사용할 수 있으며 작성자 정보나 저작권, 연락처 등의 정보를 담을 수 있습니다. 

이때 저작권 정보는 `<small>` 요소, 연락처 정보는 `<address>` 요소의 사용이 적절합니다.
HTML 제작 시 콘텐츠의 의미를 명확하게 구분할 수 있는 요소를 고민하는 것이 좀 더 양질의 마크업 코드를 구현할 수 있는 지름길이 될 수 있습니다.

그리고 마크업 시에는 웹접근성 관점에서의 고민도 함께 필요합니다. 
스크린리더 등에서 푸터 콘텐츠가 랜드마크 역할로 인식되도록 하려면 WAI-ARIA의 role=”contentinfo”를 추가하시면 됩니다.

푸터에 관한 내용은 공식 레퍼런스나 MDN을 참고하시기 바랍니다.

https://html.spec.whatwg.org/multipage/sections.html#the-footer-element 

https://developer.mozilla.org/ko/docs/Web/HTML/Element/footer 
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role

#### CSS
많은 고객들이 CSS 작업 시 푸터 영역을 항상 브라우저 하단에 위치하도록 요구하는 경우가 있습니다.
웹을 표현할 수 있는 디바이스가 많아지면서 화면의 크기가 다양해지기 때문에 발생하는 요구사항인데요. 반응형 디자인 시 CSS의 플렉스 관련 속성을 사용하면 이를 구현할 수 있습니다.
해당 기능 구현은 위한 마크업 및 CSS 코드는 다음과 같습니다.

```html
<div class="flex-container">
 <header class="header">헤더</header>
 <main class="main">메인콘텐츠</main>
 <footer class="footer">푸터</footer>
</div>
```

```css
.flex-container {
 display: flex;
 flex-direction: column;
}
 
.footer {
 margin-top: auto;
}
```
위 코드의 핵심은 푸터를 화면 하단에 배치하기 위해 auto 마진을 활용했다는 것입니다. 
그동안 auto 마진은 가운데 정렬 시 사용하는 트릭 정도로만 생각하고 계셨을텐데요 
플렉스 아이템에 적용하여 다양한 형태의 레이아웃 구현이 가능합니다.
반응형 디자인에서 플렉스 관련 속성의 활용이 중요해 지고 있습니다.
플렉스 관련 속성에 대해 보다 심도있는 관심과 학습을 권장합니다.
보다 다양한 플렉스 레이아웃 방법이 궁금하시다면 Naver D2 사이트를 참고하시기 바랍니다.
https://d2.naver.com/helloworld/8540176#ch4

