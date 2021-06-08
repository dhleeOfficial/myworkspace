function typeCheck(object) {
    const proxy = new Proxy(object, {
        set: (obj, prop, value) => {
            const idx = prop.lastIndexOf('_');
            
            if (idx > -1) {
                const type = prop.substring(idx + 1, prop.length);

                if (type === 'string') {
                    if (typeof value !== 'string') throw new Error();
                } else if (type === 'int') {
                    if (!Number.isInteger(value)) throw new Error();
                } else if (type === 'float') {
                    if (!!(value % 1) !== true) throw new Error();
                } else if (type === 'number') {
                    if (typeof value !== 'number') throw new Error();
                } else if (type === 'bool') {
                    if (typeof value !== 'boolean') throw new Error();
                }
            }
            obj[prop] = value;
        }
    })

    return proxy;
}

const obj = {
    age_int: 2,
    name_string: "Adam",
    job: null
}

const validate = typeCheck(obj);

// validate.age_int = 2.25;
validate.job = 'fireman';
validate.address_string ='20';
validate.ss_float = 12.22;

console.log(validate);