import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,

} from 'react-native';



import Tab from '../subComponents/Tab'



const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Time Schedule</Text>
      </View> 
      
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ alignItems: 'flex-end', justifyContent: 'center',marginLeft:135}}>
            <Text style={{ marginBottom: 10, fontSize: 25, fontWeight: 'bold', marginTop: 10 }}>From</Text>
          </View>
          <View style={{ flexDirection: 'row' ,justifyContent:'flex-end'}}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ marginBottom: 10, fontSize: 22, fontWeight: 'bold', marginTop: 10,marginRight:30 }}>H</Text>
              </View>
              <View style={{  justifyContent: 'center' }}>
              <Text style={{ marginBottom: 10, fontSize: 22, fontWeight: 'bold', marginTop: 10 }}>M</Text>
              </View>
          </View>
        </View>
        <View style={{ flexDirection: 'column',flexGrow:0.65 }}>
          <View style={{ alignItems: 'flex-end', justifyContent: 'center'}}>
            <Text style={{ marginBottom: 10, fontSize: 25, fontWeight: 'bold', marginTop: 10,marginRight:20 }}>To</Text>
          </View>
          <View style={{ flexDirection: 'row' ,justifyContent:'flex-end'}}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ marginBottom: 10, fontSize: 22, fontWeight: 'bold', marginTop: 10,marginRight:30 }}>H</Text>
              </View>
              <View style={{  justifyContent: 'center' }}>
              <Text style={{ marginBottom: 10, fontSize: 22, fontWeight: 'bold', marginTop: 10 }}>M</Text>
              </View>
          </View>
        </View>
        </View>

      <ScrollView >
        <Tab day={'MON'} Color='#fdc566' />
        <Tab day={'TUE'} Color='#dedede' />
        <Tab day={'WED'} Color='#dedede' />
        <Tab day={'THU'} Color='#dedede' />
        <Tab day={'FRI'} Color='#dedede' />
        <Tab day={'SAT'} Color='#dedede' />
        <Tab day={'SUN'} Color='#dedede' />
      </ScrollView>

      {/* <View style={{height:80,backgroundColor:'#7e62eb',marginLeft:10,marginRight:10,borderRadius:10,marginTop:15,
  shadowColor: 'white',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5}}>
    <Text style={{fontSize:16,fontWeight:'bold',color:'white',marginLeft:50,marginTop:10}}>Working on Engine</Text>
    <Text style={{fontSize:16,fontWeight:'bold',color:'white',marginLeft:50,marginTop:15}}>10:50-11:30 </Text>

    </View> */}
    </View>








  );
};
const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#672e91',
    justifyContent: 'center',
    alignItems: 'center',
   
  }
})
export default App;
