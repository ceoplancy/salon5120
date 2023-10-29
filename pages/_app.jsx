import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import GlobalStyle from 'styles/global-style';
import styleTheme from 'styles/style-theme';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from 'react-query/devtools';
import Navigation from 'components/common/navigation';
import Footer from 'components/common/footer';
import { useRouter } from 'next/router';
import usePageLoading from 'hooks/usePageLoading';
import DotSpinner from 'components/common/dot-spinner';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());
  const router = useRouter();
  const loading = usePageLoading();

  return (
    <>
      <Head>
        {/* 모바일에서 input focus할 때 확대방지 */}
        <meta name="viewport" content="width=device-width, content='width=device-width; initial-scale=1.0; minimum-scale=1.0; maximum-scale=2.0; user-scalable=1;" />
        <title>salon5120</title>
      </Head>

      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={styleTheme}>
            <RecoilRoot>
              <Navigation />

              <Frame>
                <Head>
                  {/* 모바일에서 인풋 클릭 시 확대방지 */}
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scaleable=0"></meta>
                </Head>

                {/* {loading ? <DotSpinner width={18} height={18} marginRight={18} dotColor="#4141E7" /> : <Component {...pageProps} />} */}
                <Component {...pageProps} />
              </Frame>

              {router.pathname === '/' && <Footer />}
            </RecoilRoot>
          </ThemeProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

const Frame = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-left: 6rem;
  padding-right: 6rem;

  max-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;

  @media screen and (max-width: 520px) {
    max-width: 52rem;
    padding: 2.4rem 1.6rem;
  }
`;