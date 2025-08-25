import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Alert } from './components/Alert';
import { styles } from './styles';

type UserLogin = {
  email: string,
  senha: string
}

const user: UserLogin = {
  email: 'aluno@univag.edu.br',
  senha: '123456789'
}

export default function App() {
  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
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
    alert("válido")
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
