/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState,useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';

import {RadioButton} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';

import left from '../images/left-arrow-white.png';
var screenWidth = Dimensions.get('window').width;
import {TimePicker} from 'react-native-wheel-picker-android';
import Ripple from 'react-native-material-ripple';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';
var counter = 0;
export default function Account(props) {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const [pickImage, setPickImage] = useState('');
  const [textInput1, setTextInput1] = useState(false);
  const [textInput2, setTextInput2] = useState(false);
  const [textInputdata1, setTextInputdata1] = useState('Peter');
  const [textInputdata2, setTextInputdata2] = useState('+1 437 12542');
  const [textInput3, setTextInput3] = useState(false);
  const [textInput4, setTextInput4] = useState(false);
  const [time, setTime] = useState(new Date());
  const [scroll, setscroll] = useState('');

  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    checked: 'male',
  };

  pickImageFunc = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setPickImage(source);
      }
    });
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      automaticallyAdjustContentInsets={true}
      style={styles.mainContainer}>
   
      <View
        style={{
          backgroundColor: '#6c3694',
          height: '15%',
          justifyContent: 'center',
          alignItems: 'flex-end',
          flexDirection: 'row',
          padding: 20,
        }}>
        <View style={{width: '20%'}}>
        <TouchableOpacity 
        onPress={()=>{props.navigation.goBack()}}
        >
              <Image source={left} style={{width:20,height:20}} />
            </TouchableOpacity>
        </View>
        <View style={{width: '60%'}}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Account
          </Text>
        </View>

        <View
          style={{
            width: '20%',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          {/* <Image source={refresh} style={{ width: 25, height: 25 }} /> */}
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <View
            style={{borderWidth: 1, borderRadius: 50, borderColor: '#dedede'}}>
            {pickImage == '' ? (
              <Image
                source={require('../images/defaultImage.png')}
                style={{width: 80, height: 80, borderRadius: 50}}
              />
            ) : (
              <Image
                source={pickImage}
                style={{width: 80, height: 80, borderRadius: 50}}
              />
            )}
            <TouchableOpacity
              onPress={() => pickImageFunc()}
              style={{
                position: 'absolute',
                bottom: 10,
                right: 3,
                height: 30,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../images/camera.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.textInput}>
            <TextInput
            ref={inputRef1}
              value={textInputdata1}
              style={{flexGrow: 1, color: 'black'}}
              editable={textInput1}
              onChangeText={(text) => setTextInputdata1(text)}
            />
             <Ripple
            rippleColor={'#bebebe'}
            rippleOpacity={0.6}
            rippleDuration={1000}
            rippleFades={false}
            rippleSequential={true}
            style={{height:30,width:30,borderRadius:50,justifyContent:'center',alignItems:'center'}}
            rippleContainerBorderRadius={50} onPress={() => {setTextInput1(true);inputRef1.current.focus()}}>
              <Image
                source={require('../images/pencil.png')}
                style={{height: 17, width: 17}}
              />
            </Ripple>
          </View>
          <View style={[styles.textInput, {marginTop: 10}]}>
            <TextInput
            ref={inputRef2}
              style={{flexGrow: 1, color: 'black'}}
              value={textInputdata2}
              editable={textInput2}
              onChangeText={(text) => setTextInputdata2(text)}
              keyboardType="numeric"
            />
            <Ripple
            rippleColor={'#bebebe'}
            rippleOpacity={0.6}
            rippleDuration={1000}
            rippleFades={false}
            rippleSequential={true}
            style={{height:30,width:30,borderRadius:50,justifyContent:'center',alignItems:'center'}}
            rippleContainerBorderRadius={50} onPress={() => {setTextInput2(true);inputRef2.current.focus()}}>
              <Image
                source={require('../images/pencil.png')}
                style={{height: 17, width: 17}}
              />
            </Ripple>
          </View>
          <View style={[styles.textInput, {marginTop: 10}]}>
            <TextInput
             ref={inputRef3}
              style={{flexGrow: 1}}
              placeholder="Your address"
              editable={textInput3}
            />
           <Ripple
            rippleColor={'#bebebe'}
            rippleOpacity={0.6}
            rippleDuration={1000}
            rippleFades={false}
            rippleSequential={true}
            style={{height:30,width:30,borderRadius:50,justifyContent:'center',alignItems:'center'}}
            rippleContainerBorderRadius={50} onPress={() => {setTextInput3(true);inputRef3.current.focus()}}>
              <Image
                source={require('../images/pencil.png')}
                style={{height: 17, width: 17}}
              />
            </Ripple>
          </View>
          <View style={{width:'100%',marginTop:10}}>
          <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  borderTopRightRadius: 5,
                  borderTopLeftRadius: 5,
                  paddingTop: 10,
                  backgroundColor: '#e15301',
                  fontSize: 18,
                  fontWeight: 'bold',
                  borderBottomWidth: 0,
                  paddingBottom: 10,
                  borderBottomColor: 'gray',
               
                }}>
              Bank Details
              </Text>
          </View>
          <View style={[styles.textInput, {marginTop: 10}]}>
            <TextInput
             ref={inputRef4}
              style={{flexGrow: 1}}
              placeholder="Bank name"
              editable={textInput3}
            />
             <Ripple
            rippleColor={'#bebebe'}
            rippleOpacity={0.6}
            rippleDuration={1000}
            rippleFades={false}
            rippleSequential={true}
            style={{height:30,width:30,borderRadius:50,justifyContent:'center',alignItems:'center'}}
            rippleContainerBorderRadius={50} onPress={() => {setTextInput3(true);inputRef4.current.focus()}}>
              <Image
                source={require('../images/pencil.png')}
                style={{height: 17, width: 17}}
              />
            </Ripple>
          </View>
          <View style={[styles.textInput, {marginTop: 10}]}>
            <TextInput
             ref={inputRef5}
              style={{flexGrow: 1}}
              placeholder="Account number"
              editable={textInput4}
              keyboardType="numeric"
            />
             <Ripple
            rippleColor={'#bebebe'}
            rippleOpacity={0.6}
            rippleDuration={1000}
            rippleFades={false}
            rippleSequential={true}
            style={{height:30,width:30,borderRadius:50,justifyContent:'center',alignItems:'center'}}
            rippleContainerBorderRadius={50} onPress={() => {setTextInput4(true);inputRef5.current.focus()}}>
              <Image
                source={require('../images/pencil.png')}
                style={{height: 17, width: 17}}
              />
            </Ripple>
          </View>
          <View
            style={{
              marginTop: 10,
              borderBottomWidth: 1,
              borderColor: '#bababa',
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 8,
            }}>
            {/* <View style={{width: '20%'}}>
              <Text style={{marginLeft: 3}}></Text>
            </View> */}
            <View
              style={{
                width: '50%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                borderWidth:0,
                marginLeft:-5
              }}>
              <RadioButton
                value="Savings"
                // status={this.state.checked === 'Male' ? 'checked' : 'unchecked'}
                // onPress={() =>
                //   this.setState({
                //     checked: 'Male',
                //   })
                // }
              />
              <Text>Savings</Text>
            </View>
            <View
              style={{
                width: '50%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <RadioButton
                value="Cheque"
                // status={
                //   this.state.checked === 'Female' ? 'checked' : 'unchecked'
                // }
                // onPress={() =>
                //   this.setState({
                //     checked: 'Female',
                //   })
                // }
              />
              <Text>Cheque</Text>
            </View>
          </View>
       
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
           <Ripple
            rippleColor={'white'}
            rippleOpacity={0.6}
            rippleDuration={1000}
            rippleFades={false}
            rippleSequential={true}
         
           rippleContainerBorderRadius={5}
            style={{
              backgroundColor: '#e15301',
              borderRadius: 8,
              padding: 10,
              width: 120,
              margin: 5,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
              Update
            </Text>
          </Ripple>
        </View>
      </View>
   
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 100,
    backgroundColor: '#672e91',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  textInput: {
    width: '100%',
    borderColor: '#aeaeae',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  schedule: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScrollContainer: {
    backgroundColor: '#e15301',
    flexGrow: 1,
    marginTop: 0,
    width: screenWidth,
    justifyContent: 'center',
    // borderRadius:10,
    flexDirection: 'row',
  },
  ScrollTextContainer: {
    fontSize: 20,
    padding: 10,
    marginRight: 40,
    color: 'white',
    textAlign: 'center',
  },
});
