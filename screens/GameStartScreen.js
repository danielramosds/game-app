import {TextInput, View, StyleSheet, Alert} from 'react-native';
import {useState} from "react";


import PrimaryButton from "../components/PrimaryButton";

export default function ({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Enter a value between 1 and 99',
                [{text: 'OK', style: 'destructive', onPress: resetInputHandler}])
            return;
        }

        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.btnArea}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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
    btnArea: {
        flexDirection: "row",
    }

});