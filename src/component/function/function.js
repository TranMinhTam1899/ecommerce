
export const findIndex = (array, user) => {
    let result = -1;
    if (array && array.length > 0) {
        array.forEach((item, index) => {
            if (item.username === user.username && item.password === user.password) {
                result = index;
            }
        })
    }
    return result;
}

