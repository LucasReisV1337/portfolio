import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="Lucas Reis" />
          <meta
            name="description"
            content="Meu nome é Lucas Reis sou um Desenvolvedor FullStack do Brasil."
          />
          <meta
            name="keywords"
            content="Lucas, Lucas Reis, desenvolvedor, website, programador, front-end, back-end, fullstack, personal website, developer, portfolio, sites, web, são paulo, sp, JavaScript, TypeScript, ReactJS, NextJS, software, aplicações, Freelancer, profissional, e-commerce, Fullstack developer, Lucas Reis portfolio"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta name="theme-color" content="#00d9ff" />
          <meta name="copyright" content="Lucas Reis 2023" />
          <meta http-equiv="content-language" content="pt-br" />
          <meta property="og:image" content="/ogimage.png" />
          <meta property="og:title" content="Lucas Reis | Desenvolvedor" />
          <meta
            property="og:description"
            content="Meu nome é Lucas Reis sou um Desenvolvedor Front-end do Brasil."
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          <meta name="robots" content="index, follow" />
          <meta http-equiv="cache-control" content="no-cache" />
          <meta http-equiv="pragma" content="no-cache" />
          <meta name="language" content="pt-BR" />
          <meta name="rating" content="general" />
          <link rel="canonical" href="https://lucasreis.vercel.app/" />
          <meta property="og:url" content="https://lucasreis.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Lucas Reis Portfolio" />
          <meta name="twitter:image" content="/ogimage.png" />

          <link rel="icon" href="/icon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
