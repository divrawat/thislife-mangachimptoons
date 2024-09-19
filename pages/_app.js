import "@/styles/globals.css";
import NProgress from 'nprogress';
import Router from 'next/router';
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false })
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  /*
  useEffect(() => {
    const disableRightClick = (event) => { event.preventDefault(); };
    document.addEventListener('contextmenu', disableRightClick);
  }, []);
  */

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;