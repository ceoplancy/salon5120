import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          <link rel="shortcut icon" href="favicon/favicon.ico" />

          {/* 홈페이지 */}
          <meta name="author" content="psw" />
          <meta name="keywords" content="developer, frontend, psw, web, blog" />
          <meta name="description" content="박상우의 개발 블로그 입니다." />

          {/* 오픈 그래프 */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="psw blog" />
          <meta property="og:description" content="psw blog" />
          <meta property="og:site_name" content="psw | blog"></meta>
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="https://psw-blog.vercel.app/" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315" />

          {/* 트위터용 */}
          <meta name="twitter:card" content="website" />
          <meta name="twitter:title" content="psw blog" />
          <meta name="twitter:description" content="박상우의 개발 블로그 입니다." />
          <meta name="twitter:image" content=""></meta>

          <style
            dangerouslySetInnerHTML={{
              __html: `</style>
  		  <link rel="preconnect" href="https://fonts.googleapis.com">
  		  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  		  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
    		<style>`,
            }}
          ></style>
        </Head>

        <body>
          <Main />
        </body>

        <NextScript />
      </Html>
    );
  }
}

CustomDocument.getInitialProps = async (ctx): Promise<any> => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    //css를 ssr해주는 메소드
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document?.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } catch (error) {
    console.log(error);
  } finally {
    sheet.seal();
  }
};
