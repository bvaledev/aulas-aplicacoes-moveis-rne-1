import { StyleSheet, Text, View } from "react-native"

type Props = {
    text: string
    hasError?: boolean
}

export function Alert({ text, hasError }: Props) {
    return hasError && (
        <View style={styles.alertError}>
            <Text style={styles.alertErrorText}>{text}</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    alertError: {
        width: "100%",
        backgroundColor: "#7d1a1aff",
        borderRadius: 8,
        padding: 20,
    },
    alertErrorText: {
        color: "#e6ccccff",
    }
});
