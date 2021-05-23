# String

## concat
    - 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열 반환

    str.concat(str2, str3[, ..., strN]);

    const str1 = 'Hello';
    const str2 = 'World';

    console.log(str1.concat(' ', str2));    // Hello World

## split
    - String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눈다.