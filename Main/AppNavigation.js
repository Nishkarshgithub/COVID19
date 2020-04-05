import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { NavigationConstant } from './Constants/EssentialConstant';
import AppLoading_Component from './Pages/AppLoading';
import Home_Component from './Pages/Home';
import Get_Start_Component from './Pages/Get_Started';
import BottomTabNavigator from './BottomNavigator';


const AppStack = createStackNavigator(
  {
    // App Main Screens Load
    HOME_SCREEN: Home_Component,
  },
  {
    initialRouteName: NavigationConstant.Home,
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.FadeFromBottomAndroid,
    },
  }
);


const AuthStack = createStackNavigator(
  {
    // Auth Screens Load
    GET_START_SCREEN: Get_Start_Component,
  },
  {
    initialRouteName: NavigationConstant.Get_Start,
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.FadeFromBottomAndroid,
    },
  }
);

const AppNavigation = createAppContainer(
  createSwitchNavigator(
    {
      Main: BottomTabNavigator,
      APP_LOADING_SCREEN: AppLoading_Component,
      AUTH_STACK: AuthStack,
      APP_STACK: AppStack,
    },
    {
      initialRouteName: NavigationConstant.AppLoading,
    }
  )
);

export default AppNavigation;