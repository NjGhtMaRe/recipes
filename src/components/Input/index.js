import React from 'react';
import {
  Image, Pressable, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';

function Input({
  showSearchIcon, placeholder, style, pressable, onPress,
}) {
  const renderInput = () => (
    <View style={[styles.container, style]}>
      {showSearchIcon
        ? <Image style={styles.icon} source={require('../../../assets/search.png')} />
        : null}
      <TextInput editable={!pressable} style={styles.input} placeholderTextColor={colors.lightGrey} placeholder={placeholder} />
    </View>
  );

  if (pressable) {
    return (
      <Pressable onPress={onPress}>
        {renderInput}
      </Pressable>
    );
  }

  return renderInput();
}

Input.defaultProps = {
  placeholder: 'Search recipe',
  showSearchIcon: true,
};

export default React.memo(Input);
