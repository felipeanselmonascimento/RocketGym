import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import { Box } from '@gluestack-ui/themed'
import { gluestackUIConfig } from '../../config/gluestack-ui.config'

export function Routes() {

  const theme = DefaultTheme
  theme.colors.background = gluestackUIConfig.tokens.colors.gray700
  return (
    // box serve tbm para tirar o glitch
    <Box flex={1} bg='$gray700'>
      {/* // se nao quiser colocar a cor padrao de fundo em todas as telas so add no navigation container */}
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}