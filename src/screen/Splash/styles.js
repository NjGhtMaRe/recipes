import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        marginTop: 100,
    },
    body: {
        marginTop: 200,
        padding: 15,
        flex: 1,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center'
    },
    title: {
        fontWeight: '700',
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    bigTitle: {
        fontWeight: '500',
        fontSize: 50,
        color: colors.white,
        textAlign: 'center'
    },
    subtitle: {
        marginTop: 15,
        marginBottom: 50,
        fontWeight: '400',
        fontSize: 16,
        color: 'white',
        textAlign: 'center'
    },
});

export default styles;