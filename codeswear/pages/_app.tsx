import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Provider } from 'react-redux'
import store from '../redux_states/store'
export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>

    </>
  )

}
