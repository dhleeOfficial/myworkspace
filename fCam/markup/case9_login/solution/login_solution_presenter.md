## Case9 : Login - 출제자 해설코드



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>03-login (solution)</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="reset.css" />
    <link rel="stylesheet" href="solution.css" />
  </head>
  <body>
    <div class="login-container">
      <div class="login">
        <div class="login-logo">
          <img src="./images/fastcampus-logo.png" alt="fastcampus logo" />
        </div>
        <h1 class="login-title">
          인생을 바꾸는 교육,<br />
          패스트 캠퍼스.
        </h1>

        <form class="login-form-container">
          <div class="login-form-input-container">
            <input type="text" class="login-form-input" placeholder="아이디" />
            <input
              type="password"
              class="login-form-input"
              placeholder="비밀번호"
            />
          </div>

          <div class="login-option-container">
            <div class="login-form-checkbox-container">
              <input
                type="checkbox"
                class="login-form-checkbox"
                id="auto-login"
              />
              <label for="auto-login" class="login-form-checkbox-label">
                자동 로그인
              </label>
            </div>

            <div class="login-find-password-container">
              <a class="login-find-password-link" href="#">비밀번호 찾기</a>
            </div>
          </div>

          <div class="login-button-container">
            <button class="login-button">로그인</button>
          </div>

          <div class="login-signup-container">
            아직 계정이 없으신가요?
            <a href="#" class="login-signup-link">간편 회원가입</a>
          </div>
        </form>
      </div>
    </div>
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
$text-color: $gray1;
$input-text-color: $gray2;
$placeholder-text-color: $gray4;
$border-color: $gray5;
$border-focus-color: $gray1;
$button-primary-color: $primary;

// default
html,
body {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: $text-color;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .login {
    border: 1px solid $border-color;
    border-radius: 8px;
    padding: 60px 50px;
    width: 100%;
    max-width: 500px;

    .login-title {
      font-size: 30px;
      color: black;
      line-height: 43px;
      margin: 16px 0 56px;
    }

    .login-form-container {
      display: flex;
      flex-direction: column;

      .login-form-input-container {
        display: flex;
        flex-direction: column;

        .login-form-input {
          border: 1px solid $border-color;
          border-radius: 4px;
          padding: 16px;
          color: $input-text-color;
          outline: none;

          &::placeholder {
            color: $placeholder-text-color;
          }

          &:focus {
            border: 1px solid $border-focus-color;
          }

          &:not(:last-child) {
            margin-bottom: 12px;
          }
        }
      }

      .login-option-container {
        display: flex;
        justify-content: space-between;
        margin: 18px 0 42px;

        // 기본 HTML 체크박스 대신 이미지 활용
        .login-form-checkbox-container {
          .login-form-checkbox {
            display: none;

            + label {
              background: url("./images/checkbox-default.png") no-repeat;
              height: 16px;
              display: inline-block;
              padding-left: 22px;
              line-height: 16px;
            }

            &:checked + label {
              background: url("./images/checkbox-checked.png") no-repeat;
            }
          }
        }

        .login-find-password-container {
          .login-find-password-link {
            text-decoration: none;
            color: $text-color;
          }
        }
      }

      .login-button-container {
        .login-button {
          width: 100%;
          height: 48px;
          line-height: 48px;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          background: $button-primary-color;
          font-weight: bold;
          outline: none;
        }
      }

      .login-signup-container {
        margin-top: 32px;
        text-align: center;

        .login-signup-link {
          color: $text-color;
          font-weight: bold;
        }
      }
    }
  }
}

@media screen and (max-width: 769px) {
  .login-container {
    align-items: flex-start;

    .login {
      border: none;
      padding: 40px 20px;

      .login-title {
        font-size: 24px;
        line-height: 35px;
        margin: 16px 0 40px;
      }
    }
  }
}

