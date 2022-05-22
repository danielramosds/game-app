import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {useState} from 'react'

import GameStartScreen from './screens/GameStartScreen';
import GameScreen from "./screens/GameScreen";
import Constants from "./util/Constants";

export default function App() {
    const [userNumber, setUserNumber] = useState(null);

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber)
    }

    let screen = <GameStartScreen onPickNumber={pickedNumberHandler}/>;

    if (userNumber) {
        screen = <GameScreen/>;
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
