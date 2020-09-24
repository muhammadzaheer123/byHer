import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  WheelPicker,
  TimePicker,
  DatePicker,
  ScrollView
} from 'react-native-wheel-picker-android';
import moment from 'moment';

export default function tabsDesign({date, day,Color}) {
  const [selectedItem, setSelectedItem] = useState(0);
  const [time, setTime] = useState(new Date());
  return (
    <View style={styles.tabContainer}>
      <View style={{

    height: 35,
    width: 55,
    borderRadius: 10,
    backgroundColor: Color,
    alignItems: 'center',
    padding: 5,
    justifyContent:'center',
    
  
  }}>
       
        <Text style={styles.textStyle}>{day}</Text>
      </View>
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
      <View>
      
      <TimePicker 
itemTextSize={20}
itemTextFontFamily="sans-serif-medium"
selectedItemTextSize={23}
selectedItemTextFontFamily="sans-serif-medium"
hideIndicator={true}

      
            initDate={new Date(moment().add(1, 'hour'))}
            onTimeSelected={(time) => {
              setTime(time);
              console.log('setting time', time);
              
            }}
            style={{width:40,height:140}}
          />
          </View>
          <View>
          
            <TimePicker
            itemTextSize={20}
            itemTextFontFamily="sans-serif-medium"
            selectedItemTextSize={23}
            selectedItemTextFontFamily="sans-serif-medium"
            hideIndicator={true}
    
          
            initDate={new Date(moment().add(1, 'hour'))}
            onTimeSelected={(time) => {
              setTime(time);
              console.log('setting time', time);
              
            }}
            style={{width:40,height:140}}
          />
          </View>

          {/* </ScrollView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  tabContainer: {
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    borderWidth:1,
    borderColor:'#dedede',
  
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: '#eddfed',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius:10
  },

  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.6,
  },
  tabsSubContainer: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  circle: {
    height: 6,
    width: 6,
    backgroundColor: 'black',
    borderRadius: 50,
  },
});
