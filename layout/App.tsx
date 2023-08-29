/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App() {
  return (
    <>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.banner}
            source={require('./src/assets/img/bg.jpg')}
          />
        </View>
        <View>
          <Text>Paris Torre Eilfel</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
  },
});

export default App;
