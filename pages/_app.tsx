import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="mx-auto" style={{width: "200px;"}}> <Component {...pageProps} /></div>
}

export default MyApp
