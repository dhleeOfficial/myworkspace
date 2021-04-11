## Case2 : Form textarea - 출제자 해설코드

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>02-form-textarea (solution)</title>
    <link rel="stylesheet" href="../demo.css">
    <link rel="stylesheet" href="solution.css">
</head>
<body>
    <!-- textarea를 사용해서 주어진 요구사항을 완성하세요. -->
    <div class="demo">
        <h1>02-form-textarea</h1>
        
        <label class="form-label mgt32" for="textarea1">
            1. textarea 스타일 작성<br>
            2. 세로 5줄 입력이 가능하도록<br>
            3. resize 되지 않도록<br>
            4. 내부 스크롤 스타일링 (가로폭 4px, 배경색 rgba(black,0.2))
        </label>
        <div class="mgt16">
            <!-- type here -->
            <textarea rows="5" class="form-textarea" placeholder="내용을 입력하세요">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corporis unde, sequi tempore laborum excepturi autem deleniti aliquid eum vitae sunt, beatae omnis sapiente amet, nobis odio et cumque quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus ex mollitia! Incidunt quas dolores officia itaque quasi animi debitis officiis, ullam nemo culpa dignissimos consequatur. Nobis accusantium totam vel.</textarea>
            <textarea rows="5" class="form-textarea mgt16" placeholder="내용을 입력하세요" readonly>123</textarea>
            <textarea rows="5" class="form-textarea mgt16" placeholder="내용을 입력하세요" disabled>123</textarea>
        </div>

        <label class="form-label mgt32" for="textarea2">
            (번외) textarea 태그를 외에 입력창을 구현할 수 있는 다른 방법
        </label>
        <div class="mgt16">
            <div class="form-textarea" contenteditable="true"></div>
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
    font-weight: 700;
    color: $f-txt-color;
}

input, textarea {
    -webkit-appearance: none;
    &:focus {
        outline: none;
    }
}

.form-input,
.form-textarea {
    display: block;
    padding: 0 16px; 
    width: 100%;
    height: 48px; 
    border-radius: 4px;
    border: 1px solid $f-bd-color;
    background: $f-bg-color;
    font-size: 14px;
    color: $f-txt-color;
    // 스크롤 스타일링을 해보세요.
    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background-color: rgba(black, 0.2);
    }

    &::placeholder {            /* Chrome, Safari, Firefox */
        color: $f-placeholder-color;
    }
    
    &:-ms-input-placeholder {   /* IE, Edge */
        color: $f-placeholder-color;
    }

    &.error {
        border-color: $error-color;
        color: $error-color;
        & + .txt-error {
            display: block;
        }
    }
    
    &:not(.error):not([readonly]):not(:disabled) {
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
}

.form-textarea {
    padding: 16px;
    height: auto;
    resize: none;
}

.txt-error {
    display: none;
    margin-top: 8px;
    font-size: 14px;
    color: $error-color;
}
```

### < Case02 : Form Textarea > 문제와 같이 보면 좋은 팁
다른강사님께서 해당 출제문제를 본 후, 같이 확인하면 좋겠다고 주신 의견입니다.

#### HTML
- 코드에서 textarea 요소에 적절한 label 요소가 제공되도록 수정해보면 좋을 것 같습니다. 
그 이유는 모든 입력 서식은 1대1로 대응되는 label 요소를 가져야하기 때문입니다.
만약 label 요소가 없다면 aria-label이나 aria-labelledby 속성의 활용이 도움이 될 것 입니다.

- input 요소에 사용되는 placeholder 속성의 경우 label 요소의 역할과 다름에도 불구하고 간혹 동일하게 취급하거나 사용되는 경우가 있습니다. 
  하지만 placeholder 속성과 label의 차이점이 있습니다.
  placeholder은 정보의 종류의 분야 관련하여 사용자에게 간단한 힌트를 제공하는 문자열이고
  label은 사용자 인터페이스에서 캡션을 나타냅니다.
  https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefplaceholder

예시)
```html
<textarea id="textarea1" class="form-textarea" rows="5" aria-label="가입인사" placeholder="내용을 입력하세요."></textarea>
```

- 웹접근성 관점에서 입력 값에 대한 에러 메시지가 어느 입력 서식에 대한 에러인지 이해할 수 있도록 `aria-invalid,  aria-describedby` 속성 등을 적용하여 좀 더 양질의 코드를 경험하고 활용할 수 있도록 코드를 수정하는 것을 권장합니다.
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute
https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21 

예시)
```html
<div class="mgt16">
    <textarea class="form-textarea error" rows="5" placeholder="내용을 입력aria-describedby="errorMessage" aria-invalid="true"></textarea>
    <p class="txt-error" id="errorMessage">에러 메시지r</p>
</div>
```

- 에러 메시지는 invalid 상황이 발생했을 때 입력 서식으로 초점이 이동하면 그때 에러 내용을 읽어주게 됩니다.
그러므로 실시간으로 갱신되는 정보의 경우 aria-live 속성을 함께 사용하는 것도 도움이 됩니다.

aria-live 예시 참고 영상
https://www.youtube.com/watch?v=873O8JwI7K4

contenteditable 속성
https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/contenteditable 

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