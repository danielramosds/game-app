import {Pressable, View, Text, StyleSheet} from "react-native";

export default function ({children, onPress}) { //it could also be props and called as props.childen and props.onPress

    return (

        <View style={styles.btnViewWrapper}>
            <Pressable
                onPress={onPress}
                style={({pressed}) =>
                    pressed ?
                        [styles.btnPressableWrapper, styles.pressed] :
                        styles.btnPressableWrapper}
            >
                <Text style={styles.btnTxt}>{children}</Text>
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
