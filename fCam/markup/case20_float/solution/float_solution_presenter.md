## Case20 : Float - 출제자 해설코드

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4-1 Float (solution)</title>
    <link rel="stylesheet" href="solution.css">
</head>
<body>
    <h1>float</h1>
    <div class="float_wrap">
        <div class="item_wrap">
            <!-- 각 레이아웃이 나눠지는 만큼 큰 덩어리 단위로 우선 구분지어줍니다. -->
            <div class="item large"><img src="./img/box_1.jpg" alt="" /></div>
            <!-- 큰 덩어리 단위로 감싸야 하는 이유가 충분하다면 감싸야합니다. -->
            <div class="item_child_wrap">
                <div class="item small"><img src="./img/box_2.jpg" alt="" /></div>
                <div class="item small"><img src="./img/box_3.jpg" alt="" /></div>
            </div>
            <div class="item large"><img src="./img/box_4.jpg" alt=""></div>
        </div>
        <div class="item_wrap">
            <div class="item_child_wrap">
                <div class="item half small"><img src="./img/box_5.jpg" alt="" /></div>
                <div class="item half small"><img src="./img/box_6.jpg" alt="" /></div>
                <div class="item small w-100"><img src="./img/box_7.jpg" alt="" /></div>
            </div>
            <div class="item large"><img src="./img/box_8.jpg" alt=""></div>
        </div>
    </div>
</body>
</html>
```

```scss
@charset "utf-8";

/* variables */

$w100: 100%;
$half: 50%;
$third: 33.33%;
$large_box: 300px;
$small_box: 150px;
$basis_space: 40px;
$padding: 15px;
$box-shadow: 14px 17px 34px -20px rgba(0, 0, 0, 0.75);

/* reset */

*,
*:before,
*:after {
    box-sizing: border-box;
}

*:focus {
    outline: none;
}

html,
body {
    position: relative;
    width: $w100;
    height: $w100;
    padding: 0;
    margin: 0;
}

h1 {
    text-align: center;
    margin: 35px auto 0;
}

.float_wrap {
    display: block;
    width: $w100;
    max-width: 1024px;
    margin: $basis_space auto;
    padding: $basis_space;
    background-color: #fafafa;
    counter-reset: items;
    .item_wrap {
        display: block;
        /* float을 해제하는 방법들은 다양합니다. */
        &:after {
            content: '';
            display: block;
            clear: both;
        }
        .item {
            float: left;
            width: $third;
            position: relative;
            height: $small_box;
            padding: $padding;
            box-sizing: border-box;
            overflow: hidden;
            &.large {
                height: $large_box;
            }
            &.small {
                height: $small_box;
            }
            img {
                position: absolute;
                left: $half;
                top: $half;
                height: 100%;
                -webkit-transform: translate3d(-$half, -$half, 0);
                transform: translate3d(-$half, -$half, 0);
            }
            &:before {
                counter-increment: items;
                content: counter(items);
                position: relative;
                z-index: 1;
                color: #fff;
            }
        }
        .item_child_wrap {
            display: block;
            float: left;
            width: $third;
            .item {
                float: none;
                width: 100%;
                &.half {
                    width: $half;
                }
            }
        }
        &:nth-of-type(2) {
            .item_child_wrap {
                width: 66.66%;
                .item {
                    float: left;
                }
                .w-100 img {
                    width: 100%;
                }
            }
            .item:last-of-type {
                float: right;
            }
        }
    }
}
```