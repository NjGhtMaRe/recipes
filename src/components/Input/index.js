import React from 'react';
import {
  Image, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';

function Input({ showSearchIcon, placeholder, style }) {
  return (
    <View style={[styles.container, style]}>
      {showSearchIcon
        ? <Image style={styles.icon} source={require('../../../assets/search.png')} />
        : null}
      <TextInput style={styles.input} placeholderTextColor={colors.lightGrey} placeholder={placeholder} />
    </View>
  );
}

Input.defaultProps = {
  placeholder: 'Search recipe',
  showSearchIcon: true,
};

export default React.memo(Input);
