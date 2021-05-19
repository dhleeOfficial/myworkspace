// function create() {
//     let result = new Array();

//     for (let i = 0; i < 10; ++i) {
//         result[i] = function() {
//             return i;
//         }
//     }

//     return result;
// }

function create() {
    let result = new Array();

    for (let i = 0; i < 10; ++i) {
        result[i] = function(num) {
            return function() {
                return i;
            }
        }(i);
    }

    return result;
}

let res = create();

for (const v of res) {
    console.log(v);
}

