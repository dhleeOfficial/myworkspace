## Case1 : Form input - 출제자 해설코드

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>01-form-input (solution)</title>
    <link rel="stylesheet" href="../demo.css">
    <link rel="stylesheet" href="solution.css">
</head>
<body>
    <!-- 
        <label> <input type="text">를 사용해서 주어진 요구사항을 완성하세요. 
        디자인 시안에서는 Lable, placeholder 로 문구가 적혀있지만 디자인 예시이기 때문에,
        영상 강의에서는 실무라고 생각하고 '이름'을 입력받는 상황으로 진행하였습니다.
        readonly, disabled, error 케이스에서는 별도로 레이블을 연결하지 않았습니다.
    -->
    <div class="demo">
        <h1>01-form-input</h1>
        
        <h2>Dafault</h2>
        <div class="mgt32">
            <!-- label 활용법1 : 명시적 레이블 / input id 값을 label for로 연결시킨다 -->
            <!-- type here -->
            <label for="name" class="form-label">이름</label>
            <input id="name" type="text" placeholder="이름을 적어주세요." class="form-input">
        </div>
        
        <div class="mgt32">
            <!-- label 활용법2 : 암시적 레이블 / label으로 input을 감싼다. -->
            <!-- type here -->
            <label>
                <span class="form-label">이름</span>
                <input type="text" placeholder="이름을 적어주세요." class="form-input">
            </label>
        </div>
        
        <div class="mgt32">
            <!-- label 활용법3 : label을 적지 않는 경우 input에 aria-label=""을 적는다. -->
            <!-- https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute -->
            <!-- type here -->
            <input type="text" placeholder="이름을 적어주세요." aria-label="이름" class="form-input">
        </div>
        

        <h2>Readonly</h2>
        <div class="mgt32">
            <!-- type here -->
            <input type="text" placeholder="이름을 적어주세요." aria-label="이름" value="홍길동" class="form-input" readonly>
        </div>
        
        <h2>Disabled</h2>
        <div class="mgt32">
            <!-- type here -->
            <input type="text" placeholder="이름을 적어주세요." aria-label="이름" class="form-input" disabled>
        </div>
        
        <h2>Error</h2>
        <div class="mgt32">
            <!-- type here -->
            <input type="text" placeholder="이름을 적어주세요." aria-label="이름" value="123" class="form-input error">
            <p class="txt-error">잘못된 입력값입니다.</p>
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
$gray4: #BDBDBD;
$gray5: #E0E0E0;
$gray6: #F2F2F2;
$gray7: #F9F9F9;
$red: #EB5757;

// color variable rename
$f-bd-color: $gray5;
$f-bd-hover-color: $gray3;
$f-bd-focus-color: $gray1;
$f-bg-color: #fff;
$f-bg-readonly-color: $gray7;
$f-bg-disabled-color: $gray7;
$f-placeholder-color: $gray4;
$f-txt-color: $gray1;
$f-txt-disabled-color: $gray4;
$error-color: $red;

.form-label {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 500;
    color: $gray1;
}

input {
    -webkit-appearance: none;
    &:focus {
        outline: none;
    }
}

.form-input {
    display: block;
    padding: 0 16px;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: 1px solid $f-bd-color;
    background: $f-bg-color;
    font-size: 14px;
    color: $f-txt-color;
    &::placeholder {            /* Chrome, Safari, Firefox */
        color: $f-placeholder-color;
    }
    &:-ms-input-placeholder {   /* IE, Edge */
        color: $f-placeholder-color;
    }
    &::-ms-clear,
    &::-ms-reveal {             /* IE Input 태그 안 x 버튼 없애기 */
        display: none;
    }

    &:not([readonly]):not(:disabled:not(.error)) {
        &:hover {
            border-color: $f-bd-hover-color;
        }
        
        &:focus {
            border-color: $f-bd-focus-color;
        }
    }

    // (주의) :read-only는 IE에서 적용되지 않습니다.
    &[readonly] {
        background-color: $f-bg-readonly-color;
        cursor: default;
    }
    
    &:disabled {
        background-color: $f-bg-disabled-color;
        color: $f-txt-disabled-color;
        cursor: not-allowed;
    }

    &.error {
        border-color: $error-color;
        color: $error-color;
        & + .txt-error {
            display: block;
        }
    }
}

