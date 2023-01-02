import 'react-native-gesture-handler';
import { Image, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screen/Splash';
import Home from './src/screen/Home';
import Search from './src/screen/Search';

const Stack = createStackNavigator();

function BackButton(props) {
  return (
    <Pressable onPress={props.onPress}>
      <Image source={require('./assets/back-2.png')} style={styles.back} />
    </Pressable>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShadowVisible: false }}>
        <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash} />
        <Stack.Screen name="Home" component={Home} options={{ headerLeft: null, gestureEnabled: false }} />
        <Stack.Screen name="Search" component={Search} options={{ headerLeft: (props) => <BackButton {...props} /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {

  },
  back: {
    width: 30,
    height: 30,
    marginLeft: 16,
  },
});
