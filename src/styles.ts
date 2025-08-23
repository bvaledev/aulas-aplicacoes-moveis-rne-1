import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F4F7",
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1E3A5F",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: "#5A7D9A",
        marginBottom: 40,
    },
    form: {
        width: "100%",
        gap: 8
    },
    input: {
        backgroundColor: "#d1d7dcff",
        borderStyle: "solid",
        borderColor: "#d0d1d3ff",
        borderWidth: 2,
        width: "100%",
        height: 50,
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 8
    },
    inputText: {
        color: "#a0a0a0ff",
        fontSize: 18,
        fontWeight: "bold",
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "#104b99",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    invalidButton: {
        backgroundColor: "#536e92ff",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
    },
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
