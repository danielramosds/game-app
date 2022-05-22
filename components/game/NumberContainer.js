import {View,Text, StyleSheet} from "react-native";
import Constants from "../../util/Constants";

export default function ({children}) {

    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:Constants.secondaryColor500,
        padding:30,
        borderRadius:10,
        margin:25,
        alignItems:"center",
        justifyContent:"center",
    },
    numberText:{
        color:Constants.secondaryColor500,
        fontSize:30,
        fontWeight:"bold",
    },
})