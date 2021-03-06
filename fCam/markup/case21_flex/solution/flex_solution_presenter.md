## Case21: Flex - 출제자 해설코드

```scss
@charset "utf-8";

/* variables */

$w100: 100%;
$half: 50%;
$large_box: 220px;
$small_box: 140px;
$basis_space: 40px;
$item_space: 10px;
$padding: 15px;
$box-shadow: 14px 17px 34px -20px rgba(0, 0, 0, 0.75);
$platform_tablet: 1024px;
$platform_pablet: 767px;
$platform_mobile: 480px;

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


/* mixin */

// 큰 박스 개수, 작은 박스 개수, 아이템 너비, 세로로 가장 긴 라인의 아이템 개수, 컬럼 숫자, 아이템의 높이
@mixin responsiveMixin($largeNum, $smallNum, $itemWidth, $itemNum, $colNum, $nthNum) {
    // 가장 긴 라인의 큰 박스 개수 + 작은 박스 + 기준 여백 위아래 2곳 + 각 아이템 별 하단 여백 * 아이템 개수
    height: calc(#{$large_box} * #{$largeNum} + #{$small_box} * #{$smallNum} + #{$basis_space} * 2 + #{$item_space} * #{$itemNum});
    .item {
        width: calc(#{$itemWidth} - #{$item_space});
        // 기본 박스 높이는 nthNum을 사용합니다.
        &:nth-of-type(#{$nthNum}n) {
            height: $small_box;
        }
        &:nth-of-type(#{$nthNum + 1}n) {
            height: $large_box;
        }
        // 수평 레이아웃을 위한 세팅입니다.
        &.horizontal {
            // 순서 세팅은 colNum을 사용합니다.
            @for $i from 1 through $colNum - 1 {
                &:nth-of-type(#{$colNum}n + #{$i}) {
                    order: #{$i};
                }
            }
            &:nth-of-type(#{$colNum}n) {
                order: #{$colNum};
            }
        }
    }
}

.flex_wrap {
    /* 나름의 css 선택자의 순서 규칙을 가지고 작성하면 다른 사람들이 유지보수할 때 패턴을 파악하기 용이합니다.
     * 저는 다음과 같은 규칙을 가지고 작성합니다.
     * display 속성 -> 포지션에 대한 속성 -> 너비 높이 -> 여백 -> 백그라운드 컬러 등 기타 속성 -> 텍스트 속성
     */
    display: flex;
    flex-flow: column wrap;
    align-content: space-between;
    width: $w100;
    max-width: $platform_tablet;
    margin: $basis_space auto;
    padding: $basis_space;
    background-color: #fafafa;
    counter-reset: items;
    @include responsiveMixin(2, 3, 25%, 5, 4, 2);
    .item {
        display: flex;
        position: relative;
        height: $small_box;
        margin-bottom: $item_space;
        padding: $padding;
        -webkit-box-shadow: $box-shadow;
        box-shadow: $box-shadow;
        color: #000;
        box-sizing: border-box;
        overflow: hidden;
        background-color: rgba(0, 0, 0, .3);
        img {
            position: absolute;
            left: $half;
            top: $half;
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
    @media (max-width: $platform_tablet) {
        @include responsiveMixin(2, 5, 33.33%, 7, 3, 3);
    }
    @media (max-width: $platform_pablet) {
        @include responsiveMixin(3, 7, $half, 10, 2, 2);
    }
    @media (max-width: $platform_mobile) {
        @include responsiveMixin(0, 0, $w100, 0, 1, 1);
        height: auto;
        // mobile class는 css 선택자의 우선순위를 높이기 위함입니다.(important 사용 지양을 위함)
        .item.mobile {
            width: $w100;
            height: $large_box;
        }
    }
}
```