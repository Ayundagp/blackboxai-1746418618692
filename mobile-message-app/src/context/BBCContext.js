import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BBCContext = createContext();

const BBC_LIST_KEY = '@bbc_list';
const FORM_DATA_KEY = '@form_data';

export const BBCProvider = ({ children }) => {
  const [bbcList, setBbcList] = useState([]);
  const [formData, setFormData] = useState({
    region: '',
    area: '',
    kebun: '',
    blokNoBaris: '',
    arahMasuk: '',
    noPokok: '',
    jumlahBuahBulan1: '',
    jumlahBuahBulan2: '',
    jumlahBuahBulan3: '',
    jumlahBuahBulan4: '',
    jumlahBunga: '',
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedBbcList = await AsyncStorage.getItem(BBC_LIST_KEY);
        const storedFormData = await AsyncStorage.getItem(FORM_DATA_KEY);
        if (storedBbcList) setBbcList(JSON.parse(storedBbcList));
        if (storedFormData) setFormData(JSON.parse(storedFormData));
      } catch (e) {
        console.error('Failed to load data from storage', e);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem(BBC_LIST_KEY, JSON.stringify(bbcList));
      } catch (e) {
        console.error('Failed to save BBC list', e);
      }
    };
    saveData();
  }, [bbcList]);

  useEffect(() => {
    const saveFormData = async () => {
      try {
        await AsyncStorage.setItem(FORM_DATA_KEY, JSON.stringify(formData));
      } catch (e) {
        console.error('Failed to save form data', e);
      }
    };
    saveFormData();
  }, [formData]);

  const addBBC = (bbc) => {
    setBbcList([...bbcList, bbc]);
  };

  const updateFormData = (data) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <BBCContext.Provider value={{ bbcList, addBBC, formData, updateFormData }}>
      {children}
    </BBCContext.Provider>
  );
};
