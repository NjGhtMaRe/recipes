import React from 'react';
import {
  Image, RecyclerViewBackedScrollViewComponent, Text, View,
} from 'react-native';
import Rating from '../Rating';
import styles from './styles';

function RecipeCard({
  title, author, image, rating, time, style,
}) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.firstLine}>
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={styles.title}>{title}</Text>
          <Rating style={styles.rating} rating={rating} />
        </View>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.secondLine}>
        {author ? (
          <View style={styles.row}>
            <Image style={styles.authorImage} source={{ uri: author.image }} />
            <Text style={styles.text}>{`By ${author?.name}`}</Text>
          </View>
        ) : <View />}
        {time ? (
          <View style={styles.row}>
            <Image style={styles.icon} source={require('../../../assets/timer.png')} />
            <Text style={styles.text}>{time}</Text>
          </View>
        ) : <View />}
      </View>
    </View>
  );
}

RecipeCard.defaultProps = {
  title: 'Steak with tomato on hot dishes',
  image: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
  rating: '1',
};

export default React.memo(RecipeCard);
