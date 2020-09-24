/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
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
} from 'react-native';
import logo from '../images/logo1.png';
import main from '../images/main1.png';
import img1 from '../images/img1.png';
import bg from '../images/bg1.jpg';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <View style={{ width: '100%', height: '100%', padding: 0 }}>
        <View style={{ backgroundColor: '#6c3694', padding: 10,height:'15%' }}>
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold' }}>Earnings</Text>
          <View 
            style={{ 
              marginTop: 10,
              marginBottom: 10,
              borderWidth: 2,
              borderRadius: 20,
              borderColor: 'white',
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 5,
              paddingVertical: 0
              }}>
            <View style={{ width: '35%', paddingVertical: 8 }}>
              <Text style={{ textAlign: 'center', color: 'white' }}>YEAR</Text>
            </View >
            <View style={{ width: '40%', borderWidth: 0, paddingVertical: 8, backgroundColor: '#e15301', borderRadius: 15 }}>
              <Text style={{ textAlign: 'center', color: 'white' }}>WEEK</Text>
            </View>
            <View style={{ width: '35%', paddingVertical: 8 }}>
              <Text style={{ textAlign: 'center', color: 'white' }}>MONTH</Text>
            </View>

          </View>
        
        </View>
        <View style={{ width: '100%', flex: 1, backgroundColor: 'white' }}>
          <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
            <View style={{ backgroundColor: '#6c3694', width: 20, padding: 8, paddingVertical: 6, borderRadius: 10 }}>

            </View>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>
              Earned
        </Text>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>
              $800
        </Text>
          </View>
        </View>

        <View style={{
          flexDirection: 'column',
          justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'white', flex: 1
        }}>
          <BarChart
            data={{
              labels: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
              datasets: [
                {
                  data: [
                    Math.round(Math.random() * 100),
                    Math.round(Math.random() * 100),
                    Math.round(Math.random() * 100),
                    Math.round(Math.random() * 100),
                    Math.round(Math.random() * 100),
                    Math.round(Math.random() * 100),
                    Math.round(Math.random() * 100)
                  ]
                }
              ]
            }}
            width={Dimensions.get("window").width - 10} // from react-native
            height={Dimensions.get("window").height / 2}

            yAxisLabel="$"
            yAxisSuffix="k"

            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundGradientFrom: "#6c3694",
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: "#6c3694",
              backgroundGradientToOpacity: 0,
              backgroundColor: '#6c3694',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              strokeWidth: 2, // optional, default 3
              barPercentage: 0.5,
              useShadowColorFromDataset: false,
              fillShadowGradient: '#6c3694',
              fillShadowGradientOpacity: 1,
              decimalPlaces: 0, // optional, defaults to 2dp
              style: {
                borderRadius: 16,
                padding: 0,
                marginVertical: 0,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#1a40d9"
              },

            }}
            style={{
              marginVertical: 10,
              borderRadius: 6,
              padding: 5,

            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default App;
