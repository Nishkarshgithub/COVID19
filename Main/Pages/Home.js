import React from 'react';
import { View, StatusBar, StyleSheet, Picker, SafeAreaView, ScrollView, ActivityIndicator, Text } from 'react-native';
import { connect } from "react-redux";
import { Card, Avatar, Button, Title, IconButton } from 'react-native-paper';
import { Header } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from "react-navigation";
import { ERROR_DIALOG_FUNCTION } from '../Store/Actions/ERROR_ACTION/ErrorComponent';
import Icon from 'react-native-vector-icons/AntDesign';
import NetInfo from "@react-native-community/netinfo";
import { HOME_FUNCTION, HOME_COVID_TOTAL_FUNCTION, FETCH_COUNTRY_DATA, HOME_COUNTRY_COVID_START } from '../Store/Actions/HOME_ACTION/Home_Action';
import { AdMobBanner, AdMobInterstitial } from 'react-native-admob';
import changeNavigationBarColor from 'react-native-navigation-bar-color';


const TabIcon = (props) => (
  <Icon
    name='home'
    size={30}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
);


class Home extends React.Component {
  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  constructor(props) {
    super(props);
    this.state = {
      worldReload: false,
      isCountryAvailable: false,
      country: null,
      visible: false,
    };
  }

  async componentDidMount(){
    await this._changeNavColor();
    try {
      this.props.covidDataFetch();
      this.props.covidWorldDataFetch();
      this.props.countryDataStart();
    } catch(e) {
      this.props.errorDialog('Server not responding. Actual Error - ' + e);
    }
    
    NetInfo.addEventListener(state => {
      if (state.isConnected != true){
        this.props.errorDialog('Internet disconnected. Trying to reconnect......');
      }
    });
  }

  UNSAFE_componentWillMount = () => {

  }

  _changeNavColor = async () => {
    try {
      await changeNavigationBarColor('#FFFFFF', true);
    } catch(e){
      console.log(e);
    }
  }

  showAD = () => {
    AdMobInterstitial.setAdUnitID('ca-app-pub-9629092505681633/2344139615');
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
  }

  fetchCountryData = async () => {
    this.showAD();
    this.setState({ isCountryAvailable: true });
    if (this.state.country != '') {
      try {
        this.props.fetchCountryData(this.state.country);
      } catch(e) {
        this.props.errorDialog('Server not responding.{"\n"}Actual Error - ' + e);
      }
    } else {
      this.props.errorDialog('Please Select a country.');
    }
    setTimeout(() => {
      this.setState({ isCountryAvailable: false });
    }, 2000);
  }

  fetchSpecificCountryData = (country) => {
    this.showAD();
    this.setState({ isCountryAvailable: true });
    try {
      this.props.fetchCountryData(country);
      setTimeout(() => { this.setState({ isCountryAvailable: false });}, 2000);
    } catch(e) {
      setTimeout(() => { this.setState({ isCountryAvailable: false });}, 2000);
      this.props.errorDialog('Server not responding.{"\n"}Actual Error - ' + e);
    }
  }

