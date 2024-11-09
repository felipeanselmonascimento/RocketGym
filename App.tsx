import { Text, View, StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold }) //passando as fonts q quero carregar // primeiro valor booleano eu sei se font foi carregada ou n
  //sempre checar se a font foi carregada ou n
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#202024" }}>
      {fontsLoaded ? <Text>Home</Text> : <View/>}
      {/* Esse Statusbar e o q fica em cima mostrndo a bateria e etc */}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/> 
    </View>

   
  );
}
