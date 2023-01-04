import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    padding: 6,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 16,
  },
  selectedContainer: {
    backgroundColor: colors.green,
    // borderWidth: 1,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.green,
  },
  selectedText: {
    color: colors.white,
    fontWeight: '500',
  },
});

export default styles;
