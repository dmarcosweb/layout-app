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

const Londres = () => {
  const [modal, setModal] = useState(false);
  return (
    <SafeAreaView>
      <Pressable onPress={() => setModal(true)}>
        <Image
          style={styles.mejores}
          source={require('../assets/img/mejores2.jpg')}
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
            source={require('../assets/img/mejores2.jpg')}
          />
          <View style={styles.container}>
            <Text style={styles.containerText}>
              Londres, a capital do Reino Unido, é uma das cidades mais icônicas
              e vibrantes do mundo, repleta de história, cultura, arquitetura
              impressionante e uma cena diversificada. Aqui está um resumo das
              principais atrações e aspectos turísticos de Londres:
            </Text>
            <Text style={styles.containerText}>
              Monumentos e Marco Históricos: - A Torre de Londres: Um castelo
              histórico que abriga as Joias da Coroa e tem uma rica história
              como prisão, palácio real e fortaleza. - Palácio de Buckingham: A
              residência oficial da monarquia britânica, conhecida pelas Trocas
              da Guarda e cerimônias reais. - Big Ben e Palácio de Westminster:
              Ícones da cidade, onde o Parlamento Britânico se reúne.
            </Text>
            <Text style={styles.containerText}>
              Museus e Cultura: - Museu Britânico: Um dos museus mais famosos do
              mundo, abriga uma vasta coleção de artefatos e obras de arte de
              diferentes culturas e épocas. - National Gallery:
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

export default Londres;
