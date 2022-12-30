import React from 'react';
import { Image, ImageBackground, Text, View } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";

const Home = () => {
    return (
        <ImageBackground style={styles.background} source={require('../../../assets/splash.png')}>
            <View style={styles.header}>
                <View>
                    <Image style={styles.logo} source={require('../../../assets/logo.png')} />
                    <Text style={styles.text}>100K+ Premium Recipes</Text>
                </View>
                <View>
                    <Text style={styles.text}>100K+ Premium Recipes</Text>
                    <Text style={styles.text}>100K+ Premium Recipes</Text>
                </View>
                <Button>Start Cooking</Button>
            </View>
        </ImageBackground>
    )
};

export default React.memo(Home);