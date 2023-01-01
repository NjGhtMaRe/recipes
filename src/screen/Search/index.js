import React from 'react';
import {
  Image, ImageBackground, Text, View,
} from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

function Home() {
  return (
    <View>
      <Text style={{ textAlign: 'center' }}>HOME</Text>
    </View>
  );
}

export default React.memo(Home);
