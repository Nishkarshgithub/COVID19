import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { connect } from "react-redux";
import { Header } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import { List } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { withNavigation } from "react-navigation";

const TabIcon = (props) => (
  <Icon
    name='forum-outline'
    size={30}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
)

class FAQ extends React.Component {
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
        <Header backgroundColor="#F00FFF" leftComponent={<LottieView style={styles.upperContainer} autoPlay source={require('../Assets/handwash-animation.json')} loop={true} />} centerComponent={{ text: 'FAQs', style: { color: '#fff', fontSize: 30, fontWeight: "bold" } }} rightComponent={{ icon: 'forum', color: '#fff' }}/>
        <View style={styles.mainContainer}>
          <SafeAreaView>
            <ScrollView>
              <List.Section titleStyle={styles.sectionStyle} title="Frequently Asked Questions.">
                <LinearGradient start={{x: 0.2, y: 0.4}} end={{x: 1, y: 0.8}} colors={['#ff512f', '#4568dc', '#4568dc']} style={styles.linearContainer}>
                  <List.Accordion titleStyle={styles.accordTitleStyle} title="What is Novel Coronavirus?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={15} title="A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold. A diagnosis with coronavirus 229E, NL63, OC43, or HKU1 is not the same as a COVID-19 diagnosis. Patients with COVID-19 will be evaluated and cared for differently than patients with common coronavirus diagnosis." />
                  </List.Accordion>
                  <List.Accordion titleStyle={styles.accordTitleStyle} titleNumberOfLines={3} title="Why is the disease being called coronavirus disease 2019, COVID-19?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={22} title="On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV”. There are many types of human coronaviruses including some that commonly cause mild upper-respiratory tract illnesses. COVID-19 is a new disease, caused be a novel (or new) coronavirus that has not previously been seen in humans. The name of this disease was selected following the World Health Organization (WHO) best practice for naming of new human infectious diseases." />
                  </List.Accordion>
                  <List.Accordion titleStyle={styles.accordTitleStyle} titleNumberOfLines={3} title="How can people help stop stigma related to COVID-19?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={15} title="People can fight stigma and help, not hurt, others by providing social support. Counter stigma by learning and sharing facts. Communicating the facts that viruses do not target specific racial or ethnic groups and how COVID-19 actually spreads can help stop stigma." />
                  </List.Accordion>
                </LinearGradient>
              </List.Section>
              <List.Section titleStyle={styles.subSectionStyle} title="How it spreads.">
                <LinearGradient start={{x: 0.2, y: 0.4}} end={{x: 1, y: 0.8}} colors={['#ff512f', '#4568dc','#4568dc']} style={styles.linearContainer}>
                  <List.Accordion titleStyle={styles.accordTitleStyle} title="What is the source of the virus?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={22} title="Coronaviruses are a large family of viruses. Some cause illness in people, and others, such as canine and feline coronaviruses, only infect animals. Rarely, animal coronaviruses that infect animals have emerged to infect people and can spread between people. This is suspected to have occurred for the virus that causes COVID-19. Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS) are two other examples of coronaviruses that originated from animals and then spread to people. More information about the source and spread of COVID-19 is available on the Situation Summary: Source and Spread of the Virus." />
                  </List.Accordion>
                  <List.Accordion titleStyle={styles.accordTitleStyle} titleNumberOfLines={3} title="How does the virus spread?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={22} title="This virus was first detected in Wuhan City, Hubei Province, China. The first infections were linked to a live animal market, but the virus is now spreading from person-to-person. It’s important to note that person-to-person spread can happen on a continuum. Some viruses are highly contagious (like measles), while other viruses are less so. The virus that causes COVID-19 seems to be spreading easily and sustainably in the community (“community spread”) in some affected geographic areas. Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected. Learn what is known about the spread of newly emerged coronaviruses." />
                  </List.Accordion>
                  <List.Accordion titleStyle={styles.accordTitleStyle} titleNumberOfLines={3} title="Can someone who has had COVID-19 spread the illness to others?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={22} title="Quarantine means separating a person or group of people who have been exposed to a contagious disease but have not developed illness (symptoms) from others who have not been exposed, in order to prevent the possible spread of that disease. Quarantine is usually established for the incubation period of the communicable disease, which is the span of time during which people have developed illness after exposure. For COVID-19, the period of quarantine is 14 days from the last date of exposure, because 14 days is the longest incubation period seen for similar coronaviruses. Someone who has been released from COVID-19 quarantine is not considered a risk for spreading the virus to others because they have not developed illness during the incubation period." />
                  </List.Accordion>
                  <List.Accordion titleStyle={styles.accordTitleStyle} titleNumberOfLines={4} title="Can the virus that causes COVID-19 be spread through food, including refrigerated or frozen food?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={22} title="Coronaviruses are generally thought to be spread from person-to-person through respiratory droplets. Currently there is no evidence to support transmission of COVID-19 associated with food. Before preparing or eating food it is important to always wash your hands with soap and water for 20 seconds for general food safety. Throughout the day wash your hands after blowing your nose, coughing or sneezing, or going to the bathroom. It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be the main way the virus spreads. In general, because of poor survivability of these coronaviruses on surfaces, there is likely very low risk of spread from food products or packaging that are shipped over a period of days or weeks at ambient, refrigerated, or frozen temperatures." />
                  </List.Accordion>
                  <List.Accordion titleStyle={styles.accordTitleStyle} titleNumberOfLines={3} title="Will warm weather stop the outbreak of COVID-19?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={22} title="It is not yet known whether weather and temperature impact the spread of COVID-19. Some other viruses, like the common cold and flu, spread more during cold weather months but that does not mean it is impossible to become sick with these viruses during other months.  At this time, it is not known whether the spread of COVID-19 will decrease when weather becomes warmer.  There is much more to learn about the transmissibility, severity, and other features associated with COVID-19 and investigations are ongoing." />
                  </List.Accordion>
                  <List.Accordion titleStyle={styles.accordTitleStyle} titleNumberOfLines={3} title="What is community spread?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={22} title="Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected." />
                  </List.Accordion>
                  <List.Accordion titleStyle={styles.accordTitleStyle} titleNumberOfLines={3} title="What temperature kills the virus that causes COVID-19?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={22} title="Generally coronaviruses survive for shorter periods of time at higher temperatures and higher humidity than in cooler or dryer environments. However, we don’t have direct data for this virus, nor do we have direct data for a temperature-based cutoff for inactivation at this point. The necessary temperature would also be based on the materials of the surface, the environment, etc. Regardless of temperature please follow CDC’s guidance for cleaning and disinfection." />
                  </List.Accordion>
                </LinearGradient>
              </List.Section>
              <List.Section titleStyle={styles.subSectionStyle} title="How to protect yourself.">
                <LinearGradient start={{x: 0.2, y: 0.4}} end={{x: 1, y: 0.8}} colors={['#ff512f', '#4568dc','#4568dc']} style={styles.linearContainer}>
                  <List.Accordion titleNumberOfLines={3} titleStyle={styles.accordTitleStyle}  title="How can I help protect myself?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={2} title="Clean your hands often." />
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={2} title="Avoid close contact." />
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={2} title="Stay home if you’re sick." />
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={2} title="Cover coughs and sneezes." />
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={2} title="Wear a facemask if you are sick." />
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={2} title="Clean and disinfect." />
                  </List.Accordion>
                  <List.Accordion titleNumberOfLines={3} titleStyle={styles.accordTitleStyle}  title="Who is at higher risk for serious illness from COVID-19?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={22} title={`Older adults and people of any age who have serious underlying medical conditions may be at higher risk for more serious complications from COVID-19. These people who may be at higher risk of getting very sick from this illness, includes: \nOlder adults \nHeart disease \nDiabetes \nLung disease.`} />
                  </List.Accordion>
                  <List.Accordion titleNumberOfLines={3} titleStyle={styles.accordTitleStyle}  title="Is it okay for me to donate blood?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={22} title="caring for patients. The need for donated blood is constant, and blood centers are open and in urgent need of donations. CDC encourages people who are well to continue to donate blood if they are able, even if they are practicing social distancing because of COVID-19. CDC is supporting blood centers by providing recommendations that will keep donors and staff safe. Examples of these recommendations include spacing donor chairs 6 feet apart, thoroughly adhering to environmental cleaning practices, and encouraging donors to make donation appointments ahead of time." />
                  </List.Accordion>
                </LinearGradient>
              </List.Section>
              <List.Section titleStyle={styles.subSectionStyle} title="Symptoms & Testing.">
                <LinearGradient start={{x: 0.2, y: 0.4}} end={{x: 1, y: 0.8}} colors={['#ff512f', '#4568dc','#4568dc']} style={styles.linearContainer}>
                  <List.Accordion titleNumberOfLines={3} titleStyle={styles.accordTitleStyle}  title="What are the symptoms and complications that COVID-19 can cause?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={22} title="Current symptoms reported for patients with COVID-19 have included mild to severe respiratory illness with fever1, cough, and difficulty breathing." />
                  </List.Accordion>
                  <List.Accordion titleNumberOfLines={3} titleStyle={styles.accordTitleStyle}  title="Where can I get tested for COVID-19?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={22} title="The process and locations for testing vary from place to place. Contact your state, local, tribal, or territorial department for more information, or reach out to a medical provider. State and local public health departments have received tests from CDC while medical providers are getting tests developed by commercial manufacturers. While supplies of these tests are increasing, it may still be difficult to find someplace to get tested." />
                  </List.Accordion>
                  <List.Accordion titleNumberOfLines={3} titleStyle={styles.accordTitleStyle}  title="Can a person test negative and later test positive for COVID-19?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={22} title={`Using the CDC-developed diagnostic test, a negative result means that the virus that causes COVID-19 was not found in the person’s sample. In the early stages of infection, it is possible the virus will not be detected.\n\nFor COVID-19, a negative test result for a sample collected while a person has symptoms likely means that the COVID-19 virus is not causing their current illness.`} />
                  </List.Accordion>
                </LinearGradient>
              </List.Section>
              <List.Section titleStyle={styles.subSectionStyle} title="COVID-19 and Funerals.">
                <LinearGradient start={{x: 0.2, y: 0.4}} end={{x: 1, y: 0.8}} colors={['#ff512f', '#4568dc','#4568dc']} style={styles.linearEndContainer}>
                  <List.Accordion titleNumberOfLines={3} titleStyle={styles.accordTitleStyle}  title="Am I at risk if I go to a funeral or visitation service for someone who died of COVID-19?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={22} title="There is currently no known risk associated with being in the same room at a funeral or visitation service with the body of someone who died of COVID-19." />
                  </List.Accordion>
                  <List.Accordion titleNumberOfLines={3} titleStyle={styles.accordTitleStyle}  title="Am I at risk if I touch someone who died of COVID-19 after they have passed away?">
                    <List.Item  titleStyle={styles.accordTitleStyle} titleNumberOfLines={70} title={`COVID-19 is a new disease and we are still learning how it spreads. The virus that causes COVID-19 is thought to mainly spread from close contact (i.e., within about 6 feet) with a person who is currently sick with COVID-19. The virus likely spreads primarily through respiratory droplets produced when an infected person coughs or sneezes, similar to how influenza and other respiratory infections spread. These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs. This type of spread is not a concern after death.\n\nIt may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be the main way the virus spreads.\n\nPeople should consider not touching the body of someone who has died of COVID-19. Older people and people of all ages with severe underlying health conditions are at higher risk of developing serious COVID-19 illness. There may be less of a chance of the virus spreading from certain types of touching, such as holding the hand or hugging after the body has been prepared for viewing. Other activities, such as kissing, washing, and shrouding should be avoided before, during, and after the body has been prepared, if possible. If washing the body or shrouding are important religious or cultural practices, families are encouraged to work with their community cultural and religious leaders and funeral home staff on how to reduce their exposure as much as possible. At a minimum, people conducting these activities should wear disposable gloves. If splashing of fluids is expected, additional personal protective equipment (PPE) may be required (such as disposable gown, faceshield or goggles and facemask).\n\nCleaning should be conducted in accordance with manufacturer’s instructions for all cleaning and disinfection products (e.g., concentration, application method and contact time, etc.). Products with EPA-approved emerging viral pathogens claims are expected to be effective against COVID-19 based on data for harder to kill viruses. After removal of PPE, perform hand hygiene by washing hands with soap and water for at least 20 seconds or using an alcohol-based hand sanitizer that contains at least 60% alcohol if soap and water are not available. Soap and water should be used if the hands are visibly soiled.`} />
                  </List.Accordion>
                </LinearGradient>
              </List.Section>
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
    padding: 10
  },
  linearContainer: {
    borderRadius: 10
  },
  linearEndContainer: {
    borderRadius: 10,
    marginBottom: 80
  },
  sectionStyle: {
    fontWeight: "bold",
    fontSize: 20
  },
  subSectionStyle: {
    fontWeight: "bold",
    fontSize: 18
  },
  accordTitleStyle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15
  },
  upperContainer: {
    height: 40,
    width: 40 
  },
});

const mapStateToProps = (state) => {
  return { };
};


const mapDispatchToProps = (dispatch) => {
  return { };
};

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(FAQ));