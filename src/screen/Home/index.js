import React from 'react';
import {
  FlatList,
  Image, ImageBackground, Text, View,
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import RecipeCard from '../../components/RecipeCard';
import Title from '../../components/Title';
import styles from './styles';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Input pressable onPress={() => navigation.navigate('Search')} />
      <Title text="Feature Recipes" />
      <FlatList
        data={[1, 2, 3]}
        showsHorizontalScrollIndicator={false}
        style={styles.recipes}
        horizontal
        keyExtractor={(item) => String(item)}
        renderItem={({ index }) => (
          <RecipeCard style={index === 0 ? { marginLeft: 24 } : {}} />
        )}
      />
    </View>
  );
}

export default React.memo(Home);
