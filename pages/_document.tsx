import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta />

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
