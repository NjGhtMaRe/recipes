import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        padding: 10,
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '500',
        alignSelf: 'center'
    },
    icon : {
        width: 24,
        height: 24,
        marginLeft: 12, 
    }
});

export default styles;