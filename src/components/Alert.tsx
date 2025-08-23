import { Text, View } from "react-native"
import { styles } from "../styles"

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