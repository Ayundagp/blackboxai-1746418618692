import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { BBCContext } from '../context/BBCContext';

const SummaryScreen = ({ navigation }) => {
  const { formData, addBBC } = useContext(BBCContext);

  const handleFinish = () => {
    addBBC(formData);
    navigation.navigate('MainMenu');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Summary</Text>

      <Text style={styles.label}>Region:</Text>
      <Text style={styles.value}>{formData.region}</Text>

      <Text style={styles.label}>Area:</Text>
      <Text style={styles.value}>{formData.area}</Text>

      <Text style={styles.label}>Kebun:</Text>
      <Text style={styles.value}>{formData.kebun}</Text>

      <Text style={styles.label}>Blok No Baris:</Text>
      <Text style={styles.value}>{formData.blokNoBaris}</Text>

      <Text style={styles.label}>Arah Masuk:</Text>
      <Text style={styles.value}>{formData.arahMasuk}</Text>

      <Text style={styles.label}>No Pokok:</Text>
      <Text style={styles.value}>{formData.noPokok}</Text>

      <Text style={styles.label}>Jumlah Buah Bulan 1:</Text>
      <Text style={styles.value}>{formData.jumlahBuahBulan1}</Text>

      <Text style={styles.label}>Jumlah Buah Bulan 2:</Text>
      <Text style={styles.value}>{formData.jumlahBuahBulan2}</Text>

      <Text style={styles.label}>Jumlah Buah Bulan 3:</Text>
      <Text style={styles.value}>{formData.jumlahBuahBulan3}</Text>

      <Text style={styles.label}>Jumlah Buah Bulan 4:</Text>
      <Text style={styles.value}>{formData.jumlahBuahBulan4}</Text>

      <Text style={styles.label}>Jumlah Bunga:</Text>
      <Text style={styles.value}>{formData.jumlahBunga}</Text>

      <Button title="Finish" onPress={handleFinish} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default SummaryScreen;
