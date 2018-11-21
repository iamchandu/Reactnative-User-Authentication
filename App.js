import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './app/components/Login';
import AuthLoading from './app/components/AuthLoading';
import Home from './app/components/Home';
import Signup from './app/components/Signup';
import Products from './app/components/main/Products';


const AppStack = createStackNavigator({ Home: Home, Products: Products });
const AuthStack = createStackNavigator({ Login: Login, Signup: Signup });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));