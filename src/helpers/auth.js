import Router from "next/router";

import { routersPages } from "../constants/next-routers";

export const isAuthRedirect = ({ res, page = 'login' }) => {
    if (res) {
        res.writeHead(302, {
            Location: `/${routersPages[page]}`,
        });
        res.end();
    } else {
        Router.push(`/${routersPages[page]}`);
    }
}