import React from 'react';
import {Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = ({children, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
};

export default React.memo(Button);