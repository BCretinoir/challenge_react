import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen name="map" options={{ headerShown: false, tabBarIcon: ({ color}) => <FontAwesome size={28} name="map-marker" color={color} /> }}  />
    </Tabs>
  );
}
