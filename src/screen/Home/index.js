import React from 'react';
import { Image, ImageBackground, Text, View } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";

const Home = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../../../assets/splash.png')}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={require('../../../assets/logo.png')} />
                    <Text style={styles.text}>100K+ Premium Recipes</Text>
                </View>
                <Button>Start Cooking</Button>
            </ImageBackground>
        </View>
    )
};

export default React.memo(Home);