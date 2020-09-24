/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import left from '../images/left-arrow-white.png';
import forgetpass from '../images/forgetpass.png';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    return (
      <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      automaticallyAdjustContentInsets={true}
      style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <View style={{ width: '20%', padding: 3.5, justifyContent: 'center', borderWidth: 0 }}>
          <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
              <Image source={left} style={styles.headerImage} />
            </TouchableOpacity>
          </View>
          <View style={{ width: '60%', borderWidth: 0, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.headerText}>Forgot Password</Text>
          </View>
          <View style={{ width: '20%' }}>

          </View>

        </View>
        <View style={styles.conatiner1}>
          <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 30 }}>
            <Image source={forgetpass} style={{}} />
          </View>
          <Text style={styles.welcometext}>
            Forgot Your Password?
          </Text>
          <Text style={{ marginTop: 5, fontSize: 14, lineHeight: 20, textAlign: 'center' }}>To recover your password, you need to enter your registered email address. We will sent the recovery code to your email.</Text>
          <View style={{ marginTop: '11%' }}>
            <TextInput placeholder="Type Your Email" style={styles.InputStyle} />
          </View>
          <View style={{ marginTop: '3%' }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>SEND</Text>
            </TouchableOpacity>
          </View>
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
    // opacity:0.85
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
    backgroundColor: '#e15301',
    opacity: 0.85,
    padding: '4%',
    borderRadius: 10,
  },
  buttontext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  header: {
    height: '15%',
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
    fontWeight: 'bold',
    textAlign: 'center'
  },
  conatiner1: {
    height: '85%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: '5%',
    paddingTop: '15%',
  },
  welcometext: {
    fontSize: 30,
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'system-ui'
  },
  InputStyle: {
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  forgetpass: {
    color: '#1a40d9',
    opacity: 0.85,
    fontSize: 15,
  },
});

export default Login;
