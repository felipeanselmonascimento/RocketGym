import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { GluestackUIProvider } from '@gluestack-ui/themed'; // esse provider q vai compartilhar com nossa aplicacao os componentes do gluestack
// import { config } from '@gluestack-ui/config' //pasado para o gluestackprovider, ai dessa maneira estamosa usando thema padrao
import { config } from './config/gluestack-ui.config' //pasado para o gluestackprovider, ai dessa maneira estamosa usando thema configurado
import { Loading } from '@components/Loading';
import { SignUp } from '@screens/SignUp';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold }) //passando as fonts q quero carregar // primeiro valor booleano eu sei se font foi carregada ou n
  //sempre checar se a font foi carregada ou n
  return (
    <GluestackUIProvider config={config}>


      {/* Esse Statusbar e o q fica em cima mostrndo a bateria e etc */}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {fontsLoaded ? <SignUp /> : <Loading />}
     

    </GluestackUIProvider>

  );
}
