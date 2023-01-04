import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.38,
    borderRadius: 12,
    marginRight: 15,
    marginTop: 60,
    padding: 15,
    backgroundColor: 'rgba(217,217,217,0.5)',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: -55,
    borderRadius: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 4,
    color: colors.grey,
  },
  timeText: {
    marginTop: 10,
    fontSize: 12,
    color: 'rgba(0,0,0,0.3)',
    fontWeight: 'bold',
  },
});

export default styles;
