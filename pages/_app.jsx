import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import GlobalStyle from 'styles/global-style';
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
import SubFooter from '../components/common/sub-footer';
import { createGlobalStyle } from 'styled-components';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());
  const router = useRouter();
  const loading = usePageLoading();

  return (
    <>
      <Head>
        <title>문화살롱 5120</title>

        {/* 모바일에서 input focus할 때 확대방지 */}
        <meta name="viewport" content="width=device-width, content='width=device-width; initial-scale=1.0; minimum-scale=1.0; maximum-scale=2.0; user-scalable=1;" />
      </Head>

      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <Frame>
              <Head>
                {/* 모바일에서 인풋 클릭 시 확대방지 */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scaleable=0"></meta>
              </Head>

              {loading ? (
                <SpinnerWrapper>
                  <DotSpinner width={18} height={18} marginRight={18} dotColor="#8536FF" />
                </SpinnerWrapper>
              ) : (
                <>
                  <CustomGlobalStyle />

                  <Navigation />

                  <Component {...pageProps} />
                  <Analytics />

                  {router.pathname === '/' && <Footer />}
                  {router.pathname === '/exhibition' && <SubFooter />}
                  {router.pathname === '/program' && <SubFooter />}
                  {router.pathname === '/notice' && <SubFooter />}
                  {router.pathname === '/about' && <SubFooter />}
                  {router.pathname === '/webzine' && <SubFooter />}
                </>
              )}
            </Frame>
          </RecoilRoot>
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

  max-width: 160rem;
  min-height: 100vh;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    padding: 0rem 1.6rem 2.4rem 1.6rem;
  }
`;

const SpinnerWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomGlobalStyle = createGlobalStyle`
  @media screen and (min-width: 480px) {
    body {
      overflow-x: hidden !important;
    }
  }
`;
