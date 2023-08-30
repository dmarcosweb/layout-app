/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Londres from './src/components/Londres';
import Paris from './src/components/Paris';
import Montreal from './src/components/Montreal';

function App() {
  return (
    <>
      <ScrollView>
        <View>
          <Image
            style={styles.banner}
            source={require('./src/assets/img/bg.jpg')}
          />
        </View>
        <View sstyle={styles.contenedor}>
          <Text style={styles.titulo}>Tourist attractions</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.cuidad}
                source={require('./src/assets/img/actividad1.jpg')}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.cuidad}
                source={require('./src/assets/img/actividad2.jpg')}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.cuidad}
                source={require('./src/assets/img/actividad3.jpg')}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.cuidad}
                source={require('./src/assets/img/actividad4.jpg')}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.cuidad}
                source={require('./src/assets/img/actividad5.jpg')}
              />
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Top Places</Text>
          <View>
            <View>
              <Montreal />
            </View>
            <View>
              <Londres />
            </View>
            <View>
              <Paris />
            </View>
          </View>
          <Text style={styles.titulo}>Comfortable lodging</Text>
          <View style={styles.listado}>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./src/assets/img/hospedaje1.jpg')}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./src/assets/img/hospedaje2.jpg')}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./src/assets/img/hospedaje3.jpg')}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./src/assets/img/hospedaje4.jpg')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 300,
    flex: 1,
    width: '100%',
  },
  titulo: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 20,
    color: '#222',
  },
  cuidad: {
    width: 250,
    height: 300,
    marginRight: 10,
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

export default App;
/*


*/
