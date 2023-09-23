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
import NewYork from './src/components/NewYork';
import Escotland from './src/components/Escotland';
import Hotels from './src/components/Hotels';
import Indicator from './src/components/Indicator';
import HotelsTwo from './src/components/HotelsTwo';

function App() {
  const [start, setStart] = useState(true);

  const startApp = () => {
    let init = setTimeout(() => {
      setStart(false);
    }, 2900);
  };

  return (
    <SafeAreaView>
      {startApp()}

      {start && (
        <View style={styles.indicator}>
          <Indicator />
        </View>
      )}

      {!start && (
        <ScrollView>
          {startApp()}
          {start && (
            <View style={styles.indicator}>
              <Indicator />
            </View>
          )}
          <View>
            <Image
              resizeMode="cover"
              style={styles.banner} 
              source={require('./src/assets/img/banner.png')}
            />
          </View>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>Tourist attractions</Text>
            <ScrollView horizontal>
              <View>
                <Image
                  style={styles.cuidad}
                  source={require('./src/assets/img/museu.png')}
                />
              </View>
              <View>
                <Image
                  style={styles.cuidad}
                  source={require('./src/assets/img/fut.png')}
                />
              </View>
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
                  source={require('./src/assets/img/ny.png')}
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
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.cuidad}
                  source={require('./src/assets/img/peixes.png')}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.cuidad}
                  source={require('./src/assets/img/comida.png')}
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
              <View>
                <NewYork />
              </View>
              <View>
                <Escotland />
              </View>
            </View>
            <Hotels />
            <HotelsTwo />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  indicator: {
    marginTop: 380,
  },
  contenedor: {
    backgroundColor: '#f8f7f9',
  },
  banner: {
    height: 300,
    flex: 1,
    width: '100%',
  },
  titulo: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
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
