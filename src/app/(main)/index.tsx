import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Link href="/auth/login" style={styles.link}>
        Ir para  Login
      </Link>
      <Link href="/tabs/profile" style={styles.link}>
        Ir para  perfil
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  link: { marginTop: 20, color: 'blue' }
});
