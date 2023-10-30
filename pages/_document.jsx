import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          <link rel="shortcut icon" href="/favicon/favicon.ico" />

          {/* 홈페이지 */}
          <meta name="author" content="salon5120" />
          <meta name="keywords" content="salon5120 문화살롱 문화살롱5120" />
          <meta name="description" content="salon5120 문화살롱" />

          {/* 오픈 그래프 */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="salon5120 문화살롱5120" />
          <meta property="og:description" content="salon5120 문화살롱5120" />
          <meta property="og:site_name" content="salon5120 문화살롱5120"></meta>
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="https://salon5120.vercel.app" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315" />

          {/* 트위터용 */}
          <meta name="twitter:card" content="website" />
          <meta name="twitter:title" content="salon5120 문화살롱5120" />
          <meta name="twitter:description" content="salon5120 문화살롱5120" />
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

          {/* 카카오맵 */}
          <script src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js" charSet="UTF-8" />
        </Head>

        <body>
          <Main />
        </body>

        <NextScript />
      </Html>
    );
  }
}

CustomDocument.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    //css를 ssr해주는 메소드
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
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
