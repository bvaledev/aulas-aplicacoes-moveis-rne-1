import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#1E3A5F' }} initialRouteName='profile'>
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil do Usuário',
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" color={color} size={28} />
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color }) => <Ionicons name="settings-outline" color={color} size={28} />
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => <Ionicons name="desktop-outline" color={color} size={28} />
        }}
      />
    </Tabs>
  );
}
