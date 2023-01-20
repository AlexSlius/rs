import Router from "next/router";

import { wrapper } from "../../src/store"
import { routersPages } from "../constants/next-routers";

export const privateRouter = () => {
    return wrapper.getInitialProps(store => async ({ req, res, ...etc }) => {
        const { auth: { isAthorized } } = store.getState();

        console.log('Router: ', Router);

        // if (!isAthorized) {
        //     if (res) {
        //         res.writeHead(302, {
        //             Location: `/${routersPages['login']}`,
        //         });
        //         res.end();
        //     } else {
        //         Router.replace(`/${routersPages['login']}`);
        //     }
        // }

        return { props: {} };
    });
}