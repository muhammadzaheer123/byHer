/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import left from '../images/left-arrow-white.png';
import Ripple from 'react-native-material-ripple';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <View style={{width: '20%'}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
              <Image source={left} style={styles.headerImage} />
            </TouchableOpacity>
          </View>
          <View style={{width: '60%'}}>
            <Text style={styles.headerText}>Login</Text>
          </View>
          <View style={{width: '20%'}}></View>
        </View>
        <View style={styles.conatiner1}>
          {/* <Text style={styles.welcometext}>Here To Get</Text> */}
          <Text style={{marginTop: 5, fontSize: 22, fontWeight: 'bold'}}>
            Welcome!
          </Text>
          <View style={{marginTop: '11%'}}>
            <TextInput
              placeholder="Phone Number or Email"
              style={styles.InputStyle}
            />
          </View>
          <View style={{marginTop: '5%'}}>
            <TextInput
              placeholder="Password"
              style={styles.InputStyle}
              secureTextEntry
            />
          </View>
          <View  style={{marginTop: '5%',flexDirection:'row'}}>
            <Text style={styles.forgetpass}>Forget Password?</Text>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('forgetpass')}
           >
            <Text style={[styles.forgetpass,{color:'#e15301',marginLeft:3}]}>Reset here</Text>
          </TouchableOpacity>
          </View>
          <View style={{marginTop: '11%'}}>
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
              <Text style={styles.buttontext}>Login</Text>
            </Ripple>
          </View>
          <View style={{marginTop: '3%',flexDirection:'row',justifyContent:'center'}}>
          <Text style={styles.forgetpass1}>
              Don't have an account? 
            </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}
           >
            <Text style={[styles.forgetpass1,{color:'#e15301',marginLeft:3}]}>
                Register here
            </Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#6c3694',
    // backgroundColor: '#1a40d9',
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
    // backgroundColor: '#1a40d9',
    // opacity: 0.85,
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
    height: '85%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: '5%',
    paddingTop: '15%',
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
    // opacity: 0.85,
    fontSize: 15,
  },
  forgetpass1: {
    color: '#6c3694',
    // opacity: 0.85,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Login;
