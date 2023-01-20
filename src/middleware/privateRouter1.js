import React from "react";
import Router from "next/router";


const WithPublickRoute = (WrappedComponent) => {
    const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

    // hocComponent.getInitialProps = async (context) => {
    //     // console.log("context: ", context);
    //     // const { isAuthorized } = context.store.getState().auth;

    //     // // Are you an authorized user or not?
    //     // if (isAuthorized) {
    //     //     // Handle server-side and client-side rendering.
    //     //     if (context.res) {
    //     //         context.res.writeHead(302, {
    //     //             Location: "/en",
    //     //         });
    //     //         context.res.end();
    //     //     } else {
    //     //         Router.replace("/en");
    //     //     }
    //     // } else if (WrappedComponent.getInitialProps) {
    //     //     const wrappedProps = await WrappedComponent.getInitialProps(context);
    //     //     return { ...wrappedProps };
    //     // }
    //     return { isValid: false };
    // }; 
    return hocComponent;
};

export default WithPublickRoute;