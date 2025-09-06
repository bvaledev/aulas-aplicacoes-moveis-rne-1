import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Início' }} />
      <Stack.Screen name="produtos" options={{ title: 'Produtos' }} />
      <Stack.Screen name="tabs" options={{ headerShown: true, title: 'Navegação Tabs' }} />
    </Stack>
  )
}
