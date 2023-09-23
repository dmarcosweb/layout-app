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

const Paris = () => {
  const [modal, setModal] = useState(false);
  return (
    <SafeAreaView>
      <Pressable onPress={() => setModal(true)}>
        <Image
          style={styles.mejores}
          source={require('../assets/img/mejores3.jpg')}
        />
      </Pressable>
      {modal && (
        <Modal
          animationType="slide"
          visible={modal}
          onRequestClose={() => {
            setModal(!modal);
          }}>
          <Text style={styles.titleInfo}>France</Text>
          <Image
            style={styles.info}
            source={require('../assets/img/mejores3.jpg')}
          />
          <View style={styles.container}>
            <Text style={styles.containerText}>
              Paris, the capital of France, is known for its romantic beauty,
              classical architecture and rich cultural heritage. Here is a
              summary of the main tourist attractions and attractions in Paris:
              Tower Eiffel: Paris' most famous icon, an iron tower built by
              Gustave Eiffel offering panoramic views stunning views of the
              city. Renowned Museums: Louvre Museum.
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

export default Paris;
