import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import theme from './theme.js'
import GlobalSate from './context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalSate>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </GlobalSate>
)
