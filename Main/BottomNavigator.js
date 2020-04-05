import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './Pages/Home';
import SupportPage from './Pages/Support';
import FAQ from './Pages/FAQ';

const BottomTabNavigator = createBottomTabNavigator({
  HOME: Home,
  FAQ: FAQ,
  SUPPORT: SupportPage,
}, {
  tabBarOptions: {
    showLabel: false
  }
})

export default BottomTabNavigator;


