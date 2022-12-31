import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        width: '80%',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center',
        paddingHorizontal: 50,

    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '500',
    },
    icon : {
        width: 24,
        height: 24,
        marginLeft: 12, 
    }
});

export default styles;