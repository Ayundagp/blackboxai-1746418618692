import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AppInfoScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>App Info</Text>
      <Text style={styles.text}>
        This is a React Native mobile application for managing BBC entries.
        {'\\n\\n'}
        Features:
        {'\\n'}- User login
        {'\\n'}- BBC list with add functionality
        {'\\n'}- Multi-step form for BBC data entry
        {'\\n'}- Summary of entered data
        {'\\n\\n'}
        Developed with React Native and React Navigation.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8fafc',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default AppInfoScreen;
