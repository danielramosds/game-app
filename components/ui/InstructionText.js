import {Text, StyleSheet} from "react-native";
import Constants from "../../util/Constants";

export default function ({children}) {
    return (
        <Text style={styles.instructionText}>{children}</Text>

    )
}

const styles = StyleSheet.create({
    instructionText: {
        color: Constants.whiteColer500,
        fontSize: 20,
    }
});