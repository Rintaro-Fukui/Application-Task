import Head from 'next/head';
import '../../node_modules/bulma/bulma.sass';

export const metadata = {
  title: 'AI Algorithm Design',
  description: 'created by Next.js + FastAPI',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
        <link rel="stylesheet" href="https://bulma.io/vendor/fontawesome-free-5.15.2-web/css/all.min.css" />
      </Head>
      <body>
        <div className="hero is-success">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                AI Algorithm Design
              </h1>
              <h2 className="subtitle is-6">
                created by RintaroFukui（2122098）
              </h2>
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
