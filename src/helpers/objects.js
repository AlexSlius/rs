import { isObject } from "lodash"

export const objectToAnArrayOfobject = (obj) => {
    if (!isObject(obj))
        return [];

    return Object.keys(obj).map((key) => ({ [key]: obj[key] }))
}