import React, { useEffect } from 'react';
import {
  Image, ImageBackground, Text, View,
} from 'react-native';
import Button from '../../components/Button';
import { getRecipesList } from '../../components/http';
import styles from './styles';

function Splash({ navigation }) {
  const onHome = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    handleRecipesFetch();
  }, []);

  const handleRecipesFetch = async () => {
    try {
      const recipes = await getRecipesList();
      console.log('Recipes fetch: ', recipes);
    } catch (e) {
      console.log('error fetch: ', e);
    }
  };

  return (
    <ImageBackground style={styles.background} source={require('../../../assets/splash.png')}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../../assets/logo.png')} />
        <Text style={styles.title}>100K+ Premium Recipes</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.bigTitle}>Get</Text>
        <Text style={styles.bigTitle}>Cooking</Text>
        <Text style={styles.subtitle}>Simple way to find Tasty Recipe</Text>
        <Button onPress={onHome}>Start Cooking</Button>
      </View>
      <View style={styles.container} />

    </ImageBackground>
  );
}

export default React.memo(Splash);
