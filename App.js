import {StyleSheet, ImageBackground} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {useState} from 'react'

import GameStartScreen from './screens/GameStartScreen';
import GameScreen from "./screens/GameScreen";


export default function App() {
    const [userNumber, setUserNumber] = useState(null);

    function pickedNumberHandler(pickedNumber){
        setUserNumber(pickedNumber)
    }

    let screen = <GameStartScreen onPickNumber={pickedNumberHandler}/>;

    if(userNumber){
        screen = GameScreen();
    }

    return (<LinearGradient colors={['#770033', '#ddb52f']} style={styles.mainStyle}>
        <ImageBackground
            source={require('./assets/images/chocolate.jpg')}
            resizeMode={'cover'}
            style={styles.mainStyle}
            imageStyle={styles.backgroundImage}>
            {screen}
        </ImageBackground>
    </LinearGradient>);
}

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
    },
    backgroundImage:{
        opacity:0.2
    }
});
