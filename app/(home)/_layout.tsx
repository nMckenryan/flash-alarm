import { Slot } from "expo-router";
import { Stack } from "expo-router/stack";
import { ImageBackground, Pressable, View, Image, Alert } from "react-native";
import Window from "../helpers/window";
import Entypo from "@expo/vector-icons/Entypo";
import { useAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";

export default function Layout() {
  const auth = useAuth();

  const logoutModal = () =>
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: () => {
          auth.signOut();
          router.replace("/");
        },
      },
    ]);

  return (
    <>
      <View className="justify-between flex flex-row m-5">
        <Image
          className="w-10 h-10"
          source={require("../../assets/images/favicon-32x32.png")}
        />
        <Pressable className="rounded-lg" onPress={logoutModal}>
          <Entypo name="log-out" size={32} color="white" />
        </Pressable>
      </View>
      <Window>
        <Slot />
      </Window>
    </>
  );
}