  fetchReloadWorldData = async () => {
    this.setState({ worldReload: true });
    try {
      this.props.covidWorldDataFetch();
    } catch(e) {
      this.props.errorDialog('Server not responding.{"\n"}Actual Error - ' + e);
    }
    setTimeout(() => {
      this.setState({ worldReload: false });
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="#F00FFF" barStyle="dark-content" />
        <Header backgroundColor="#F00FFF" leftComponent={<LottieView style={styles.upperContainer} autoPlay source={require('../Assets/handwash-animation.json')} loop={true} />} centerComponent={{ text: 'COVID-19', style: { color: '#fff', fontSize: 30, fontWeight: "bold" } }} rightComponent={{ icon: 'home', color: '#fff' }}/>
        <View style={styles.mainContainer}>
          <SafeAreaView style={styles.cardContainer}>
            <ScrollView>
              <LinearGradient start={{x: 0.2, y: 0.4}} end={{x: 1, y: 0.8}} colors={['#000428', '#004e92', '#dc2430']} style={styles.cardLinearOne}>
                <View style={styles.linearContainerOne}>
                  <View>
                    {this.props.worldCovidData != null ? <Text style={styles.cardTitleStyle}>{ this.props.worldCovidData.total_cases + ' (' + this.props.worldCovidData.new_cases + ' Today)'}</Text>  : <ActivityIndicator size={25}/>}
                    <Text style={styles.cardSubTitleStyle}>Total Confirmed Person Worldwide.</Text>
                  </View>
                  <View><LottieView style={{ height: 50, width: 100 }} autoPlay source={require('../Assets/corona-animation.json')} loop={true} /></View>
                </View>
                <View style={styles.linearContainerOne}>
                  <View>
                    { this.props.worldCovidData != null ? <Text style={styles.cardTitleStyle}>{ this.props.worldCovidData.total_recovered }</Text> : <ActivityIndicator size={25}/>}
                    <Text style={styles.cardSubTitleStyle}>Total Recovered Person Worldwide.</Text>
                  </View>
                  <View><LottieView style={{ height: 50, width: 100 }} autoPlay source={require('../Assets/recover.json')} loop={true} /></View>
                </View>
                <View style={styles.linearContainerOne}>
                  <View>
                    { this.props.worldCovidData != null ? <Text style={styles.cardTitleStyle}>{ this.props.worldCovidData.total_deaths + ' (' + this.props.worldCovidData.new_deaths + ' Today)' }</Text> : <ActivityIndicator size={25}/>}
                    <Text style={styles.cardSubTitleStyle}>Total Deaths Worldwide.</Text>
                  </View>
                  <View><LottieView style={styles.upperContainer} autoPlay source={require('../Assets/virus-animation.json')} loop={true} /></View>
                </View>
              </LinearGradient>
              <View style={styles.linearContainerTwo}>
                <View>
                  { this.props.worldCovidData != null ? <Text style={styles.cardTimeTitleStyle}>{ moment(new moment(this.props.worldCovidData.statistic_taken_at)).format('MMM D YYYY, h:mm a') }</Text> : <ActivityIndicator size={25}/> }
                  <Text style={styles.cardTimeSubTitleStyle}>Last Updated On.</Text>
                </View>
                <View>{this.state.worldReload ? <LottieView style={styles.upperContainer} autoPlay source={require('../Assets/reload.json')} loop={true} /> : <IconButton onPress={() => this.fetchReloadWorldData()} icon="reload" size={20} />}</View>
              </View>
              <View style={styles.pickerContainer}>
                <Picker selectedValue={this.state.country} style={styles.pickerStyle}
                  onValueChange={(itemValue) => this.setState({country: itemValue})}>
                    <Picker.Item label="Select Country" value='' />
                    {this.props.covidData != null ? 
                      this.props.covidData.countries_stat.map((data, index) => {
                        return (
                          <Picker.Item key={index} label={data.country_name} value={data.country_name} />
                        );
                      })
                    :
                    <Picker.Item label="No Data Available." value='' />}
                </Picker>
                <Button icon='account-search' loading={this.state.isCountryAvailable} mode="contained" onPress={() => this.fetchCountryData()}>Look Up</Button>
              </View>
              <View style={styles.adStyle}>
                <AdMobBanner adSize="fullBanner" adUnitID="ca-app-pub-9629092505681633/6472986698" testDevices={[AdMobBanner.simulatorId]} onAdFailedToLoad={error => console.log(error)}/>
              </View>
              {this.props.countryData != null ? this.props.countryData.latest_stat_by_country.map((data, index) => {
                return (
                  <Card elevation={4} key={index} style={styles.card} accessible>
                    <LinearGradient start={{x: 0.5, y: 0.4}} end={{x: 1, y: 0.8}} colors={['#3a1c71', '#d76d77', '#ffaf7b']} style={styles.cardLinearOne}>
                      <Card.Title titleStyle={styles.textColor} subtitleStyle={styles.textColor} title={data.country_name} subtitle={moment(new moment(data.record_date)).format('MMM D YYYY, h:mm a')} left={(props) => <Avatar.Icon {...props} icon="flag" />} right={(props) => <IconButton {...props} icon="reload" onPress={() => this.fetchSpecificCountryData(data.country_name)} />} />
                      <Card.Content style={styles.cardContent}>
                        <Title style={styles.textColor}>Confirmed Cases: {data.total_cases}</Title>
                        <Title style={styles.textColor}>Recovered Cases: {data.total_recovered}</Title>
                        <Title style={styles.textColor}>Death Cases: {data.total_deaths}</Title>
                      </Card.Content>
                    </LinearGradient>
                  </Card>
                );
              }) : this.state.isCountryAvailable ? <ActivityIndicator size={30}/> :
              <LinearGradient start={{x: 0.2, y: 0}} end={{x: 1, y: 0}} colors={['#dd2476', '#185a9d', '#dd2476']} style={styles.countryDataUnavailable}>
                <Text style={styles.countryDataUnavailableText}>
                  No Country Selected!
                </Text>
              </LinearGradient> }
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  mainContainer: {
    padding: 10
  },
  pickerStyle: {
    height: 35, 
    width: 220
  },
  selectContainer:{
    marginBottom: 10
  },
  filterButton: {
    height: 35, 
    width: 200,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    padding: 6,
  },
  containerText: {
    marginRight: 10,
    fontSize: 15
  },
  pickerContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  linearContainerOne: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    padding: 10
  },
  linearContainerTwo: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    padding: 5,
    margin: 5
  },
  cardContainer: {
    marginBottom: 80
  },
  card: {
    borderRadius: 10,
    borderColor: "transparent",
    marginBottom: 10,
    elevation: 4,
    shadowOpacity: 0.4
  },
  textColor: {
    color: "#FFF"
  },
  cardContent: {
    padding: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  upperContainer: {
    height: 40,
    width: 40 
  },
  listItemContainer: {
    backgroundColor: "transparent",
    marginRight: 10
  },
  countryDataUnavailable: {
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  }, 
  countryDataUnavailableText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "#FFFFFF"
  },
  cardLinearOne: {
    borderRadius: 10,
    padding: 5,
  },
  cardTitleStyle: {
    fontSize: 15, 
    color: "#FFF", 
    fontWeight:"bold"
  },
  cardSubTitleStyle: {
    fontSize: 8, 
    color: "#FFF", 
    fontWeight:"bold"
  },
  cardTimeTitleStyle: {
    fontSize: 12, 
    fontWeight:"bold"
  },
  cardTimeSubTitleStyle: {
    fontSize: 8, 
    fontWeight:"bold"
  },
  adStyle: {
    marginVertical: 5
  }
});

const mapStateToProps = (state) => {
  const { isDataAvailable, covidData, worldCovidData, isCountryDataAvailable, countryData } = state.homeReducer;
  return { isDataAvailable, covidData, worldCovidData, isCountryDataAvailable, countryData };
};


const mapDispatchToProps = (dispatch) => {
  return {
    covidDataFetch : () => dispatch(HOME_FUNCTION()),
    covidWorldDataFetch : () => dispatch(HOME_COVID_TOTAL_FUNCTION()),
    fetchCountryData: (data) => dispatch(FETCH_COUNTRY_DATA(data)),
    errorDialog: (data) => dispatch(ERROR_DIALOG_FUNCTION(data)),
    countryDataStart: () => dispatch(HOME_COUNTRY_COVID_START())
  };
};

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(Home));
