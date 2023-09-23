import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  Modal,
} from 'react-native';

const NewYork = () => {
  const [modal, setModal] = useState(false);
  return (
    <SafeAreaView>
      <Pressable onPress={() => setModal(true)}>
        <Image
          style={styles.mejores}
          source={require('../assets/img/new.png')}
        />
      </Pressable>
      {modal && (
        <Modal
          animationType="slide"
          visible={modal}
          onRequestClose={() => {
            setModal(!modal);
          }}>
          <Text style={styles.titleInfo}>England</Text>
          <Image
            style={styles.info}
            source={require('../assets/img/new.png')}
          />
          <View style={styles.container}>
            <Text style={styles.containerText}>
              New York is on the northeast coast of America, about ten hours by
              plane from São Paulo. There are direct flights from São Paulo with
              the following airlines: American Airlines, United Airlines, Delta
              Air... Read more at: The best way to get around New York, besides
              walking within the neighborhoods, is by subway or taxi. 
            </Text>
          </View>
          <Pressable style={styles.back} onPress={() => setModal(!modal)}>
            <Text style={styles.backInfo}>Voltar</Text>
          </Pressable>
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
    fontSize: 20,
    marginVertical: 0,
    color: '#222',
  },

  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 15,
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
    color: '#222',
    fontWeight: '500',
  },
  container: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  back: {
    backgroundColor: '#a9a89d',
    alignItems: 'center',
    marginTop: 15,
    padding: 10,
    marginHorizontal: 100,
    borderRadius: 10,
  },

  backInfo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },
  containerText: {
    fontSize: 25,
    color: '#222',
  },
});

export default NewYork;
