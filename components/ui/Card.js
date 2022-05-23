import {StyleSheet, View} from "react-native";
import Constants from "../../util/Constants";


export default function ({children}) {
    return (

        <View style={styles.card}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: Constants.primaryColor600,
        marginTop: 40,
        marginHorizontal: 24,
        borderRadius: 10,
        padding: 20,
        alignItems: "center"

    }

});