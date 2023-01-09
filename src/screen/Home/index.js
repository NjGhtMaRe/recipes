import React, { useContext, useState } from 'react';
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
import Card from '../../components/Card';
import { HealthyRecipesContext, RecipesContext } from '../../../App';

function Home({ navigation }) {
  const { recipes } = useContext(RecipesContext);
  const { healthyRecipes } = useContext(HealthyRecipesContext);
  const [category, setCategory] = useState(categoriesList);
  const [selectedCategory, setSelectedCategory] = useState(category[0]);

  console.log('recipes Home: ', recipes);
  console.log('healthyRecipes: ', healthyRecipes);

  return (
    <View style={styles.container}>
      <Input pressable onPress={() => navigation.navigate('Search')} />
      <Title text="Feature Recipes" />
      <FlatList
        data={healthyRecipes}
        showsHorizontalScrollIndicator={false}
        style={styles.recipes}
        horizontal
        keyExtractor={(item) => String(item)}
        renderItem={({ item, index }) => (
          <RecipeCard
            title={item?.name}
            image={item?.thumbnail_url}
            author={item?.credits?.length ? { name: item?.credits[0]?.name, image: item?.credits[0]?.image_url } : null}
            rating={item?.user_ratings?.score}
            time={item?.cooking_time_minutes}
            style={index === 0 ? { marginLeft: 24 } : {}}
          />
        )}
      />
      <View style={styles.category}>
        <Categories category={category} selectedCategory={selectedCategory} onCategoryPress={setSelectedCategory} />
      </View>
      <FlatList
        data={[1, 2, 3]}
        showsHorizontalScrollIndicator={false}
        style={styles.card}
        horizontal
        keyExtractor={(item) => String(item)}
        renderItem={({ index }) => (
          <Card style={index === 0 ? { marginLeft: 24 } : {}} />
        )}
      />
    </View>
  );
}

export default React.memo(Home);
