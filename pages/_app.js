import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from '../context/AuthContext'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
        <ToastContainer position="bottom-right" />
      </AuthProvider>
    </ChakraProvider>
  )
}
