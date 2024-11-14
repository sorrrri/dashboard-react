// pages/_app.js
import '../styles/global.css';
import '../styles/base.scss';
import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
