
import Sobre from "";
import { createStaticNavigation, NavigationContainer } from 'expo-router/build/react-navigation';
import { View, StyleSheet } from 'react-native';
import MeuBotao from './MeuBotao';
export default function App(){
  return(<View>
    <MeuBotao titulo="Teste" cor="#4CAF50" aoPressionar={()=>{alert('TesteOK')}}/>
    <MeuBotao titulo="Teste2" cor="#F44336" aoPressionar={function(){
      alert('TesteOK2');
    }} />
    <MeuBotao titulo="Teste3" aoPressionar={()=>alert('TesteOK3')} />
  </View>)
}


const Stack = createNativeStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Sobre></Stack.Sobre>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
