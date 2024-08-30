// src/pages/_app.js
import './globals.css';

function MyApp({ Component, pageProps }) {
  // Apply the layout defined by each page or default to a standard layout
  const getLayout = Component.getLayout || ((page) => <>{page}</>);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
