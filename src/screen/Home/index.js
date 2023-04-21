import React, { useEffect, useState } from 'react';
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
import { getRecipesList } from '../../components/http';

function Home({ navigation }) {
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState(categoriesList);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [healthyRecipes, setHealthyRecipes] = useState([]);

  // console.log('recipes Home: ', recipes);
  // console.log('healthyRecipes: ', healthyRecipes);
  // console.log('tagList: ', tags);
  // console.log('Filtered: ', filteredRecipes);

  const handleRecipesFetch = async (tags, size) => {
    try {
      const getRecipes = await getRecipesList(tags, size);
      return getRecipes?.data?.results;
    } catch (e) {
      console.log('error fetch: ', e);
    }
  };

  useEffect(() => {
    (async () => {
      const tagsList = [];
      const rec = await handleRecipesFetch(null, '15');
      setRecipes(rec);
      recipes?.forEach((recipe) => {
        recipe?.tags?.forEach((tag) => {
          if (!tagsList.includes(tag?.name)) {
            tagsList?.push(tag.name);
          }
        });
      });
      setTags(tagsList);
      console.log(tags);
      setCategory(tagsList);
      const healthyRec = await handleRecipesFetch('healthy', '5');
      setHealthyRecipes(healthyRec);
    })();
  }, [recipes]);

  // useEffect(() => {
  //   const tagsList = [];
  //   recipes.forEach((recipe) => {
  //     recipe?.tags?.forEach((tag) => {
  //       if (!tagsList?.includes(tag.name)) {
  //         tagsList?.push(tag.name);
  //       }
  //     });
  //   });
  //   console.log('tagsList: ', tags);
  //   setCategory(tagsList);
  //   setTags(tagsList);
  // }, [recipes]);

  // useEffect(() => {
  //   setCategory([ALL, ...tags]);
  // }, [recipes]);

  useEffect(() => {
    console.log('selectedCategory: ', selectedCategory);
    // if (!selectedCategory) {
    //   setFilteredRecipes(recipes);
    // } else {
    //   const filteredCategory = recipes?.filter((item) => item?.tags.name.includes(selectedCategory));
    //   setFilteredRecipes(filteredCategory);
    // }
    // console.log('filter ', filteredRecipes);
    const filteredCategory = recipes?.filter((item) => item.tags.name.includes(selectedCategory));
    console.log('filteredCategory: ', filteredCategory);
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <Input pressable onPress={() => navigation.navigate('Search')} />
      <Title text="Feature Recipes" />
      <FlatList
        data={healthyRecipes}
        showsHorizontalScrollIndicator={false}
        style={styles.recipes}
        horizontal
        keyExtractor={(item) => String(item?.id)}
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
        <Categories category={tags} selectedCategory={selectedCategory} onCategoryPress={setSelectedCategory} />
      </View>
      <FlatList
        data={recipes}
        showsHorizontalScrollIndicator={false}
        style={styles.card}
        horizontal
        keyExtractor={(item) => String(item?.id)}
        renderItem={({ item, index }) => (
          <Card
            style={index === 0 ? { marginLeft: 24 } : {}}
            image={item?.thumbnail_url}
            title={item?.name}
            time={item?.cooking_time_minutes}
          />
        )}
      />
    </View>
  );
}

export default React.memo(Home);
