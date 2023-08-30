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
              Paris, a capital da França, é conhecida por sua beleza romântica,
              arquitetura clássica e rica herança cultural. Aqui está um resumo
              dos principais pontos turísticos e atrações de Paris: Torre
              Eiffel: O ícone mais famoso de Paris, uma torre de ferro
              construída por Gustave Eiffel que oferece vistas panorâmicas
              deslumbrantes da cidade.
            </Text>
            <Text style={styles.containerText}>
              Museus Renomados: Museu do Louvre: Um dos maiores e mais
              importantes museus do mundo, abrigando obras-primas como a Mona
              Lisa e a Vênus de Milo. Museu d'Orsay: Concentra-se em arte
              impressionista e pós-impressionista, com obras de artistas como
              Monet, Van Gogh e Degas.
            </Text>
            <Text style={styles.containerText}>
              Champs-Élysées e Arco do Triunfo: Avenida famosa por suas lojas de
              luxo e cafés, culminando no imponente Arco do Triunfo, que
              homenageia os soldados franceses.
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
    fontSize: 15,
    color: '#222',
  },
});

export default Paris;
