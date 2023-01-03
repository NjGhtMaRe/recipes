import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width * 0.63,
    marginTop: 30,
    marginRight: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 10,
  },
  firstLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  secondLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    flex: 1,
  },

  text: {
    fontSize: 12,
    color: colors.grey,
  },
  image: {
    width: 80,
    height: 80,
    marginTop: -40,
    borderRadius: 40,
  },
  authorImage: {
    width: 20,
    height: 20,
    borderRadius: 15,
    marginRight: 6,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
});

export default styles;
