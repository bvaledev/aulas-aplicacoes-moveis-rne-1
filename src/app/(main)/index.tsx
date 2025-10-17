import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const { email } = useLocalSearchParams<{ email?: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      {email === undefined ? (
        <Link href="/auth/login" style={styles.link}>
          Ir para Login
        </Link>
      ) : (
        <>
          <Text style={styles.title}>{email}</Text>
          <Link href="/tabs/profile" style={styles.link}>
            Ir para  perfil
          </Link>
          <Link href="/produtos" style={styles.link}>
            Produtos
          </Link>
        </>
      )}
      <Link href="/produtos" style={styles.link}>
        Produtos
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  link: { marginTop: 20, color: 'blue' }
});
