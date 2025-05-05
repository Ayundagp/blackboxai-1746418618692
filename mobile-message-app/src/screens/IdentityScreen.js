import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Picker, Button, ScrollView, Alert } from 'react-native';
import { BBCContext } from '../context/BBCContext';

const regions = ['Kalimantan', 'Sumatera'];
const areas = ['area 1', 'area 2', 'area 3', 'area 4', 'landak', 'Sungai rangit', 'UAI', 'LAb'];

const IdentityScreen = ({ navigation }) => {
  const { formData, updateFormData } = useContext(BBCContext);
  const [region, setRegion] = useState(formData.region || '');
  const [area, setArea] = useState(formData.area || '');
  const [kebun, setKebun] = useState(formData.kebun || '');
  const [blokNoBaris, setBlokNoBaris] = useState(formData.blokNoBaris || '');
  const [arahMasuk, setArahMasuk] = useState(formData.arahMasuk || '');

  const handleNext = () => {
    if (!region || !area || !kebun || !blokNoBaris || !arahMasuk) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    updateFormData({ region, area, kebun, blokNoBaris, arahMasuk });
    navigation.navigate('Form');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Region</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={region}
          onValueChange={(itemValue) => setRegion(itemValue)}
        >
          <Picker.Item label="Select region" value="" />
          {regions.map((r) => (
            <Picker.Item key={r} label={r} value={r} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Area</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={area}
          onValueChange={(itemValue) => setArea(itemValue)}
        >
          <Picker.Item label="Select area" value="" />
          {areas.map((a) => (
            <Picker.Item key={a} label={a} value={a} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Kebun</Text>
      <TextInput
        style={styles.input}
        value={kebun}
        onChangeText={setKebun}
        placeholder="Enter Kebun"
      />

      <Text style={styles.label}>Blok No Baris</Text>
      <TextInput
        style={styles.input}
        value={blokNoBaris}
        onChangeText={setBlokNoBaris}
        placeholder="Enter Blok No Baris"
      />

      <Text style={styles.label}>Arah Masuk</Text>
      <TextInput
        style={styles.input}
        value={arahMasuk}
        onChangeText={setArahMasuk}
        placeholder="Enter Arah Masuk"
      />

      <Button title="Next" onPress={handleNext} />
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
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#ffffff',
  },
});

export default IdentityScreen;
