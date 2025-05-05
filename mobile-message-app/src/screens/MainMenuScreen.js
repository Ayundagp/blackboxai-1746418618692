import React, { useContext } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { BBCContext } from '../context/BBCContext';

const MainMenuScreen = ({ navigation }) => {
  const { bbcList } = useContext(BBCContext);

  const renderItem = ({ item }) => (
    <View style={styles.bbcItem}>
      <Text style={styles.bbcText}>{item.kebun} - {item.area}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="App Info" onPress={() => navigation.navigate('AppInfo')} />
      <FlatList
        data={bbcList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyText}>No BBC added yet.</Text>}
        style={styles.list}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Identity')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  list: {
    marginTop: 20,
  },
  bbcItem: {
    padding: 15,
    backgroundColor: '#e0e7ff',
    borderRadius: 8,
    marginBottom: 10,
  },
  bbcText: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#64748b',
  },
  addButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    backgroundColor: '#2563eb',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 36,
    lineHeight: 36,
  },
});

export default MainMenuScreen;
