import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function Button({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
      <Image style={styles.icon} source={require('../../../assets/arrowRight.png')} />
    </TouchableOpacity>
  );
}

export default React.memo(Button);
