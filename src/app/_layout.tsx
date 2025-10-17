import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="(main)" />
      <Stack.Screen name="auth/login" options={{
        title: 'Login', // Impede voltar com gesto
        gestureEnabled: false,
        headerBackVisible: false, // Remove botão voltar do header
        headerLeft: () => null, // Remove botão voltar do header
        presentation: 'containedModal', // Bloqueia botão voltar do Android
        animation: 'slide_from_bottom', // Animação diferente para indicar que é "modal"
      }} />
    </Stack>
  )
}
