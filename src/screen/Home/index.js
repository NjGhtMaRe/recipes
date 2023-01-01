import React from 'react';
import {
  Image, ImageBackground, Text, View,
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>HOME</Text>
      <Text style={{ textAlign: 'center' }} onPress={() => navigation.navigate('Search')}>Go to search</Text>
      <Input />
    </View>
  );
}

export default React.memo(Home);
