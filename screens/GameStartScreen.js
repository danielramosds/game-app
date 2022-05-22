import {TextInput, View, StyleSheet, Alert} from 'react-native';
import {useState} from "react";


import PrimaryButton from "../components/ui/PrimaryButton";
import Constants from "../util/Constants";

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
        backgroundColor: Constants.primaryColor600,
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
        borderColor: Constants.secondaryColor500,
        borderBottomWidth: 2,
        color: Constants.secondaryColor500,
        marginVertical: 10,
        fontWeight: "bold",
        textAlign: "center",
    },
    btnArea: {
        flexDirection: "row",
    }

});