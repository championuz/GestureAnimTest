import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  
  return (
    <SafeAreaView
    style={styles.sectionContainer}>
      <View style={styles.container}>
        <Image style={styles.Image} source={{uri: 'https://uxmag.com/wp-content/uploads/2014/12/gestures-and-animations-small.jpg'}} />
        <View style={styles.cover}>
          <Text style={styles.title}>The Animated Library</Text>
        <Text style={styles.textDescription}>The Animated library is designed to make animations fluid, powerful, and painless to build and maintain. Animated focuses on declarative relationships between inputs and outputs, configurable transforms in between, and start/stop methods to control time-based animation execution.</Text>
        <Image style={styles.icon} source={require('./image/heartemp32.png')} />
      </View>
      </View>
    </SafeAreaView>
    );
};
};
export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f3f5'
  },
  container: {
    width: 315,
    height: 450,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#000',
  },
  cover: {
    paddingVertical: 10,
    paddingHorizontal: 10,

  },
  Image: {
    width: '100%',
    height: 240,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
  },
  icon: {
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    color: '#800000',
    fontWeight: 'bold',
  },
  textDescription: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  highlight: {
    fontWeight: '700',
  },
});

