import { View, Text } from 'react-native'
import React from 'react'
import Exercicio01 from './src/components/Exercicio01'
import Exercicio2 from './src/components/Exercicio02'
import Exercicio03 from './src/components/Exercicio03'

const App = () => {
  return (
    <View>
      {/*comentário*/}
      {/*<Exercicio01 nome="Rayanna" /> */}
      {/*<Exercicio2 />*/}
      {<Exercicio03 />}
    </View>
  )
}

export default App