import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Detail', { pedido: 'Carro' })}
      >
        <Text>Carro</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Detail', { pedido: 'Casa' })}
      >
        <Text>Casa</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Detail', { pedido: 'Viagem' })}
      >
        <Text>Viagem</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
    backgroundColor: '#58c426',
    padding: 16,
    borderRadius: 8,
  },
});
