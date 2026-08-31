import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './fonte/telas/Home';
import Servico from './fonte/telas/Servicos';
import Produtos from './fonte/produtos/Produtos';

const Drawer = createDrawerNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Servico" component={Servico} />
        <Drawer.Screen name="Produtos" component={Produtos} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}
