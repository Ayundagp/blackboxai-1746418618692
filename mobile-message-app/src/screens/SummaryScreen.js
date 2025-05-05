import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { BBCContext } from '../context/BBCContext';

const API_URL = 'http://your-domain/mobile-message-app/backend';

const SummaryScreen = ({ navigation }) => {
  const { formData, addBBC, user } = useContext(BBCContext);
  const [loading, setLoading] = useState(true);
  const [savedForms, setSavedForms] = useState([]);

  useEffect(() => {
    fetchSavedForms();
  }, []);

  const fetchSavedForms = async () => {
    try {
      const response = await fetch(`${API_URL}/get_form_data.php?user_id=${user.id}`);
      const data = await response.json();

      if (data.success) {
        setSavedForms(data.data);
      } else {
        Alert.alert('Error', data.message || 'Failed to fetch saved forms');
      }
    } catch (error) {
      Alert.alert('Error', 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFinish = () => {
    addBBC(formData);
    navigation.navigate('MainMenu');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Current Form Data</Text>
      
      <View style={styles.formCard}>
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
      </View>

      <Text style={styles.subtitle}>Previous Submissions</Text>
      
      {savedForms.map((form) => (
        <View key={form.id} style={styles.formCard}>
          <Text style={styles.formDate}>
            Submitted: {new Date(form.created_at).toLocaleDateString()}
          </Text>
          
          <Text style={styles.label}>Region:</Text>
          <Text style={styles.value}>{form.region}</Text>

          <Text style={styles.label}>Area:</Text>
          <Text style={styles.value}>{form.area}</Text>

          <Text style={styles.label}>Kebun:</Text>
          <Text style={styles.value}>{form.kebun}</Text>

          <Text style={styles.label}>Blok No Baris:</Text>
          <Text style={styles.value}>{form.blok_no_baris}</Text>

          <Text style={styles.label}>Arah Masuk:</Text>
          <Text style={styles.value}>{form.arah_masuk}</Text>

          <Text style={styles.label}>No Pokok:</Text>
          <Text style={styles.value}>{form.no_pokok}</Text>

          <Text style={styles.label}>Jumlah Buah Bulan 1:</Text>
          <Text style={styles.value}>{form.jumlah_buah_bulan1}</Text>

          <Text style={styles.label}>Jumlah Buah Bulan 2:</Text>
          <Text style={styles.value}>{form.jumlah_buah_bulan2}</Text>

          <Text style={styles.label}>Jumlah Buah Bulan 3:</Text>
          <Text style={styles.value}>{form.jumlah_buah_bulan3}</Text>

          <Text style={styles.label}>Jumlah Buah Bulan 4:</Text>
          <Text style={styles.value}>{form.jumlah_buah_bulan4}</Text>

          <Text style={styles.label}>Jumlah Bunga:</Text>
          <Text style={styles.value}>{form.jumlah_bunga}</Text>
        </View>
      ))}

      <Button title="Finish" onPress={handleFinish} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  formCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  formDate: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 8,
    color: '#475569',
  },
  value: {
    fontSize: 16,
    marginBottom: 8,
    color: '#1e293b',
  },
});

export default SummaryScreen;
