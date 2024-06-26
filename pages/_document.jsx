import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Analytics } from '@vercel/analytics/react';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          <link rel="shortcut icon" href="/favicon/favicon.ico" />

          {/* 홈페이지 */}
          <meta name="author" content="문화살롱 5120" />
          <meta name="keywords" content="문화살롱, 문화살롱 5120, 노원구 문화예술청년, 노원 예술 청년 지원, 경춘선 숲길 예술 센터" />
          <meta name="description" content="문화살롱 문화살롱5120 시작하는 예술가가 꿈을 키워갈 수 있는 기반을 마련하고 구민이 문화예술을 향유하는 일상 속의 장소" />
          <meta name="google-site-verification" content="UiuhLv-5agYlmxJYPGsL8PI7RvWIn7H-HPwlVeOJSKo" />
          {/* <meta name="naver-site-verification" content="d88add6497479cf3d927ba5d48cb70d7a0e51657" /> */}
          <meta name="naver-site-verification" content="6bbee0f307edc2ec713e39b070a26862d1155ecf" />

          {/* 오픈 그래프 */}
          <meta property="og:url" content="https://www.salon5120.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="문화살롱 5120" />
          <meta property="og:description" content="문화살롱 문화살롱5120 시작하는 예술가가 꿈을 키워갈 수 있는 기반을 마련하고 구민이 문화예술을 향유하는 일상 속의 장소" />
          <meta property="og:site_name" content="문화살롱, 문화살롱5120"></meta>
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:image" content="/image/seoimg.png" />
          <meta property="og:url" content="https://salon5120.com/" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315" />

          {/* 트위터용 */}
          <meta name="twitter:card" content="website" />
          <meta name="twitter:title" content="문화살롱 5120" />
          <meta name="twitter:description" content="문화살롱 문화살롱5120 시작하는 예술가가 꿈을 키워갈 수 있는 기반을 마련하고 구민이 문화예술을 향유하는 일상 속의 장소" />
          <meta name="twitter:image" content="/image/seoimg.png"></meta>

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest"></link>

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
          <Analytics />
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
