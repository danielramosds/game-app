import {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Alert} from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";


function generateRandomBetween(min, max, exclude) {


    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber === exclude
        ? generateRandomBetween(min, max, exclude)
        : randomNumber;
}

let minValue = 1;
let maxValue = 100;

export default function ({userNumber, onGameOver}) {

    const initialGuess = generateRandomBetween(minValue, maxValue, userNumber);

    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {// direction => 'lower', 'higher'

        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'higher' && currentGuess > userNumber)) {
            Alert.alert("Don't Lie!", 'You know that this is wrong...', [{text: 'Sorry', style: "cancel"}]);
            return;
        }

        if (direction === 'lower') {
            maxValue = currentGuess - 1;
        }
        if (direction === 'higher') {
            minValue = currentGuess;
        }

        console.log("minValue:" + minValue + " maxValue:" + maxValue + " currentValue:" + currentGuess)
        setCurrentGuess(generateRandomBetween(minValue, maxValue, currentGuess));
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guest</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View style={styles.btnAreaWrapper}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
                </View>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 20,
        padding: 20,
    },
    btnAreaWrapper: {
        flexDirection: "row",
    }
})