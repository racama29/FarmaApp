import React, { useLayoutEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  { key: 'acidez', title: 'Acidez', image: require('./../../assets/acidez.png') },
  { key: 'reflujo', title: 'Reflujo', image: require('./../../assets/reflujo.png') },
  { key: 'estrenimiento', title: 'Estreñimiento', image: require('./../../assets/estreñimiento.png') },
  { key: 'diarrea', title: 'Diarrea', image: require('./../../assets/diarrea.png') },
  { key: 'sibo', title: 'Sibo', image: require('./../../assets/hinchazon.png') },
  { key: 'sii', title: 'Síndrome del Intestino Irritable', image: require('./../../assets/enfermedad intestinal.png') },
  { key: 'intolerancias', title: 'Intolerancias alimentarias', image: require('./../../assets/iintolerancia.png') },
  { key: 'microbiota', title: 'Microbiota Intestinal', image: require('./../../assets/sibo.png') },
];

export default function Home() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const navigateToAfeccion = (afeccion) => {
    navigation.navigate('Afeccion', { afeccion });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => navigateToAfeccion(item.key)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  grid: {
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
    margin: 30,
    backgroundColor: '#1983c6',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 15,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});