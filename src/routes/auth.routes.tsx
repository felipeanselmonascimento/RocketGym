import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

type AuthRoutes = {
    signIn: undefined;
    signUp: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator();

//funcao q vai retornar nossas rotas de autenticacao
export function AuthRoutes() {
    return (
        <Navigator>
            <Screen
                name="signIn"
                component={SignIn}
            />
            <Screen
                name="signUp"
                component={SignUp}
            />
        </Navigator>
    )
}