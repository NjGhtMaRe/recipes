import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

function RecipeCard({
  title, image, author, rating, time,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default React.memo(RecipeCard);
