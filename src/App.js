import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Counter from './pages/Counter'
import SplashScreen from './pages/SplashScreen'
import { useState } from 'react'

const App = () => {
  const [isSplash, setSplash] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 2000)
  })

  return (
    <>
      {/* <Counter /> */}

      {/* <Home /> */}

      {/* <Login /> */}
      
      {isSplash ? <SplashScreen/> :  <Login/>}
    </>
  )
}

export default App