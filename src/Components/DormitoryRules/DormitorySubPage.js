import React from 'react';
import styled from 'styled-components';
import {WebView} from 'react-native-webview';

const Container = styled.View`
  flex: 1;
`;

const DomitorySubPage = () => {
  return (
    <Container>
      <WebView
        source={{uri: 'https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401'}}
      />
    </Container>
  );
};

export default DomitorySubPage;
