import {StyleSheet, ImageBackground} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

import GameStartScreen from './screens/GameStartScreen'


export default function App() {
    return (<LinearGradient colors={['#770033', '#ddb52f']} style={styles.mainStyle}>
        <ImageBackground
            source={require('./assets/images/chocolate.jpg')}
            resizeMode={'cover'}
            style={styles.mainStyle}
            imageStyle={styles.backgroundImage}>
            <GameStartScreen/>
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
