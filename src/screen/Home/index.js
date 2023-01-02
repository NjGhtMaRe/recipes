import React from 'react';
import {
  Image, ImageBackground, Text, View,
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Title from '../../components/Title';
import styles from './styles';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Input pressable onPress={() => navigation.navigate('Search')} />
      <Title text="Feature Recipes" />
    </View>
  );
}

export default React.memo(Home);
