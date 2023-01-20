import Head from "next/head"
import { Provider } from "react-redux"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import App from "../src/App";
import { PreloaderPage } from "../src/components/preloaderPage";

import { wrapper } from '../src/store'

import '../public/styles/style.scss'


const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <meta httpEquiv="Content-type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      </Head>
      <App store={store}>
        {
          loading && (
            <PreloaderPage />
          )
        }
        <Component
          {...props}
        />
      </App>
    </Provider>
  )
}

export default MyApp;

// export default wrapper.withRedux(MyApp);
