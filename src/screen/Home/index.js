import React, { useState } from 'react';
import {
  FlatList,
  Image, ImageBackground, Text, View,
} from 'react-native';
import Button from '../../components/Button';
import categoriesList from '../../constants/category.json';
import Categories from '../../components/Categories';
import Input from '../../components/Input';
import RecipeCard from '../../components/RecipeCard';
import Title from '../../components/Title';
import styles from './styles';

function Home({ navigation }) {
  const [category, setCategory] = useState(categoriesList);
  const [selectedCategory, setSelectedCategory] = useState(category[0]);

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
      <Categories category={category} selectedCategory={selectedCategory} onCategoryPress={setSelectedCategory} />
    </View>
  );
}

export default React.memo(Home);
