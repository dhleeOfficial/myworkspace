// Write Javascript code here!
/*
1. 각 item 클래스를 가진 div에 모두 클릭 이벤트 리스너를 add하는 방법 ( 비효율 )
2. event bubbling 성질을 이용하여 wrapper 클래스를 가진 div에서 클릭 이벤트 리스너를 
    한 번 등록하는 방법
    - wrapper이외의 곳이 클릭되었을 때는 context menu를 꺼줘야 한다. (document.body에 클릭 이벤트 리스너를 추가)
3. document.body에 클릭 이벤트 리스너를 달아서 모두 관리하는 방법
    - solution 2과 장단점이 있을 수 있으니 잘 고려해서 적용하자
    - 3번으로 하면 모든 클릭 이벤트에 대해서 처리해야 하기 때문에 분기문이 길어질 수 밖에 없다. 하지만 이벤트 리스너를 한 개만 등록하는 장점이 있다.
    - 2번으로 하면 wrapper에 대한 DOM이 사라질 때, removeEventListener가 되어 메모리 관리가 용이할 수 있음
    - 
*/
import './style.css'

const wrapper = document.querySelector('.wrapper');
const items = document.querySelectorAll('.item');

// solution 2
// wrapper.addEventListener('click', (e) => {
//     const targetElem = e.target;

//     if (!targetElem.classList.contains('item'))
//         return;
    
//     targetElem.classList.toggle('open');

//     items.forEach((elem) => {
//         if (elem !== targetElem) {
//             elem.classList.remove('open');
//         }
//     });
//     e.stopPropagation();
// });

// document.body.addEventListener('click', (e) => {
//     const targetElem = e.target

//     if (targetElem.classList.contains('context'))
//         return;

//     items.forEach((elem) => {
//         elem.classList.remove('open');
//     })
// })

// Solution 3
document.body.addEventListener('click', (e) => {
    const targetClassList = e.target.classList;

    if (targetClassList.contains('context'))
        return;
    
    if (targetClassList.contains('item')) {
        targetClassList.toggle('open')

        items.forEach((elem) => {
            if (elem !== e.target) {
                elem.classList.remove('open')
            }
        })
        return;
    }

    items.forEach((elem) => {
        elem.classList.remove('open')
    })
})