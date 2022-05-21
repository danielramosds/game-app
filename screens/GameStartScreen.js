import {TextInput, View, StyleSheet} from 'react-native';
import PrimaryButton from "../components/PrimaryButton";

export default function () {
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <View style={styles.btnArea}>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#46001e',
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center'

    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 35,
        borderColor: '#ddbb55',
        borderBottomWidth: 2,
        color: '#ddbb55',
        marginVertical: 10,
        fontWeight: "bold",
        textAlign: "center",
    },
    btnArea:{
        flexDirection:"row",
    }

});