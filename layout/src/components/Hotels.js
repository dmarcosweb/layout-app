import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';

import IndicatorHotel from '../components/IndicatorHotel';

const Hotels = () => {
  const [modal, setModal] = useState(false);
  const [start, setStart] = useState(true);

  const startApp = () => {
    let init = setTimeout(() => {
      setStart(false);
    }, 2500);
  };

 

  return (
    <SafeAreaView>
      <Pressable onPress={() => setModal(true)}>
        <Text style={styles.titulo}>Amazing accommodations</Text>
        <View style={styles.listado}>
          <View style={styles.listadoItem}>
            <Image
              style={styles.mejores}
              source={require('../assets/img/hospedaje1.jpg')}
            />
          </View>
          <View style={styles.listadoItem}>
            <Image
              style={styles.mejores}
              source={require('../assets/img/hospedaje2.jpg')}
            />
          </View>
        </View>
      </Pressable>

      {modal && (
        <Modal
          animationType="slide"
          visible={modal}
          onRequestClose={() => {
            setModal(!modal);
          }}>
          {startApp()}
          {start && <IndicatorHotel />}

          {!start && (
            <ScrollView>
              <Text style={styles.titleInfo}>MPM HOTEL ♦</Text>
              <Image
                resizeMode="cover"
                style={styles.info}
                source={require('../assets/img/beat.jpg')}
              />
              <View style={styles.container}>
                <Text style={styles.containerText}>
                  Holidays are coming and you are looking for a good hotel to
                  relax and leave all your worries aside, right? So you you need
                  to know the (hotel name). Thoughtful rooms and prepared to
                  make your stay comfortable, a spa for you enjoy a massage or
                  relaxing treatment, a team prepared and ready to help you.
                  Make your reservation now same! (hotel website).Holidays
                  coming up and you're looking for a good hotel to relax and
                  leave all your worries aside, Is not it? Then you need to know
                  (hotel name). Rooms designed and prepared to make your stay a
                  comfortable, a spa for you to enjoy a massage or relaxing
                  treatment, a team prepared and ready to help you to help. Make
                  your reservation right now! (hotel website).
                </Text>
                <Text style={styles.containerText}>
                  That long-awaited trip is coming, all that’s left to do is
                  choose the one. perfect stay to make everything unforgettable!
                  So check it out o (hotel name). Comfortable rooms for all
                  budgets. (hotel name), because you don't need to spend all
                  your hotel savings!
                </Text>
                <Text style={styles.containerText}>
                  Come and discover an oasis of relaxation and fun, enjoying of
                  refreshing moments in the pool, revitalizing moments in the
                  sauna and pampering yourself with treatments at the spa, all
                  just steps from the comfort of your room. Oh, and you can
                  still keep up your workout in day! Take advantage of our
                  summer promotion and get up to 15% off discount on your
                  reservation. We are waiting for you!
                </Text>
              </View>
              <Text style={styles.titulo}>Contact (55) XX XXXX XXXX</Text>
              <Pressable style={styles.back} onPress={() => setModal(!modal)}>
                <Text style={styles.backInfo}>Voltar</Text>
              </Pressable>
            </ScrollView>
          )}
        </Modal>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 20,
    color: '#222',
  },

  info: {
    width: '100%',
    height: 300,
    marginVertical: 0,
  },
  titleInfo: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 15,
    color: '#726b00',
    fontWeight: '800',
  },
  container: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  containerText: {
    fontSize: 20,
    color: '#222',
  },
  back: {
    backgroundColor: '#a9a89d',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
    padding: 10,
    marginHorizontal: 100,
    borderRadius: 10,
  },

  backInfo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },

  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 3,
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listadoItem: {
    flexBasis: '49%',
  },
});

export default Hotels;
