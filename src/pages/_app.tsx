import { wrapper } from '@/store/store';
import { GlobalStyle } from '@/styles/globals';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
