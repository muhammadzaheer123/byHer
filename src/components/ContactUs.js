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
} from 'react-native';
import left from '../images/left-arrow-white.png';
import logo from '../images/logo2.png';
import phone from '../images/phone.png';
import mail from '../images/mail.png';
import Ripple from 'react-native-material-ripple';

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <View style={{width:'20%'}}>
          <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
              <Image source={left} style={styles.headerImage} />
            </TouchableOpacity>
            
          </View>
          <View style={{width:'60%'}}>
          <Text style={styles.headerText}>Contact Us</Text>
    
          </View>
          <View style={{width:'20%'}}>

          </View>
        </View>
        <View style={styles.conatiner1}>
        <View style={styles.imageContainer}>
          <Image source={logo} resizeMode="contain" style={styles.imagestyle} />
        </View>
          <View style={{ marginTop: '15%' }}>
            <Text style={{textAlign:'center',fontSize:25}}>Hi!</Text>
            <Text style={{textAlign:'center',fontSize:20, marginTop: '2%'}}>We are ready to help you.</Text>
          </View>
        <View style={{ marginTop: '15%', flexDirection:'row',justifyContent:'center' }}>
            <View style={{width:'40%',alignItems:'center'}}>
            <Ripple
            rippleColor={'white'}
            rippleOpacity={0.6}
            rippleDuration={1000}
            rippleFades={false}
            rippleSequential={true}
            rippleContainerBorderRadius={200}
              style={styles.button}>
              <Image source={phone} style={{width:25,height:25}}/>
            </Ripple>
            <Text style={{textAlign:'center'}}>Call Us</Text>
            </View>
            <View style={{width:'40%',alignItems:'center',}}>
            <Ripple
            rippleColor={'white'}
            rippleOpacity={0.6}
            rippleDuration={1000}
            rippleFades={false}
            rippleSequential={true} 
            rippleContainerBorderRadius={200}style={styles.button}>
              <Image source={mail} style={{width:25,height:25}}/>
            </Ripple>
            <Text style={{textAlign:'center'}}>Message Us</Text>
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
    backgroundColor: '#6c3694',
    // backgroundColor: '#1a40d9',
    // opacity:0.85
  },
  imagestyle: {
    width: '100%',
    height: '100%',
    
  },
  button: {
    width: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    margin: 5,
    // marginLeft: 0,
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: '#1a40d9',
    // opacity: 0.85,
    padding: '4%',
    borderRadius: 200,
    backgroundColor:'#e15301',
    // backgroundColor:'#30cf5b',

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
    flexDirection:'row',
    alignItems:'flex-end'
  },
  headerImage: {
    width: 20,
    height: 20,
  }, 
  headerText: {
    color: 'white',
    fontSize:20,
    marginTop:5,
    fontWeight: 'bold',
    textAlign:'center'
  },
  conatiner1: {
    height: '85%',
    backgroundColor: 'white',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
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
  imageContainer: {
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default ContactUs;
