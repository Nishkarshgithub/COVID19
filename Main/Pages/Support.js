import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, ScrollView, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { connect } from "react-redux";
import { Header, SocialIcon } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { withNavigation } from "react-navigation";

const TabIcon = (props) => (
  <Icon
    name='face-profile'
    size={30}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
)

class SupportPage extends React.Component {
  static navigationOptions = {
    tabBarIcon: TabIcon
  };
  
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  async componentDidMount(){
    
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="#F00FFF" barStyle="dark-content" />
        <Header backgroundColor="#F00FFF" leftComponent={<LottieView style={styles.upperContainer} autoPlay source={require('../Assets/handwash-animation.json')} loop={true} />} centerComponent={{ text: 'SUPPORT', style: { color: '#fff', fontSize: 30, fontWeight: "bold" } }} rightComponent={{ icon: 'person', color: '#fff' }}/>
        <View style={styles.mainContainer}>
          <SafeAreaView>
            <ScrollView>
              <View style={styles.header}></View>
                <Image style={styles.avatar} source={require('../Assets/profile.gif')}/>
                  <View style={styles.body}>
                    <View style={styles.bodyContent}>
                      <Text style={styles.name}>Nishkarsh Gupta</Text>
                      <Text style={styles.info}>Technology Enthusiast 🌍🌎🌏| Programmer📱💻📲 | SysAdmin🤯@Algomeric | Blogger✒️@Medium</Text>
                      <Text style={styles.description}>Excellent communication and problem-solving skills.</Text>
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://gitlab.com/Nishkarshgupta')} style={styles.buttonInsideContainer}>
                          <SocialIcon raised={false}  type='gitlab'/> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/nishkarshgupta/')} style={styles.buttonInsideContainer}>
                          <SocialIcon raised={false}  type='linkedin'/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/NGNishkarsh')} style={styles.buttonInsideContainer}>
                          <SocialIcon raised={false}  type='twitter'/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Nishkarshgithub')} style={styles.buttonInsideContainer}>
                          <SocialIcon raised={false}  type='github'/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/iamnishkarshgupta')} style={styles.buttonInsideContainer}>
                          <SocialIcon raised={false}  type='facebook'/>
                        </TouchableOpacity>
                      </View>
                      <Text style={styles.info}>For support or business inquiries, Please contact me on</Text>
                      <TouchableOpacity onPress={() => Linking.openURL('mailto:iamnishkarshgupta@gmail.com?subject=BusinessInquiry')}><Text style={styles.description}>iamnishkarshgupta@gmail.com</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  mainContainer: {
    padding: 0,
    marginTop: -10
  },
  upperContainer: {
    height: 40,
    width: 40
  },
  header:{
    backgroundColor: "#F00FFF",
    height: 100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop: 40
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10, 
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  buttonInsideContainer: {
    margin: 10
  }
});

const mapStateToProps = (state) => {
  return { };
};


const mapDispatchToProps = (dispatch) => {
  return { };
};

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(SupportPage));