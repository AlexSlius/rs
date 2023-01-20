export const localStorageSet = (key, data, isJson = false) => {
    localStorage.setItem(key, isJson ? JSON.stringify(data) : data)
}

export const localStorageGet = (key, isJson = false) => {
    if (typeof window != 'undefined')
        return isJson ? JSON.parse(localStorage.getItem(key)) : localStorage.getItem(key)

    return null;
}

export const localStorageRemove = (key) => {
    localStorage.removeItem(key)
}

export const localStorageAllClear = () => {
    localStorage.clear()
}

export const sessionStorageSet = (key, data, isJson = false) => {
    sessionStorage.setItem(key, isJson ? JSON.stringify(data) : data)
}

export const sessionStorageGet = (key, isJson = false) => {
    if (typeof window != 'undefined')
        return isJson ? JSON.parse(sessionStorage.getItem(key)) : sessionStorage.getItem(key)

    return null;
}
