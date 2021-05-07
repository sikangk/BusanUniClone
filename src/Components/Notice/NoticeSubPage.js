import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {WebView} from 'react-native-webview';

const NoticeSubPage = () => {
  return (
    <WebView
      source={{
        uri: 'https://dorm.pusan.ac.kr/dorm/bbs/list01/20000601',
      }}
    />
  );
};

export default NoticeSubPage;
