import { isObject } from "lodash"

export const isRespondServerSuccesss = (obj) => {
    if (!isObject(obj))
        return false;

    return obj?.status == "success";
}

export const isSuccessNewContact = (obj) => {
    if (!isObject(obj))
        return false;

    return obj?.status == "session_data_saved";
}

export const isExist = (obj) => {
    if (!isObject(obj))
        return false;

    return obj?.success == "exist";
}
