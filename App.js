import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import NavigationService from './Main/NavigationService';
import AppNavigation from './Main/AppNavigation';
import { enableScreens } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import { Provider as ReduxProvider } from 'react-redux';
import ErrorComponent from './Main/Pages/ErrorComponent';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Main/Store/ConfigureStore';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

class App extends React.Component {

  async componentDidMount() {
    SplashScreen.hide();
    enableScreens();
    YellowBox.ignoreWarnings(['Warning:']);
    YellowBox.ignoreWarnings(['Error:']);
    try {
      await changeNavigationBarColor('#FFFFFF', true);
    } catch(e){
      console.log(e);
    }
  }

  render() {
    return (
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider>
            <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
            <AppNavigation ref={navigatorRef => {NavigationService.setTopLevelNavigator(navigatorRef);}}/>
            <ErrorComponent/>
          </PaperProvider>
        </PersistGate>
      </ReduxProvider>
    );
  }
};

export default App;
