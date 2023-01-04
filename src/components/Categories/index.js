import React from 'react';
import {
  FlatList, Text, TouchableOpacity, View,
} from 'react-native';
import styles from './styles';

function Categories({ category, selectedCategory, onCategoryPress }) {
  return (
    <FlatList
      data={category}
      style={styles.categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => String(item)}
      renderItem={({ item, index }) => {
        const selected = selectedCategory === item;
        return (
          <TouchableOpacity
            onPress={() => { onCategoryPress(item); }}
            style={[styles.container, selected ? styles.selectedContainer : {}, index === 0 ? { marginLeft: 24 } : {}]}
          >
            <Text style={[styles.text, selected ? styles.selectedText : {}]}>{item}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

export default React.memo(Categories);
