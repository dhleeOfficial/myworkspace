## Case3-1 : checkbox - 출제자 해설코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>check box</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/checkbox.css">
</head>
<body>
    <div class="container-doc">

        <!-- icon 클래스 -->
        <span class="ico_comm ico_choice"></span>

        <div class="box_choice">
            <strong class="tit_choice">체크박스 단독 타입</strong>
            
            <!-- normal 타입 -->
            <div class="item_choice type_alone">
                <input type="checkbox" id="agreeChk1_1" class="inp_choice">
                <label for="agreeChk1_1" class="lab_choice">
                    <span class="ico_comm ico_choice"></span>
                </label>
            </div>

            <!-- checked 타입 -->
            <div class="item_choice type_alone">
                <input type="checkbox" id="agreeChk1_2" class="inp_choice" checked="checked">
                <label for="agreeChk1_2" class="lab_choice">
                    <span class="ico_comm ico_choice"></span>
                </label>
            </div>
            
            <!-- disabled 타입 -->
            <div class="item_choice type_alone">
                <input type="checkbox" id="agreeChk1_3" class="inp_choice" disabled="disabled">
                <label for="agreeChk1_3" class="lab_choice">
                    <span class="ico_comm ico_choice"></span>
                </label>
            </div>

            <!-- checked, disabled 타입 -->
            <div class="item_choice type_alone">
                <input type="checkbox" id="agreeChk1_4" class="inp_choice" checked="checked" disabled="disabled">
                <label for="agreeChk1_4" class="lab_choice">
                    <span class="ico_comm ico_choice"></span>
                </label>
            </div>
        </div>

        <div class="box_choice">
            <strong class="tit_choice">체크박스 + 텍스트 타입</strong>

            <!-- normal 타입 -->
            <div class="item_choice">
                <input type="checkbox" id="agreeChk2_1" class="inp_choice">
                <label for="agreeChk2_1" class="lab_choice">
                    <span class="ico_comm ico_choice"></span>
                    normal
                </label>
            </div>

            <!-- checked 타입 -->
            <div class="item_choice">
                <input type="checkbox" id="agreeChk2_2" class="inp_choice" checked="checked">
                <label for="agreeChk2_2" class="lab_choice">
                    <span class="ico_comm ico_choice"></span>
                    checked
                </label>
            </div>

            <!-- disabled 타입 -->
            <div class="item_choice">
                <input type="checkbox" id="agreeChk2_3" class="inp_choice" disabled="disabled">
                <label for="agreeChk2_3" class="lab_choice">
                    <span class="ico_comm ico_choice"></span>
                    normal disabled
                </label>
            </div>

            <!-- checked, disabled 타입 -->
            <div class="item_choice">
                <input type="checkbox" id="agreeChk2_4" class="inp_choice" checked="checked" disabled="disabled">
                <label for="agreeChk2_4" class="lab_choice">
                    <span class="ico_comm ico_choice"></span>
                    checked disabled
                </label>
            </div>
        </div>

        <div class="box_choice">
            <strong class="tit_choice">체크박스 + 텍스트 2줄이상 길어진 타입</strong>
            
            <!-- normal 타입 -->
            <div class="item_choice">
                <input type="checkbox" id="agreeChk3_1" class="inp_choice">
                <label for="agreeChk3_1" class="lab_choice">
                    <span class="ico_comm ico_choice"></span>
                    normal normal normal
                </label>
            </div>

            <!-- checked 타입 -->
            <div class="item_choice">
                <input type="checkbox" id="agreeChk3_2" class="inp_choice" checked="checked">
                <label for="agreeChk3_2" class="lab_choice">
                    <span class="ico_comm ico_choice"></span>
                    checked checked checked
                </label>
            </div>

            <!-- disabled 타입 -->
            <div class="item_choice">
                <input type="checkbox" id="agreeChk3_3" class="inp_choice" disabled="disabled">
                <label for="agreeChk3_3" class="lab_choice">
                    <span class="ico_comm ico_choice"></span>
                    normal disabled normal disabled normal disabled
                </label>
            </div>

            <!-- checked, disabled 타입 -->
            <div class="item_choice">
                <input type="checkbox" id="agreeChk3_4" class="inp_choice" checked="checked" disabled="disabled">
                <label for="agreeChk3_4" class="lab_choice">
                    <span class="ico_comm ico_choice"></span>
                    checked disabled checked disabled checked disabled
                </label>
            </div>
        </div>
    </div>
</body>
</html>
```

```scss
@charset "UTF-8";

/* reset */
*{font-weight:500;font-family:"Noto Sans KR";color:#625F67}
input[type="checkbox"]{margin:0}

/* sprite */
.ico_comm{display:inline-block;overflow:hidden;font-size:0;line-height:0;background:url(../images/ico_comm.png) no-repeat 0 0;text-indent:-9999px;vertical-align:top}
.ico_choice{width:18px;height:18px;background-position:0 0}

/* content */
.box_choice{margin:20px 0}
.tit_choice{display:block;margin:10px 0}

/* checkbox */
/* checkbox 스타일 작성 영역 */
.item_choice{
    display:inline-block;position:relative;max-width:150px;vertical-align:top;
    .inp_choice{
        position:absolute;top:0;left:0;width:18px;height:18px;
        appearance:none;-webkit-appearance:none;-moz-appearance:none;cursor:pointer;
        &:checked + .lab_choice .ico_choice{background-position:-20px 0;pointer-events:none}
        &:disabled,
        &:checked:disabled{cursor:not-allowed}
        &:disabled + .lab_choice,
        &:checked:disabled + .lab_choice{cursor:not-allowed}
        &:disabled + .lab_choice .ico_choice{background-position:-40px 0}
        &:checked:disabled + .lab_choice .ico_choice{background-position:-60px 0}
    }
    .lab_choice{
        display:block;position:relative;padding-left:26px;font-size:14px;line-height:18px;cursor:pointer;
        .ico_choice{position:absolute;top:0;left:0;background-color:#fff}
    }
    &.type_alone .lab_choice{min-width:18px;min-height:18px;padding-left:0}
}
```

### < Case03 : Form checkbox > 문제와 같이 보면 좋은 팁
다른강사님께서 해당 출제문제를 본 후, 같이 확인하면 좋겠다고 주신 의견입니다.

#### HTML
- checkbox 단톡 타입의 경우 label 요소에 label 텍스트가 존재 하지 않는 구조이므로  
  aria-label 속성을 활용하여 checkbox가 어떤 용도인지를 이해할 수 있도록 수정해보면 좋을 것 같습니다. 
  그 이유는 모든 입력 서식은 1대1로 대응되는 레이블이 필요하기 때문입니다.

https://developer.mozilla.org/ko/docs/Web/HTML/Element/label

#### CSS
- CSS Sprite와 IR 기법도 함께 연결해서 생각해보면 좋을 것 같습니다.
  그리고 현재 solution에서 사용하고 있는 text-indent를 활용한 IR기법의 경우 성능 저하를 불러올 수 있기에 다른 방법을 사용하여 수정하면 좋을 것 같습니다.
  https://nuli.navercorp.com/community/article/1132804?email=true

- appearance 속성에 사용하는 vendor prefix의 경우 CSS 작업 시 일일이 부여하는 방식보다 
  Sass의 Mixin을 활용하거나 추후 Webpack 환경에서 PostCSS Plugin인 autoprefixer로 처리할 수 있습니다.

- pointer-events의 설명 및 참고예시 입니다.
  https://developer.mozilla.org/ko/docs/Web/CSS/pointer-events
  https://css-tricks.com/almanac/properties/p/pointer-events/