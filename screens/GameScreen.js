import {useState} from 'react'
import {View, StyleSheet} from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";


function generateRandomBetween(min, max, exclude) {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber === exclude
        ? generateRandomBetween(min, max, exclude)
        : randomNumber;
}

export default function ({userNumber}) {

    const initialGuess = generateRandomBetween(1,100,userNumber)

    const [currentGuess, setCurrentGuess] =  useState(initialGuess);

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guest</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 20,
        padding: 20,
    }
})