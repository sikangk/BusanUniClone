import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

const MenuSubPage = () => {
  return (
    <WebView
      source={{
        uri: 'https://dorm.pusan.ac.kr/dorm/function/mealPlan/2000040301',
      }}
    />
  );
};

export default MenuSubPage;
