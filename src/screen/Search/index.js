import React from 'react';
import {
  Image, ImageBackground, Text, View,
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles';

function Home() {
  return (
    <View style={styles.container}>
      <Input />
    </View>
  );
}

export default React.memo(Home);
