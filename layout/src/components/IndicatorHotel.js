import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Modal,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import img from '../assets/img/indic.jpg';

const IndicatorHotel = () => {
  const [modal, setModal] = useState(false);
  return (
    <SafeAreaView style={styles.banner}>
      <ImageBackground resizeMode="cover" style={styles.bannerImg} source={img}>
        <ActivityIndicator style={styles.ac} size="large" color="#FFFFFF" />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  banner: {},
  bannerImg: {    
    height: 850,
    width: 500,
  },
  ac: {marginTop: 350, right: 50},
});

export default IndicatorHotel;
