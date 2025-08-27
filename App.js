import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>🌟 LJZ App 🌟</Text>
      <Text style={styles.welcome}>歡迎來到 LJZ 的第一個 App！</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: 20,
  },
  welcome: {
    fontSize: 18,
    color: '#374151',
  },
});
