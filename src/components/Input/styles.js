import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
    marginVertical: 16,
    paddingVertical: 10,
    borderColor: colors.lightGrey,
  },
  icon: {
    width: 16,
    height: 16,
    marginLeft: 14,
  },
  input: {
    color: colors.black,
    fontSize: 12,
    marginLeft: 12,
  },
});

export default styles;
