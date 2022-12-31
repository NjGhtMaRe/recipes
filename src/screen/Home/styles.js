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
        fontSize: 56,
        color: colors.white,
        textAlign: 'center'
    },
    subtitle: {
        marginTop: 30,
        marginBottom: 30,
        fontWeight: '500',
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
});

export default styles;