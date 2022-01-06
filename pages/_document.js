import Document, {Head, Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="de-DE">
        <Head>

        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}
