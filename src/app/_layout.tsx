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
      <Stack.Screen name="auth/login" />
    </Stack>
  )
}
