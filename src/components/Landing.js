/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import logo from '../images/logo2.png';
import main from '../images/main1.png';
import img1 from '../images/img1.png';
import bg from '../images/bg1.jpg';
import Ripple from 'react-native-material-ripple';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInColor: false,
      signUpColor: false,
      selected: false,
      selectedRegister: false,
    };
  }
  setSelected(selected) {
    this.setState({selected: selected});
  }

  textStyle() {
    return this.state.selected ? styles.textSelected : styles.text;
  }

  setSelectedRegister(selected) {
    this.setState({selectedRegister: selected});
  }

  textStyleRegister() {
    return this.state.selectedRegister ? styles.textSelected : styles.text;
  }

  render() {
    console.log(this.state.selected);
    return (
      <View style={{width: '100%', height: '100%'}}>
        <View
          style={{
            backgroundColor: '#6c3694',
            height: '15%',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 10,
          }}>
          <View style={{width: '20%'}}>
            {/* <Image source={logo} resizeMode="contain" style={{width:50,height:80}}/> */}
          </View>
        </View>
        <ImageBackground
          resizeMethod="auto"
          style={{flex: 1, width: null, height: null}}>
          <View style={styles.mainContainer} />
        </ImageBackground>
        <View
          style={{position: 'absolute', width: '100%', height: '100%', top: 0}}>
          <View style={styles.imageContainer}>
            <Image
              source={logo}
              resizeMode="contain"
              style={styles.imagestyle}
            />
          </View>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Mechanic App</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Ripple
            rippleColor={'#e15301'}
            rippleOpacity={0.6}
            rippleDuration={200}
            rippleFades={false}
            rippleSequential={true}
            style={styles.button}
           rippleContainerBorderRadius={10}
             
              onPress={() => {
                this.props.navigation.navigate('Signin');
              }}
           
             
              >
              <Text
                // style={!this.state.signInColor?styles.buttontext:[styles.buttontext,{color:'white'}]}
                style={this.textStyle()}>
                Login
              </Text>
            </Ripple>
            <Ripple
            rippleColor={'#e15301'}
            rippleOpacity={0.6}
            rippleDuration={200}
            rippleFades={false}
            rippleSequential={true}
           style={styles.button}
           rippleContainerBorderRadius={10}
           
             
              onPress={() => {
                this.props.navigation.navigate('Register');
              }}
           
             
              >
              <Text
                // style={!this.state.signInColor?styles.buttontext:[styles.buttontext,{color:'white'}]}
                style={this.textStyle()}>
                Register
              </Text>
            </Ripple>
            <View style={{marginTop: '2%', flexDirection: 'row'}}>
              <Text style={[styles.forgetpass, {color: 'white'}]}>
                Need any help?
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ContactUs')}>
                <Text style={[styles.forgetpass, {marginLeft: 3}]}>
                  Contact Us
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'rgb(231,121,108)',
    // opacity: 0.75,
    backgroundColor: '#6c3694',
  },
  button: {
    width: '50%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    margin: 5,
    height: '26%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: '3%',
    borderRadius: 10,
    // backgroundColor:'#e15301',
    backgroundColor: 'white',
    // opacity: 0.95,
  },
  buttontext: {
    color: 'black',
    opacity: 0.85,
    textAlign: 'center',
    fontSize: 16,
  },
  welcomeText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  imageContainer: {
    height: '50%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  imageContainer1: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  imagestyle1: {
    width: '25%',
    height: '100%',
  },
  imagestyle: {
    width: '60%',
    height: '60%',
  },
  welcomeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '24%',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '26%',
    borderWidth: 0,
  },
  forgetpass: {
    color: '#6c3694',
    // opacity: 0.85,
    fontSize: 15,
    textAlign: 'center',
    color: '#e15301',
  },
  textSelected: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },

  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default App;