.txt-error {
    display: none;
    margin-top: 8px;
    font-size: 14px;
    color: $error-color;
}
```

### < Case01 : Form Input > 문제와 같이 보면 좋은 팁
다른강사님께서 해당 출제문제를 본 후, 같이 확인하면 좋겠다고 주신 의견입니다.

#### HTML
- 입력서식을 마크업 할 때 사용되는 input 요소의 경우 웹접근성 측면에서 1대1로 대응되는 레이블을 제공하는 것이 왜 필요한지,
input 요소와 label 요소를 연결할 경우의 이점에 대한 MDN문서
https://developer.mozilla.org/ko/docs/Web/HTML/Element/label

- input 요소에 사용되는 placeholder 속성의 경우 label 요소의 역할과 다름에도 불구하고 간혹 동일하게 취급하거나 사용되는 경우가 있습니다. 
  하지만 placeholder 속성과 label의 차이점이 있습니다.
  placeholder은 정보의 종류의 분야 관련하여 사용자에게 간단한 힌트를 제공하는 문자열이고
  label은 사용자 인터페이스에서 캡션을 나타냅니다.
https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefplaceholder

- WAI-ARIA가 무엇인지, aria 관련 속성들에 대한 MDN문서
https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA

- aria-label, aria-labelledby 속성을 비교해보고 어느 상황에서 쓸 수 있는지 아래글을 참고하시면 좋을 것 같습니다.
https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships?hl=ko
 
- 입력 값에 대한 에러 메시지가 어느 입력 서식에 대한 에러인지 이해할 수 있도록 aria-invalid, aria-describedby 속성 등을 적용하여 코드를 개선해보면 좋을 것 같습니다.
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute
https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21 

- 에러 메시지는 invalid 상황이 발생했을 때 입력 서식으로 초점이 이동하면 그때 에러 내용을 읽어주게 됩니다.
이 때, 실시간으로 갱신되는 정보의 경우 aria-live 속성을 함께 사용하면 사용자에게 도움이 됩니다.
(aria-live 예시 참고 영상)
https://www.youtube.com/watch?v=873O8JwI7K4

#### CSS
```css
input:focus {
  outline: none;
}
```
위의 코드를 사용할 경우 웹접근성 관점에서 어떤 문제가 있는지 생각해 보면 좋을 것 같습니다.
outline을 0 또는 none값을 주게되면 브라우저의 기본 포커스 스타일이 사라집니다.
만약 어떤 요소가 클릭하는 등 상호작용이 일어나는 요소라면 반드시 시각적으로 포커스 여부를 나타낼 수 있어야합니다.
포커스링이 중요한 이유는 마우스를 사용하지 못하는 키보드 사용자, 저시력 시각장애인 사용자에게 페이지탐색을 할 수 있게 도와주기 때문입니다.

```css
.form-input:not(.error):not([readonly]):not(:disabled):focus {
  border-color: #333333;
}
```
케이스 예제에서는 input 요소에 :focus 상황이 발생했을 때 기본 outline은 제거했지만 
위의 코드처럼 border의 color를 설정하여 키보드 탐색 시에 어떤 서식에 초점이 있는지
인식할 수 있도록 제공되어있습니다.

이와 더불어 웹접근성 관점에서 color의 명도대비를 어떻게 가지고 가는 것이 좋은지
아래 문서를 참고하면 좋을 것 같습니다.

https://webaim.org/articles/contrast/
https://colourcontrast.cc/
