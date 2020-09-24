import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../components/Home';

import Landing from '../components/Landing';
import SignIn from '../components/SignIn';
import Notifications from '../components/Notifications';
import NotificationsDetails from '../components/Notification_Details';
import Earnings from '../components/Earnings';
import TimeSchedule from '../components/TimeSchedule';
import Account from '../components/Account';
import Jobs from '../components/Jobs';
import Register from '../components/Register';
import forgetpass from '../components/forgetpassword';
import ContactUs from '../components/ContactUs';
import History from '../components/History';
import JobDetails from '../components/JobDetails';
const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Jobs"
          component={Jobs}
          options={{animationEnabled: false, headerShown: false}}
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{animationEnabled: false, headerShown: false}}
        />
         <Stack.Screen
          name="JobDetails"
          component={JobDetails}
          options={{animationEnabled: false, headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{animationEnabled: false, headerShown: false}}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{animationEnabled: false, headerShown: false}}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{animationEnabled: false, headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={SignIn}
          options={{animationEnabled: false, headerShown: false}}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{animationEnabled: false, headerShown: false}}
        />
        <Stack.Screen
          name="NotificationsDetails"
          component={NotificationsDetails}
          options={{animationEnabled: false, headerShown: false}}
        />
        <Stack.Screen
          name="Earnings"
          component={Earnings}
          options={{animationEnabled: false, headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{animationEnabled: false, headerShown: false}}
        />
        <Stack.Screen
          name="forgetpass"
          component={forgetpass}
          options={{animationEnabled: false, headerShown: false}}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{animationEnabled: false, headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
