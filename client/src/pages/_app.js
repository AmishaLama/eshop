import '@/styles/globals.css'
import {Provider} from 'react-redux'
import store from '../redux/store/index'

export default function App({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <h1>Hello</h1>
    <Component {...pageProps} />
    </Provider>
  )
}
