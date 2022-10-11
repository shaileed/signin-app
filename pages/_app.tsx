import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux';
import store from '../store/store';
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}><div className="mx-auto" style={{width: "200px;"}}> <Component {...pageProps} /></div></Provider>
}

export default MyApp
