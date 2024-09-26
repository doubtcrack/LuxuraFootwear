import React from 'react'
import Routess from './Routes/Routes'
import { ShopContextProvider } from './AppContext/Context'

const App = () => {
  return (
    <>
      <ShopContextProvider>

        <Routess/>
      </ShopContextProvider>

    </>
  )
}

export default App