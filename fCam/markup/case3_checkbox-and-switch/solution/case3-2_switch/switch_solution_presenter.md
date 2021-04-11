## Case3-2 : Switch - 출제자 해설코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Case3-2 : Switch - 출제자 해설코드</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/switch.css">
</head>
<body>
    <div class="container-doc">

        <div class="box_choice">
            <strong class="tit_choice">스위치 단독 타입</strong>
            
            <!-- normal 타입 -->
            <div class="item_choice type_alone">
                <input type="checkbox" id="switch1_1" class="inp_switch">
                <label for="switch1_1" class="lab_choice"></label>
            </div>

            <!-- checked 타입 -->
            <div class="item_choice type_alone">
                <input type="checkbox" id="switch1_2" class="inp_switch" checked="checked">
                <label for="switch1_2" class="lab_choice"></label>
            </div>
            
            <!-- disabled 타입 -->
            <div class="item_choice type_alone">
                <input type="checkbox" id="switch1_3" class="inp_switch" disabled="disabled">
                <label for="switch1_3" class="lab_choice"></label>
            </div>

            <!-- checked, disabled 타입 -->
            <div class="item_choice type_alone">
                <input type="checkbox" id="switch1_4" class="inp_switch" checked="checked" disabled="disabled">
                <label for="switch1_4" class="lab_choice"></label>
            </div>
        </div>

        <div class="box_choice">
            <strong class="tit_choice">스위치 + 텍스트 타입</strong>

            <!-- normal 타입 -->
            <div class="item_choice">
                <input type="checkbox" id="switch2_1" class="inp_switch">
                <label for="switch2_1" class="lab_choice">
                    <span class="txt_switch">normal</span>
                </label>
            </div>

            <!-- checked 타입 -->
            <div class="item_choice">
                <input type="checkbox" id="switch2_2" class="inp_switch" checked="checked">
                <label for="switch2_2" class="lab_choice">
                    <span class="txt_switch">checked</span>
                </label>
            </div>

            <!-- disabled 타입 -->
            <div class="item_choice">
                <input type="checkbox" id="switch2_3" class="inp_switch" disabled="disabled">
                <label for="switch2_3" class="lab_choice">
                    <span class="txt_switch">normal disabled</span>
                </label>
            </div>

            <!-- checked, disabled 타입 -->
            <div class="item_choice">
                <input type="checkbox" id="switch2_4" class="inp_switch" checked="checked" disabled="disabled">
                <label for="switch2_4" class="lab_choice">
                    <span class="txt_switch">checked disabled</span>
                </label>
            </div>
        </div>

        <div class="box_choice">
            <strong class="tit_choice">스위치 + 텍스트 반대 타입</strong>
            
            <!-- normal 타입 -->
            <div class="item_choice type_reverse">
                <input type="checkbox" id="agreeChk3_1" class="inp_switch">
                <label for="agreeChk3_1" class="lab_choice">
                    <span class="txt_switch">normal</span>
                </label>
            </div>

            <!-- checked 타입 -->
            <div class="item_choice type_reverse">
                <input type="checkbox" id="agreeChk3_2" class="inp_switch" checked="checked">
                <label for="agreeChk3_2" class="lab_choice">
                    <span class="txt_switch">checked</span>
                </label>
            </div>

            <!-- disabled 타입 -->
            <div class="item_choice type_reverse">
                <input type="checkbox" id="agreeChk3_3" class="inp_switch" disabled="disabled">
                <label for="agreeChk3_3" class="lab_choice">
                    <span class="txt_switch">normal disabled</span>
                </label>
            </div>

            <!-- checked, disabled 타입 -->
            <div class="item_choice type_reverse">
                <input type="checkbox" id="agreeChk3_4" class="inp_switch" checked="checked" disabled="disabled">
                <label for="agreeChk3_4" class="lab_choice">
                    <span class="txt_switch">checked disabled</span>
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
*{font-weight:500;font-family:"Noto Sans KR";font-size:14px;line-height:24px;color:#625F67}
input[type="checkbox"]{margin:0}

/* content */
.box_choice{margin:20px 0}
.tit_choice{display:block;margin:10px 0}

/* color */
$color1 : #4056c7;
$color2 : #97b3cd;
$color3 : #fff;

/* checkbox */
/* switch 스타일 작성 영역 */
.item_choice{
    display:inline-block;position:relative;vertical-align:top;
    .inp_switch{
        position:absolute;top:0;left:0;width:100%;height:100%;
        appearance:none;-webkit-appearance:none;-moz-appearance:none;cursor:pointer;
        &:checked + .lab_choice::before{background-color: $color1;}
        &:checked + .lab_choice::after{left:20px}
        &:disabled,
        &:disabled + .lab_choice,
        &:checked:disabled,
        &:checked:disabled + .lab_choice{cursor:not-allowed}
        &:disabled + .lab_choice::before,
        &:checked:disabled + .lab_choice::before{opacity: 0.4;}
    }
    .lab_choice{
        display:block;position:relative;padding-left:50px;cursor: pointer;
        .txt_switch{display:block;}
        &:before{
            position:absolute;top:0;left:0;width:40px;height:100%;border-radius:12px;background-color:$color2;content:"";
            -webkit-transition:background-color .3s ease;-moz-transition:background-color .3s ease;-ms-transition:background-color .3s ease;;transition:background-color .3s ease;
        }
        &:after{
            position:absolute;top:4px;left:4px;width:16px;height:16px;border-radius: 50%;background-color:$color3;content:"";
            -webkit-transition:all .3s ease;-moz-transition:all .3s ease;-ms-transition:all .3s ease;;transition:all .3s ease;
        }
    }
    &.type_alone .lab_choice{min-width:40px;min-height:24px;padding-left:0}
    &.type_reverse{
        .inp_switch:checked + .lab_choice:after{left:auto;right:4px}
        .lab_choice{
            padding-left:0;padding-right:50px;
            &:before{left:auto;right:0}
            &:after{left:auto;right:20px}
        }
    }
}
```