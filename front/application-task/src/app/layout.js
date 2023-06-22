import Head from 'next/head';
import '../../node_modules/bulma/bulma.sass';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
        <link rel="stylesheet" href="https://bulma.io/vendor/fontawesome-free-5.15.2-web/css/all.min.css" />
      </Head>
      <body>
        <div class="hero is-success">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                AI Algorithm Design
              </h1>
              <h2 class="subtitle is-6">
                created by RintaroFukui（2122098）
              </h2>
              {/* <p>
                This application was created using Next.js and FastAPI.
              </p> */}
            </div>
          </div>
        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
