import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {ceil} from 'react-native-reanimated';
import {Switch} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home() {
  const [switchOn, setSwitchOn] = useState(false);
  function onToggleSwitch() {
    if (!switchOn) {
      setSwitchOn(true);
    } else {
      setSwitchOn(false);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: switchOn ? 'red' : 'white',
              marginBottom: 5,
              fontWeight: 'bold',
            }}>
            {switchOn ? 'Online' : 'Offline'}
          </Text>
          <Switch
            value={switchOn}
            onValueChange={onToggleSwitch}
            style={{marginRight: 10}}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#aeaeae',
              fontWeight: 'bold',
            }}>
            Welcome
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Mr. Peter
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          style={{
            justifyContent: 'center',
            marginRight: 15,
          }}>
          {/* <Image
            source={require('../images/bell-blue.png')}
            style={{height: 25, width: 25}}
          /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.imageStyle}>
          <View style={styles.overlayImage}>
            <Image
              source={require('../images/images.jpg')}
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',

            marginBottom: 10,

            flexGrow: 1,
          }}>
          <TouchableOpacity
            onPress={() => navigation.naviagte('Jobs')}
            style={{
              alignItems: 'center',
            }}>
            <View style={styles.singleTab}>
              <Image
                source={require('../images/work.png')}
                style={styles.imageSize}
              />
            </View>
            <Text
              style={{
                marginTop: 10,
                fontWeight: 'bold',
                color: 'black',
                opacity: 0.7,
              }}>
              Jobs
            </Text>
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
            }}>
            <View style={styles.singleTab}>
              <Image
                source={require('../images/earnings-black.png')}
                style={styles.imageSize}
              />
            </View>
            <Text
              style={{
                marginTop: 10,
                fontWeight: 'bold',
                color: 'black',
                opacity: 0.7,
              }}>
              Earnings
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <View style={styles.singleTab}>
              <Image
                source={require('../images/man.png')}
                style={styles.imageSize}
              />
            </View>
            <Text
              style={{
                marginTop: 10,
                fontWeight: 'bold',
                color: 'black',
                opacity: 0.7,
              }}>
              Account
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
            }}>
            <View style={styles.singleTab}>
              <Image
                source={require('../images/history.png')}
                style={styles.imageSize}
              />
            </View>
            <Text
              style={{
                marginTop: 10,
                fontWeight: 'bold',
                color: 'black',
                opacity: 0.7,
              }}>
              History
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <View style={styles.singleTab}>
              <Image
                source={require('../images/bell.png')}
                style={styles.imageSize}
              />
            </View>
            <Text
              style={{
                marginTop: 10,
                fontWeight: 'bold',
                color: 'black',
                opacity: 0.7,
              }}>
              Notifications
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
          marginRight: 15,
          marginBottom: 15,
          marginTop: 15,
          height: windowHeight - 300,
        }}>
        <Image
          source={require('../images/map.png')}
          resizeMode="cover"
          style={{height: windowHeight - 320, width: '100%'}}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#6b3694',
    height: 100,
  },
  profileContainer: {
    backgroundColor: 'white',
    height: 150,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 5,
    borderRadius: 10,
  },
  overlayImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginLeft: 15,
    marginRight: 15,
    marginTop: -30,
    borderWidth: 35,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imageSize: {
    width: 20,
    height: 20,
  },
  singleTab: {
    height: 50,
    width: 50,
    backgroundColor: '#dce1e9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
