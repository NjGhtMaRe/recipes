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
          <Rating style={styles.rating} rating={4.5} />
        </View>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.secondLine}>
        <View style={styles.row}>
          <Image style={styles.authorImage} source={{ uri: author.image }} />
          <Text style={styles.text}>{`By ${author?.name}`}</Text>
        </View>
        <View style={styles.row}>
          <Image style={styles.icon} source={require('../../../assets/timer.png')} />
          <Text style={styles.text}>{time}</Text>
        </View>
      </View>
    </View>
  );
}

RecipeCard.defaultProps = {
  title: 'Steak with tomato on hot dishes',
  image: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
  author: {
    name: 'James Milner',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/140911162843-jk-rowling.jpg?q=w_3000,h_1996,x_0,y_0,c_fill',
  },
  rating: '1',
  time: '20 mins',
};

export default React.memo(RecipeCard);
