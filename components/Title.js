import {Text, StyleSheet} from "react-native";
import Constants from "../util/Constants";

export default function ({children}){
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 25,
        textAlign: 'center',
        color: Constants.secondaryColor500,
        padding:10,
        borderWidth:2,
        borderColor:Constants.secondaryColor500,
    }
})