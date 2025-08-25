import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Alert } from '../../components/Alert';

type UserLogin = {
  email: string,
  senha: string
}

const user: UserLogin = {
  email: 'aluno@univag.edu.br',
  senha: '123456789'
}

export default function App() {
  const router = useRouter()
  const [email, setEmail] = useState<string>(user.email)
  const [senha, setSenha] = useState<string>(user.senha)
  const [hasError, setError] = useState<boolean>(false)

  const platformKeyboardBehavior = Platform.OS === 'ios' ? 'padding' : 'height'

  const eUmFormularioValido = email.length > 0 && senha.length >= 8

  function handleSetEmail(text: string) {
    setEmail(text)
  }

  function handleSetSenha(text: string) {
    setSenha(text)
  }

  function handleLogin() {
    setError(false)
    const eUmUsuarioValido = email === user.email && senha === user.senha
    if (!eUmUsuarioValido) {
      setError(true)
      return
    }
    router.replace('/tabs/profile')
  }



  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={platformKeyboardBehavior}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <StatusBar style="dark" />
        <Text style={styles.title}>Bem-vindo(a)!</Text>
        <Text style={styles.subtitle}>Acesse sua conta para continuar</Text>
        <View style={styles.form}>
          <Alert text="Usuário Inválido" hasError={hasError} />

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={handleSetEmail}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={handleSetSenha}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          disabled={!eUmFormularioValido}
          onPress={handleLogin}
          style={{
            ...styles.button,
            backgroundColor: eUmFormularioValido ?
              styles.button.backgroundColor
              : styles.invalidButton.backgroundColor
          }}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F4F7",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    minHeight: "100%",
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
});
