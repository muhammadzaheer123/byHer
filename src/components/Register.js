/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import left from '../images/left-arrow-white.png';
import eye from '../images/eye.png';
import privatee from '../images/privatee.png';
import data from '../images/data.png';
import {RadioButton} from 'react-native-paper';
import Ripple from 'react-native-material-ripple';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidePassword: true,
      hidePasswordB: true,
      checked: 'male',
    };
  }
  setPasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };
  setPasswordVisibilityB = () => {
    this.setState({hidePasswordB: !this.state.hidePasswordB});
  };

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        automaticallyAdjustContentInsets={true}
        style={styles.mainContainer}>
        <View style={styles.header}>
          <View style={{width: '20%'}}>
          <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
              <Image source={left} style={styles.headerImage} />
            </TouchableOpacity>
          </View>
          <View style={{width: '60%'}}>
            <Text style={styles.headerText}>Register</Text>
          </View>
          <View style={{width: '20%'}} />
        </View>
        <View style={styles.conatiner1}>
          <View>
            <TextInput placeholder="Full Name" style={styles.InputStyle} />
          </View>
          <View style={{marginTop: '2%'}}>
            <TextInput placeholder="Email" style={styles.InputStyle} />
          </View>
          <View style={{marginTop: '2%'}}>
            <TextInput placeholder="Phone Number" style={styles.InputStyle} />
          </View>
          <View style={{marginTop: '2%'}}>
            <TextInput placeholder="Employee Key" style={styles.InputStyle} />
          </View>
          <View
            style={{
              marginTop: '2%',
              borderBottomWidth: 1,
              borderColor: 'gray',
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 8,
            }}>
            <View style={{width: '20%'}}>
              <Text style={{marginLeft: 3}}>Gender</Text>
            </View>
            <View
              style={{
                width: '40%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <RadioButton
                value="Male"
                status={this.state.checked === 'Male' ? 'checked' : 'unchecked'}
                onPress={() =>
                  this.setState({
                    checked: 'Male',
                  })
                }
              />
              <Text>Male</Text>
            </View>
            <View
              style={{
                width: '40%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <RadioButton
                value="Female"
                status={
                  this.state.checked === 'Female' ? 'checked' : 'unchecked'
                }
                onPress={() =>
                  this.setState({
                    checked: 'Female',
                  })
                }
              />
              <Text>Female</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: '2%',
              borderBottomWidth: 1,
              borderColor: 'gray',
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 8,
            }}>
            <View style={{width: '30%'}}>
              <Text style={{marginLeft: 3}}>Profile Picture</Text>
            </View>
            <View style={{width: '70%', alignItems: 'flex-end'}}>
              <TouchableOpacity
                style={{
                  borderWidth: 0,
                  borderRadius: 10,
                  width: 90,
                  padding: 8,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  justifyContent: 'center',
                  elevation: 5,
                  backgroundColor: '#e15301',
                  flexDirection: 'row',
                }}>
                <Image source={data} style={{width: 20, height: 20}} />
                <Text
                  style={{textAlign: 'center', color: 'white', marginLeft: 5}}>
                  Upload
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: '2%'}}>
            <View>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Password"
                secureTextEntry={this.state.hidePassword}
                style={styles.InputStyle}
              />
                     <Ripple
            rippleColor={'#dedede'}
            rippleOpacity={0.6}
            rippleDuration={1000}
            rippleFades={false}
            rippleSequential={true}
        
           rippleContainerBorderRadius={50}
                style={
                  this.state.hidePassword
                    ? styles.touachableButton2
                    : styles.touachableButton3
                }
                onPress={this.setPasswordVisibility}>
                <Image
                  source={this.state.hidePassword ? privatee : eye}
                  style={
                    this.state.hidePassword
                      ? styles.buttonImage2
                      : styles.buttonImage3
                  }
                />
              </Ripple>
            </View>
          </View>
          <View style={{marginTop: '2%'}}>
            <View>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Confirm Password"
                secureTextEntry={this.state.hidePasswordB}
                style={styles.InputStyle}
              />
                <Ripple
            rippleColor={'#dedede'}
            rippleOpacity={0.6}
            rippleDuration={1000}
            rippleFades={false}
            rippleSequential={true}
        
           rippleContainerBorderRadius={50}
              
                style={
                  this.state.hidePasswordB
                    ? styles.touachableButton2
                    : styles.touachableButton3
                }
                onPress={this.setPasswordVisibilityB}>
                <Image
                  source={this.state.hidePasswordB ? privatee : eye}
                  style={
                    this.state.hidePasswordB
                      ? styles.buttonImage2
                      : styles.buttonImage3
                  }
                />
              </Ripple>
            </View>
          </View>
          <View style={{marginTop: '3%'}}>
          <Ripple
            rippleColor={'white'}
            rippleOpacity={0.6}
            rippleDuration={1000}
            rippleFades={false}
            rippleSequential={true}
           style={styles.button}
           rippleContainerBorderRadius={10}
              onPress={() => this.props.navigation.navigate('Home')}
              >
              <Text style={styles.buttontext}>Register</Text>
            </Ripple>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '2%',
              justifyContent: 'center',
            }}>
            <Text style={styles.forgetpass}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Signin')}>
              <Text
                style={[styles.forgetpass, {marginLeft: 3, color: '#e15301'}]}>
                Login here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#6c3694',
  },
  button: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    margin: 5,
    marginLeft: 0,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '4%',
    borderRadius: 10,
    backgroundColor: '#e15301',
  },
  buttontext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  header: {
    height: '15%',
    justifyContent: 'center',
    padding: '5%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  headerImage: {
    width: 20,
    height: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  conatiner1: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: '5%',
    paddingTop: '8%',
    borderWidth: 0,
    flex: 1,
  },
  welcometext: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  InputStyle: {
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  forgetpass: {
    color: '#6c3694',
    fontSize: 15,
    textAlign: 'center',
  },
  headerText2: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  textBoxContainer2: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  textBox2: {
    fontSize: 20,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: 'grey',
    borderRadius: 5,
  },
  touachableButton2: {
    position: 'absolute',
    right: 3,
    height: 30,
    width: 30,
    padding: 2,
  
    borderRadius:50,
    top:10,
    justifyContent:'center',
    alignItems:'center'
  },
  touachableButton3: {
    position: 'absolute',
    right:3,
    height: 30,
    width: 30,
    borderRadius:50,
    top:10,
   
    justifyContent:'center',
    alignItems:'center'
  },
  touachableButton4: {
    position: 'absolute',
    right: 40,
    height: 65,
    width: 30,
    padding: 2,
  },
  buttonImage2: {
    resizeMode: 'contain',
    height: '80%',
    width: '80%',
  },
  buttonImage3: {
   
    height: '80%',
    width: '80%',
  },
});

export default Login;