```

### < Case9 : Login > 문제와 같이 보면 좋은 팁
다른강사님께서 해당 출제문제를 본 후, 같이 확인하면 좋겠다고 주신 의견입니다.

#### HTML
로그인과 같은 웹페이지에는 `<input>` 요소가 많이 사용되고 있습니다. 이때 아이디 또는 이메일 주소 그리고 비밀번호 등이 기본적으로 요구되는 값의 유형일 것입니다.

이런 유형의 경우 일번적인 아이디는 type=”text”, 이메일 유형의 아이디는 type=”email”, 비밀번호는 type=”password”를 사용하는 것이 좋습니다.

특히 type=”email” 유형의 경우 HTML5에 새롭게 등장한 값으로 입력 값이 이메일 형식이 아니면 오류 메시지를 보여줍니다.

`<input>` 요소나 type=”email” 값의 경우 자세한 설명이나 사용 사럐는 아래 MDN을 참고하시기 바랍니다.
https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input 
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email 

또한 입력 값이 필수인지 아닌지 이해할 수 있도록 HTML5의 required 속성을 사용하는 것도 도움이 될 수 있습니다.
만약 required 속성을 사용하지 못하는 상황이라면 스크린리더 사용자들이 해당 입력 값이 필수임을 인지할 수 있도록 aria-required 속성을 사용하는 것이 도움이 됩니다.

대다수의 개발자들이 해당 정보가 필수임을 시각적으로만 표현하려 하지만 화면을 볼 수 없는 보조기기 등의 사용자를 고려하여 프로그래밍 적 해결책을 찾는 것 또한 중요할 수 있다는 점을 잊지 마시기 바랍니다.

https://www.w3.org/TR/WCAG20-TECHS/ARIA2.html 
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute 

#### CSS
체크박스와 같은 경우 대다수 커스텀 디자인을 선호합니다.
디자인 시안을 바탕으로 구현하기 위해서는 체크박스 커스텀이 필수일 수 있습니다.

다만 디자인에만 초점을 맞추다보면 키보드 접근이 불가한 경우를 종종 볼 수 있는데 이는 웹접근성 관점을 고려하지 않은 제작 방식이라 할 수 있습니다. 

커스텀 체크박스 디자인의 핵샘은 체크박스 입력서식인 `<input>` 요소에 display: none을 적용하지 않는 것입니다.

많은 개발자가 `<input>` 요소에 display: none;을 적용한 후 `<label>` 등의 요소에 커스텀 체크박스를 배경이미지로 사용합니다. 그러나 이렇게 개발할 경우 키보드 접근과 조작 자체가 불가능해 집니다.

그렇다면 어떤 방법을 사용하면 키보드로도 접근 및 조작 가능한 커스텀 체크박스를 만들 수 있을까요?
`<input>` 요소에 display: none 대신 다음과 같은 트릭을 활용할 수 있습니다.
```css
.login-form-checkbox {
  opacity: 0;
  width: 16px;
  height: 16px;
  padding: 0;
  position: absolute;
  z-index: 100;
  background: transparent;
  cursor: pointer;
}
```
이제 키보드로 접근하여 스페이스 키를 눌러보면 `<label>` 요소에 미리 적용된 배경이미지가 변경되는 것을 확인할 수 있습니다.

그렇지만 여기서도 문제가 발생합니다. 

아이디나 비밀번화 같은 입력서식과 달리 체크박스 입력서식은 opacity: 0을 지정했기 때문에 키보드가 접근하긴 하지만 포커스가 시각적으로 표시되지 않습니다.

이 문제를 해결하기 위해 .login-form-checkbox:focus + label 요소를 선택자로 활용하여 아웃라인 디자인을 추가할 수 있습니다.

다만 이 경우 레이블 전체에 아웃라인이 발생하기 때문에 체크박스 배경에만 적용하고자 할 경우 배경이미지를 `<label>` 요소 자체가 아닌 다른 요소에 적용하는 것이 도움이 됩니다. 

다른 요소에 배경을 적용할 때 아래와 같은 형태의 마크업을 구성하여 문제를 해결해 보시기 바랍니다.
```html
<div class="login-form-checkbox-container">
 <input type="checkbox" class="login-form-checkbox" id="auto-login">
 <span class="custom-checkbox"></span>
 <label for="auto-login" class="login-form-checkbox-label">자동로그인</label>
</div>
```
간혹 실무에서 커스텀 체크박스 제작을 위해 `<input>` 요소가 아닌 `<span>` 등의 요소를 사용하는 경우가 있습니다.<br />이 경우 키보드 접근을 위해 tabindex=”0과 ”WAI-ARIA의 role=”checkbox”를 활용하여 키보드 사용자나 보조기기 사용자가 이를 이해하고 조작하게 할 수도 있습니다.

그러나 `<input>`이 아닌 `<span>` 등의 요소를 사용할 경우 입력값에 대한 처리나 마우스 및 키보드 관련 조작 기능을 모두 자바스크립트에서 처리를 해야한다는 것을 기억하시기 바랍니다. 

role=”checkbox”에 대한 참고사이트는 MDN을 살펴보시기 바랍니다.
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role
