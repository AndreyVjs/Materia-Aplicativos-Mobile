import{View,Text}from 'react-native';
import {useNavigation}from '@react-navigation/native';
export default function Home(){

    const nav = useNavigation();
    return(
    <View>
        <Text>Bem vindo!!</Text>
        <Button onPress={() => nav.navigate('Sobre')}></Button>
    </View>)
}

//Criar o projeto
//npx create-expo-app@latest form  --template blank
