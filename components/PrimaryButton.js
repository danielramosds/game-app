import {Pressable, View, Text, StyleSheet} from "react-native";

export default function (props) { //it could also be {children} instead of props

    function btnPressHandler() {
        console.log("d")
    }

    return (

        <View style={styles.btnViewWrapper}>
            <Pressable
                onPress={btnPressHandler}
                style={({pressed}) =>
                    pressed ?
                        [styles.btnPressableWrapper, styles.pressed] :
                        styles.btnPressableWrapper}
            >
                <Text style={styles.btnTxt}>{props.children}</Text>
            </Pressable>
        </View>

    )
};

const styles = StyleSheet.create({
    btnViewWrapper: {
        borderRadius: 30,
        margin: 5,
        overflow: "hidden",
        flex: 1
    },
    btnPressableWrapper: {
        backgroundColor: '#222',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    btnTxt: {
        alignSelf: "center",
        color: '#FFF',
        fontSize: 18
    },
    pressed: {
        backgroundColor: '#444',
        opacity: 0.8,
    }

});
