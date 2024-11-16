import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { Home } from '@screens/Home';
import { Exercise } from '@screens/Exercise';
import { Profile } from '@screens/Profile';
import { History } from '@screens/History';

import { gluestackUIConfig } from '../../config/gluestack-ui.config'

import HomeSvg from '@assets/home.svg'
import HistorySvg from '@assets/history.svg'
import ProfileSvg from '@assets/profile.svg'
import { Platform } from 'react-native';


type AppRoutes = {
    home: undefined;
    exercise: undefined;
    history: undefined;
    profile: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

//funcao q vai retornar nossas rotas da aplicacao
export function AppRoutes() {

    const { tokens } = gluestackUIConfig    
    const iconSize = tokens.space["6"]

    return (
        <Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: tokens.colors.green300,
            tabBarInactiveTintColor: tokens.colors.gray200,
            tabBarStyle: {
                backgroundColor: tokens.colors.gray600,
                borderTopWidth: 0,
                height: Platform.OS === "android" ? "auto" : 96,
                paddingBottom: tokens.space["10"],
                paddingTop: tokens.space["6"]
            }
            }}>
            <Screen
                name="home"
                component={Home}
                options={{ tabBarIcon: ({ color }) => <HomeSvg fill={color} width={iconSize} height={iconSize}/> }}
            />
            <Screen
                name="history"
                component={History}
                options={{ tabBarIcon: ({ color }) => <HistorySvg fill={color} width={iconSize} height={iconSize}/> }}
            />
              <Screen
                name="profile"
                component={Profile}
                options={{ tabBarIcon: ({ color }) => <ProfileSvg fill={color} width={iconSize} height={iconSize}/> }}
            />
                <Screen
                name="exercise"
                component={Exercise}
                options={{ tabBarButton: () => null }}
                //passando como null, estamos falando q nao queros ele como um botao
            />
        </Navigator>
    )
}