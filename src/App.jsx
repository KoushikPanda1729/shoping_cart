import React from 'react'
import ProductMap from './Coponents/ProductMap'
import Header from './Coponents/Header'
import ProviderContext from './Coponents/ProviderContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// App
const App = () => {
  return (
    <ProviderContext>
      <Header />
      <ProductMap />
      <ToastContainer position="bottom-right"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
    </ProviderContext>
  )
}

export default App