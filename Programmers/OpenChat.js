const behaviors = {
    Enter: 'Enter',
    Leave: 'Leave',
    Change: 'Change',
};

function solution(record) {
    let answer = [];
    const map = new Map();
    let arr = [];
    
    for (let i = 0; i < record.length; ++i) {
        const splitArr = record[i].split(' ');
        const behavior = splitArr[0];
        const uid = splitArr[1];
        
        if (behavior === behaviors.Enter) {
            arr.push({behavior, uid});
            map.set(uid, splitArr[2]);
        } else if (behavior === behaviors.Leave) {
            arr.push({behavior, uid});
        } else {
            map.set(uid, splitArr[2]);
        }
    }
    
    for (let i = 0; i < arr.length; ++i) {
        answer.push(`${map.get(arr[i].uid)}님이 ${arr[i].behavior === behaviors.Enter ? '들어왔습니다.' : '나갔습니다.'}`);
    }
    
    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));