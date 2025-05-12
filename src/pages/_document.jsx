import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
        <style>
          {`
            html, body {
              height: 100%;
              margin: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
            }
            #__next {
              background-color:rgb(246, 174, 174); //작업 확인 추후 삭제제
              width: 100%;
              height: 100%;
            }
          `}
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
