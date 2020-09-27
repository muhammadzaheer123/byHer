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
  Dimensions,
  TouchableHighlight
} from 'react-native';
import refresh from '../images/refresh.png';
import alarm from '../images/alarm.png';
import noti from '../images/noti1.png';
import Ripple from 'react-native-material-ripple';

import left from '../images/left-arrow-white.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notification: true,
      googlemap:false,
      waze:false,
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
    return (
      <View style={{width: '100%', height: '100%', padding: 0}}>
        <View
          style={{
            backgroundColor: '#6c3694',
            height:'15%',
            justifyContent: 'center',
            alignItems: 'flex-end',
            flexDirection: 'row',
            padding:20
           
          }}>
          <View style={{width: '20%'}}>
          <TouchableOpacity 
            onPress={()=>{this.props.navigation.goBack()}}
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
              New Job Offer
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
        <ScrollView style={{flex: 1}}>
          <View style={{alignItems: 'center'}}>

            <View
              style={{
                width: '95%',
                borderWidth: 0,
                borderRadius: 10,
                marginTop: 10,
                marginBottom: 5,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                padding: 0,
                backgroundColor: 'white',
                borderRadius: 5,
                justifyContent: 'center',
             
                paddingBottom: 10,
              }}>
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
              Client Details
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '90%',
                  marginLeft: '5%',
                  borderWidth: 0,
                  marginTop:7
                }}>
                <View style={{width: '30%',marginTop:0,borderWidth:0,paddingLeft:8}}>
                  <Image
                    source={require('../images/images.jpg')}
                    style={{height: 50, width: 50, borderRadius: 30}}
                  />
                </View>
                <View style={{width: '70%',borderWidth:0}}>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 18,
                      marginLeft: 0,
                      fontWeight: 'bold',
                    }}>
                    Plates Dynamix
                  </Text>
                </View>
              </View>
              <View style={{width: '90%', marginLeft: 15, borderWidth: 0}}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  <View style={{width: '30%'}}>
                    <Text
                      style={{
                        marginTop: '3%',
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#6c3694',
                      }}>
                      Address:
                    </Text>
                  </View>
                  <View style={{width: '70%'}}>
                    <Text style={{marginTop: 3, fontSize: 18}}>
                      12 South St
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: 3,
                  }}>
                  <View style={{width: '30%'}}>
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#6c3694',
                      }}>
                      Arrival:
                    </Text>
                  </View>
                  <View style={{width: '70%'}}>
                    <Text style={{marginTop: 5, fontSize: 18}}>13.5 KM in 13 min</Text>
                  </View>
                </View>
                <View style={{alignItems:'center'}}>
                <View style={{flexDirection:'row',marginTop:15,width:'100%',justifyContent:'space-evenly',marginLeft:10}}>
                <Ripple
            rippleColor={'#e15301'}
            rippleOpacity={0.6}
            rippleDuration={1000}
            rippleFades={false}
            rippleSequential={true}
            rippleContainerBorderRadius={5}
                   onPress={()=>this.setState({})} 
                   style={{height:40,width:125,flexDirection:'row',alignItems:'center',backgroundColor:!this.state.googlemap?'white':'#e15301',borderRadius:5,
                 shadowColor: '#000',
                 shadowOffset: {
                   width: 0,
                   height: 2,
                 },
                 shadowOpacity: 0.25,
                 shadowRadius: 3.84,
                 elevation: 5,}}>
                   <View  style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('../images/google-maps.png')} style={{height:25,width:25,marginLeft:5}} />
                    {/* <Text style={{marginLeft:5,color:this.state.googlemap?'white':'black'}}>Google Maps</Text> */}
                    <Text style={this.textStyle()}>Google Maps</Text>
                    
                    </View>

                  </Ripple>
                  <Ripple
            rippleColor={'#e15301'}
            rippleOpacity={0.6}
            rippleDuration={1000}
            rippleFades={false}
            rippleSequential={true}
            rippleContainerBorderRadius={5}
                  onPress={()=>this.setState({})} 
                  style={{height:40,width:125,flexDirection:'row',alignItems:'center',backgroundColor:'white',borderRadius:5,
                 shadowColor: '#000',
                 shadowOffset: {
                   width: 0,
                   height: 2,
                 },
                 shadowOpacity: 0.25,
                 shadowRadius: 3.84,
                 elevation: 5,}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('../images/woze.png')} style={{height:25,width:25,marginLeft:5}} />
                    {/* <Text style={{marginLeft:5,color:this.state.waze?'white':'black'}}>Waze App</Text> */}
                    <Text style={this.textStyleRegister()}>Waze App</Text>
                   
                    </View>
                  </Ripple>
               

                </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: '95%',
                borderWidth: 0,
                borderRadius: 10,
                marginTop: 5,
                marginBottom: 5,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                padding: 8,
                backgroundColor: 'white',
                borderRadius: 5,
                borderWidth: 0,
                padding: 0,
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  borderTopRightRadius: 5,
                  borderTopLeftRadius: 5,
                  paddingTop: 10,
                  paddingBottom: 12,
                  backgroundColor: '#e15301',
                  fontSize: 18,
                  fontWeight: 'bold',
                  borderBottomWidth: 0,
                  paddingBottom: 10,
                  borderBottomColor: 'gray',
                }}>
               Job Details
              </Text>
              <View
                style={{
                  width: '90%',
                  marginLeft: 5,
                  padding: 8,
                  paddingTop: 0,
                  paddingBottom: 0,
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  <View style={{width: '30%'}}>
                    <Text
                      style={{
                        marginTop: 3,
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#6c3694',
                      }}>
                      Service:
                    </Text>
                  </View>
                  <View style={{width: '70%'}}>
                    <Text style={{marginTop: 3, fontSize: 18,marginLeft:10}}>Clutch Kit Replacement</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  <View style={{width: '30%'}}>
                    <Text
                      style={{
                        marginTop: 3,
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#6c3694',
                      }}>
                      Charges:
                    </Text>
                  </View>
                  <View style={{width: '70%'}}>
                    <Text style={{marginTop: 3, fontSize: 18,marginLeft:10}}>
                    $120
                    </Text>
                  </View>
                </View>
              
              </View>
            </View>
            <View
              style={{
                width: '95%',
                borderWidth: 0,
                borderRadius: 10,
                marginTop: 5,
                marginBottom: 5,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                padding: 8,
                backgroundColor: 'white',
                borderRadius: 5,
                borderWidth: 0,
                padding: 0,
                paddingBottom: 10,
              }}>
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
                Appointment Details
              </Text>
              <View
                style={{
                  width: '90%',
                  marginLeft: 5,
                  padding: 8,
                  paddingTop: 0,
                  paddingBottom: 0,
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  <View style={{width: '30%'}}>
                    <Text
                      style={{
                        marginTop: 3,
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#6c3694',
                      }}>
                      Day:
                    </Text>
                  </View>
                  <View style={{width: '70%'}}>
                    <Text style={{marginTop: 3, fontSize: 18,marginLeft:10}}>Monday</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  <View style={{width: '30%'}}>
                    <Text
                      style={{
                        marginTop: 3,
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#6c3694',
                      }}>
                      Date:
                    </Text>
                  </View>
                  <View style={{width: '70%'}}>
                    <Text style={{marginTop: 3, fontSize: 18,marginLeft:10}}>
                      1 NOV, 2020
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: 3,
                  }}>
                  <View style={{width: '30%'}}>
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#6c3694',
                      }}>
                      Timings:
                    </Text>
                  </View>
                  <View style={{width: '70%'}}>
                    <Text style={{marginTop: 3, fontSize: 18,marginLeft:10}}>
                      9:00 AM - 11:00 AM
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
           <Ripple
            rippleColor={'white'}
            rippleOpacity={0.6}
            rippleDuration={1000}
            rippleFades={false}
            rippleSequential={true}
            rippleContainerBorderRadius={5}
              style={{
                backgroundColor: 'red',
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
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
                Decline
              </Text>
            </Ripple>
            <Ripple
            rippleColor={'white'}
            rippleOpacity={0.6}
            rippleDuration={1000}
            rippleFades={false}
            rippleSequential={true}
            rippleContainerBorderRadius={5}
              style={{
                backgroundColor: 'green',
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
                Accept
              </Text>
            </Ripple>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textSelected: {
    color: 'white',
    textAlign: 'center',
    marginLeft:5
  },

  text: {
    color: 'black',
    textAlign: 'center',
    marginLeft:5
  },
});

export default App;
