import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Detail({ route }) {
  const { pedido } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Page</Text>

      <Text>Pedido: {pedido}</Text>
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
  },
});
