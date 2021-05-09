function solution(participant, completion) {
    let participantMap = new Map();

    participant.forEach(v => {
        if (!participantMap.has(v)) participantMap.set(v, 1);
        else participantMap.set(v, participantMap.get(v) + 1);
    });

    completion.forEach(v => {
        if (participantMap.has(v)) participantMap.set(v, participantMap.get(v) - 1);
    });

    for (let [key, value] of participantMap.entries()) {
        if (value === 1) return key;
    }
}

console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));