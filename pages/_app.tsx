import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/global-style';
import styleTheme from 'styles/style-theme';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <Head>
        {/* 모바일에서 input focus할 때 확대방지 */}
        <meta name="viewport" content="width=device-width, content='width=device-width; initial-scale=1.0; minimum-scale=1.0; maximum-scale=2.0; user-scalable=1;" />
      </Head>

      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={styleTheme}>
            <Frame>
              <ComponentFrame>
                <ComponentWrapper>
                  <Head>
                    {/* 모바일에서 인풋 클릭 시 확대방지 */}
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scaleable=0"></meta>
                  </Head>

                  <Component {...pageProps} />
                </ComponentWrapper>
              </ComponentFrame>
            </Frame>
          </ThemeProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

const Frame = styled.div`
  position: relative;
  width: 100vw;
`;

const ComponentFrame = styled.main`
  position: relative;
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 8px;
`;

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  // body 좌우 패딩
  padding-left: 20px;
  padding-right: 20px;

  min-height: 100vh;
`;
