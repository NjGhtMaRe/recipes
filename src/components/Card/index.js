import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

function Card({
  image, title, time, style,
}) {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text numberOfLines={3} style={styles.title}>{title}</Text>
      {time ? (
        <View>
          <Text style={styles.timeText}>Time</Text>
          <Text style={[styles.title, { fontSize: 12, textAlign: 'left' }]}>{time}</Text>
        </View>
      ) : <View />}
    </View>
  );
}

Card.defaultProps = {
  title: 'Steak with tomato on hot dishes',
  image: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
  author: {
    name: 'James Milner',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/140911162843-jk-rowling.jpg?q=w_3000,h_1996,x_0,y_0,c_fill',
  },
  rating: '1',
};

export default React.memo(Card);
