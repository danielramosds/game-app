import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {useState} from 'react'

import GameStartScreen from './screens/GameStartScreen';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from "./screens/GameScreen";
import Constants from "./util/Constants";

export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver] = useState(true);

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber)
        setGameIsOver(false);
    }

    function gameOverHandler() {
        setGameIsOver(true);
    }

    let screen = <GameStartScreen onPickNumber={pickedNumberHandler}/>;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen/>;
    }

    return (<LinearGradient colors={[Constants.primaryColor500, Constants.secondaryColor500]} style={styles.mainStyle}>
        <ImageBackground
            source={Constants.getBackgroundImage}
            resizeMode={'cover'}
            style={styles.mainStyle}
            imageStyle={styles.backgroundImage}>
            <SafeAreaView style={styles.mainStyle}>
                {screen}
            </SafeAreaView>
        </ImageBackground>
    </LinearGradient>);
}

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.2
    }
});
