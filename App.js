import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  
  return (
    <View
    style={styles.sectionContainer}>
      <View style={styles.container}>
        <Image style={styles.Image} source={{uri: 'https://uxmag.com/wp-content/uploads/2014/12/gestures-and-animations-small.jpg'}} />
        <View style={styles.cover}>
          <Text style={styles.title}>The Animated Library</Text>
        <Text style={styles.textDescription}>The Animated library is designed to make animations fluid, powerful, and painless to build and maintain. Animated focuses on declarative relationships between inputs and outputs, configurable transforms in between, and start/stop methods to control time-based animation execution.</Text>
        <Image style={styles.icon} source={require('./image/heartemp32.png')} />
      </View>
      </View>
    </View>
    );
};
};
export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 315,
    height: 450,
    borderRadius: 14,
    elevation: 33,
    shadowOffset: {width: 1, height: 1},
    backgroundColor: "#fff",
    shadowColor: "blue",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal: 4,
    marginVertical: 6,
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

