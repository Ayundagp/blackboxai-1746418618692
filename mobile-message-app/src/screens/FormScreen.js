import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { BBCContext } from '../context/BBCContext';

const API_URL = 'http://your-domain/mobile-message-app/backend';

const FormScreen = ({ navigation }) => {
  const { formData, updateFormData, user } = useContext(BBCContext);
  const [loading, setLoading] = useState(false);
  const [noPokok, setNoPokok] = useState(formData.noPokok || '');
  const [jumlahBuahBulan1, setJumlahBuahBulan1] = useState(formData.jumlahBuahBulan1 || '');
  const [jumlahBuahBulan2, setJumlahBuahBulan2] = useState(formData.jumlahBuahBulan2 || '');
  const [jumlahBuahBulan3, setJumlahBuahBulan3] = useState(formData.jumlahBuahBulan3 || '');
  const [jumlahBuahBulan4, setJumlahBuahBulan4] = useState(formData.jumlahBuahBulan4 || '');
  const [jumlahBunga, setJumlahBunga] = useState(formData.jumlahBunga || '');

  const handleNext = async () => {
    if (
      !noPokok ||
      !jumlahBuahBulan1 ||
      !jumlahBuahBulan2 ||
      !jumlahBuahBulan3 ||
      !jumlahBuahBulan4 ||
      !jumlahBunga
    ) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    const formDataToSave = {
      user_id: user.id,
      noPokok,
      jumlahBuahBulan1,
      jumlahBuahBulan2,
      jumlahBuahBulan3,
      jumlahBuahBulan4,
      jumlahBunga,
    };

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/save_form.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSave),
      });

      const data = await response.json();

      if (data.success) {
        updateFormData(formDataToSave);
        navigation.navigate('Summary');
      } else {
        Alert.alert('Error', data.message || 'Failed to save form data');
      }
    } catch (error) {
      Alert.alert('Error', 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>No Pokok</Text>
      <TextInput
        style={styles.input}
        value={noPokok}
        onChangeText={setNoPokok}
        placeholder="Enter No Pokok"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Jumlah Buah Bulan 1</Text>
      <TextInput
        style={styles.input}
        value={jumlahBuahBulan1}
        onChangeText={setJumlahBuahBulan1}
        placeholder="Enter Jumlah Buah Bulan 1"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Jumlah Buah Bulan 2</Text>
      <TextInput
        style={styles.input}
        value={jumlahBuahBulan2}
        onChangeText={setJumlahBuahBulan2}
        placeholder="Enter Jumlah Buah Bulan 2"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Jumlah Buah Bulan 3</Text>
      <TextInput
        style={styles.input}
        value={jumlahBuahBulan3}
        onChangeText={setJumlahBuahBulan3}
        placeholder="Enter Jumlah Buah Bulan 3"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Jumlah Buah Bulan 4</Text>
      <TextInput
        style={styles.input}
        value={jumlahBuahBulan4}
        onChangeText={setJumlahBuahBulan4}
        placeholder="Enter Jumlah Buah Bulan 4"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Jumlah Bunga</Text>
      <TextInput
        style={styles.input}
        value={jumlahBunga}
        onChangeText={setJumlahBunga}
        placeholder="Enter Jumlah Bunga"
        keyboardType="numeric"
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Next" onPress={handleNext} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  label: {
    fontSize: 16,
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#ffffff',
  },
});

export default FormScreen;
