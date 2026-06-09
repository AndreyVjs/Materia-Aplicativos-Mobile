/*
  Instalar a biblioteca do Slider:
  npx expo install @react-native-community/slider
*/
import { useState } from "react";
// Importei o componente "Button" para criar o botão de clique
import { View, Text, TextInput, Switch, ScrollView, StyleSheet, Button } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  // Estados que controlam os inputs em tempo real (enquanto o usuário digita/mexe)
  const [nome, setNome] = useState('');
  const [not, setNot] = useState(true);
  const [dif, setDif] = useState(5);

  // ESTADO ADICIONADO: Guarda os dados que só serão exibidos APÓS o clique do botão
  const [dadosConfirmados, setDadosConfirmados] = useState(null);

  // FUNÇÃO ADICIONADA: Disparada quando o botão é clicado
  const lidarComClique = () => {
    setDadosConfirmados({
      nomeConfirmado: nome,
      notificacaoConfirmada: not ? "Sim" : "Não",
      dificuldadeConfirmada: dif
    });
  };

  return (
    <View style={estilos.contenedor}>
      <ScrollView>
        <Text style={estilos.titulo}>Configurações de perfil</Text>
        
        {/* Campo de Nome - Altere o placeholder abaixo com o seu nome */}
        <View>
          <Text style={estilos.rotulo}>Nome:</Text>
          <TextInput 
            style={estilos.campo} 
            placeholder="Seu Nome Aqui..." 
            onChangeText={(valor) => { setNome(valor) }} 
            value={nome} 
          />
        </View>
        
        {/* Campo de Notificações */}
        <View style={estilos.linha}>
          <Text style={estilos.rotulo}>Receber notificações:</Text>
          <Switch 
            onValueChange={(valor) => { setNot(valor) }} 
            value={not} 
            trackColor={{ false: "#cc9999", true: "#81ffb0" }} 
            thumbColor={not ? "#2196f3" : '#f4f3f4'}
          />
        </View>
        
        {/* Campo de Dificuldade - Corrigido adicionando o value e o onValueChange */}
        <View>
          <Text style={estilos.rotulo}>Nível de dificuldade: {dif}</Text>
          <Slider 
            minimumValue={1} 
            maximumValue={10} 
            step={1} // Define que o slider vai de 1 em 1
            value={dif}
            onValueChange={(valor) => setDif(valor)}
            minimumTrackTintColor="#cc0000" 
            maximumTrackTintColor="#000" 
          />
        </View>

        {/* BOTÃO ADICIONADO: Quando clicado, chama a função que atualiza o quadro */}
        <View style={{ marginTop: 20, marginBottom: 10 }}>
          <Button title="Salvar Configurações" onPress={lidarComClique} color="#007aff" />
        </View>

        {/* QUADRO DE RESULTADO CONDICIONAL: 
            O operador "&&" faz com que esta View SÓ apareça na tela se 'dadosConfirmados' não for nulo */}
        {dadosConfirmados && (
          <View style={estilos.qdResultado}>
            <Text style={estilos.tituloResultado}>Dados Salvos:</Text>
            <Text style={estilos.textoResultado}><Text style={estilos.negrito}>Nome:</Text> {dadosConfirmados.nomeConfirmado}</Text>
            <Text style={estilos.textoResultado}><Text style={estilos.negrito}>Notificações:</Text> {dadosConfirmados.notificacaoConfirmada}</Text>
            <Text style={estilos.textoResultado}><Text style={estilos.negrito}>Dificuldade:</Text> {dadosConfirmados.dificuldadeConfirmada}</Text>
          </View>
        )}

      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 40,
    justifyContent: 'center',
    gap: 15
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#c00'
  },
  rotulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    padding: 5
  },
  campo: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 15
  },
  linha: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between', // Corrigido erro de digitação original (justyfyContent)
    alignItems: 'center',
    marginBottom: 25,
    gap: 15
  },
  qdResultado: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#007aff',
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1
  },
  // Estilos extras adicionados para deixar o resultado mais legível
  tituloResultado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007aff',
    marginBottom: 10
  },
  textoResultado: {
    fontSize: 16,
    marginBottom: 5,
    color: '#444'
  },
  negrito: {
    fontWeight: 'bold'
  }
});
