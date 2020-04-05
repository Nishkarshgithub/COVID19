import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Linking } from 'react-native';
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationConstant } from '../Constants/EssentialConstant';
import { withNavigation } from "react-navigation";
import AppIntroSlider from 'react-native-app-intro-slider';
import LottieView from 'lottie-react-native';
import { AUTH_AUTHENTICATION } from '../Store/Actions/APP_NAVIGATION_ACTION/Navigation_Action';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const slides = [
  {
    key: 'pageFirst',
    title: 'What is COVID-19 (Coronavirus)?',
    text: 'Coronavirus disease (COVID-19) is an infectious disease caused by a new virus. The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing.',
    image: require('../Assets/virus-animation.json'),
    buttonText: 'VIEW VIRUS',
    link: 'https://www.who.int/health-topics/coronavirus#tab=tab_1',
    backgroundColor: '#F00FFF',
    textColor: '#FFFFFF'
  },
  {
    key: 'pageSecond',
    title: 'Coronavirus Symptoms.',
    text: 'People may be sick with the virus for 1 to 14 days before developing symptoms. The most common symptoms of coronavirus disease (COVID-19) are fever, tiredness, and dry cough. Most people (about 80%) recover from the disease without needing special treatment.',
    image: require('../Assets/sick-animation.json'),
    buttonText: 'VIEW SYMPTOM',
    link: 'https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html',
    backgroundColor: '#fdf9c9',
    textColor: '#000000'
  },
  {
    key: 'pageThird',
    title: 'Protection from COVID-19 (Coronavirus).',
    text: 'There is currently no vaccine to prevent COVID-19. however, research is underway. As always, we recommend that people stay home when sick, cover their cough, and practice good hand hygiene. These recommendations are especially important during cold and flu season.',
    image: require('../Assets/hand-sanitizer.json'),
    buttonText: 'VIEW PREVENTION',
    link: 'https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html',
    backgroundColor: '#F00FFF',
    textColor: '#FFFFFF'
  }
];

class GetStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexNumber: 0,
      showRealApp: false,
      statusBarColor: '#F00FFF',
      navBarColor: '#F00FFF'
    };
  }

  async componentDidMount(){
    await this._changeNavColor(this.state.navBarColor);
    this.changeColorValue(this.state.indexNumber);
  }

  _changeNavColor = async (navBarColor) => {
    try {
      await changeNavigationBarColor(navBarColor, true);
    } catch(e){
      console.log(e);
    }
  }

  _renderItem = (item) => {
    return (
      <View style={[styles.slide, {backgroundColor: item.item.backgroundColor}]} key={item.item.key}>
        <LottieView style={styles.viewLottie} autoPlay source={item.item.image} loop={true} />
        <View style={styles.textContainer}>
          <Text style={[styles.title, {color: item.item.textColor}]}>{item.item.title}</Text>
          <Text style={[styles.text, {color: item.item.textColor}]}>{item.item.text}</Text>
          <View style={styles.buttonCircle}>
            <TouchableOpacity onPress={() => Linking.openURL(item.item.link)}><Text style={styles.buttonTextColor}>{item.item.buttonText}</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  _onDone = () => {
    this.props.navigation.navigate(NavigationConstant.MAIN);
    this.props.navigateAction();
  }

  _onSkip = () => {
    this.setState({ showRealApp: true });
  }

  _onSlideChange = (index, lastIndex) => {
    this.setState({indexNumber: index});
    this.changeColorValue(index)
  }

  changeColorValue = (index) => {
    switch (index) {
      case 0:
        this.setState({statusBarColor: '#F00FFF', navBarColor: '#F00FFF'});
        this._changeNavColor('#F00FFF');       
        break;
      case 1:
        this.setState({statusBarColor: '#fdf9c9', navBarColor: '#fdf9c9'});
        this._changeNavColor('#fdf9c9');
        break;
      case 2:
        this.setState({statusBarColor: '#F00FFF', navBarColor: '#F00FFF'});
        this._changeNavColor('#F00FFF');     
        break;
      default:
        break;
    }
  }

  _renderNextButton = () => {
    return (
      <View style={styles.iconCircle}>
        <Icon name="arrowright" size={35} color="#FFFFFF" />
      </View>
    );
  }

  _renderDoneButton = () => {
    return (
      <View style={styles.iconCircle}>
        <Icon name="check" color="#FFFFFF" size={35}/>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor={this.state.statusBarColor} barStyle="dark-content" />
        <AppIntroSlider onSkip={this._onSkip} onSlideChange={this._onSlideChange} slides={slides} renderItem={this._renderItem} renderDoneButton={this._renderDoneButton} renderNextButton={this._renderNextButton} onDone={this._onDone}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  mainContent: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  viewLottie: {
    position: "absolute",
    top: -100
  },
  textContainer: {
    position: "absolute",
    bottom: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonTextColor:{
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  iconCircle: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCircle: {
    width: 200,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  const { isAuthenticated } = state.appState;
  return { isAuthenticated };
};


const mapDispatchToProps = (dispatch) => {
  return {
    navigateAction : () => dispatch(AUTH_AUTHENTICATION())
  };
};

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(GetStart));
