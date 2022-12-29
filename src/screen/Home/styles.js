import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    background: {
        width: width,
        height: height,
    },
    header: {
        marginTop: 100,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center'
    },
    text: {
        fontWeight: '500',
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    }
});

export default styles;