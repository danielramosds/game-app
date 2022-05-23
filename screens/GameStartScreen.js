import {TextInput, View, StyleSheet, Alert} from 'react-native';
import {useState} from "react";


import PrimaryButton from "../components/ui/PrimaryButton";
import Constants from "../util/Constants";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

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
        <View style={styles.rootContainer}>
            <Title>GUESS MY NUMBER</Title>
            <Card>
                <InstructionText>Enter a number between 1 and 99</InstructionText>
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
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center",
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

    },
});