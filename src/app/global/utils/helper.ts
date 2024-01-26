export async function saveState(stateName: string, state: any) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(stateName, serializedState);
    } catch (err) {
        console.log('Something went wrong on saveState helper: ', err);
    }
}

export async function deleteState(stateName: string) {
    try {
        localStorage.removeItem(stateName);
    } catch (err) {
        console.log('Something went wrong on deleteState helper: ', err);
    }
}

export function encrypt(obj: any, salt = 'NRLU') {
    obj = JSON.stringify(obj).split('');
    for (let i = 0, l = obj.length; i < l; i++)
        if (obj[i] == '{') obj[i] = '}';
        else if (obj[i] == '}') obj[i] = '{';
    const encode = encodeURI(salt + obj.join(''));
    return btoa(encode);
}

export function decrypt(obj: any, salt = 'NRLU') {
    obj = atob(obj);
    obj = decodeURI(obj);
    if (salt && obj.indexOf(salt) != 0)
        throw new Error('object cannot be decrypted');
    obj = obj.substring(salt.length).split('');
    for (let i = 0, l = obj.length; i < l; i++)
        if (obj[i] == '{') obj[i] = '}';
        else if (obj[i] == '}') obj[i] = '{';
    return JSON.parse(obj.join(''));
}
