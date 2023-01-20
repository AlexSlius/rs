import { statusLoader, statusLoaded } from "../constants/statuses";

export const isLoader = (status) => {
    return statusLoader == status;
}