import {View, StyleSheet} from "react-native";
import Title from "../components/Title";

export default function () {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guest</Title>

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