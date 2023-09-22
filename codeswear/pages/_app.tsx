import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Provider } from 'react-redux'
import store from '../redux_states/store'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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
