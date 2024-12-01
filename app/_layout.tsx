import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "SukhumvitSet-Text": require("../assets/fonts/SukhumvitSet-Text.ttf"),
    "SukhumvitSet-Medium": require("../assets/fonts/SukhumvitSet-Medium.ttf"),
    "SukhumvitSet-Bold": require("../assets/fonts/SukhumvitSet-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
