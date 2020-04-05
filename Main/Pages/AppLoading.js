import React from 'react';
import { View } from 'react-native';
import { NavigationConstant } from '../Constants/EssentialConstant';
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import LottieView from 'lottie-react-native';

class AppLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  componentDidMount(){
    this.animation.play(); 
    this.appStateAsync();
  }

  // Fetch the Auth Status from storage then navigate to our appropriate place
  appStateAsync = async () => {
    // this.props.navigation.navigate(NavigationConstant.MAIN);
    const { isAuthenticated } = this.props;
    this.props.navigation.navigate(isAuthenticated ? NavigationConstant.MAIN : NavigationConstant.AUTH);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LottieView ref={animation => { this.animation = animation; }} source={require('../Assets/handwash-animation.json')} loop={true} />
      </View>
    );
  }
};

const mapStateToProps = (state) => {
  const { isAuthenticated } = state.appState;
  return { isAuthenticated };
};


const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(AppLoading));
