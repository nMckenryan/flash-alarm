import { Slot } from "expo-router";
import { Stack } from "expo-router/stack";
import { ImageBackground, Pressable, View, Image } from "react-native";
import Window from "../components/window";
import Entypo from "@expo/vector-icons/Entypo";

export default function Layout() {
  return (
    <ImageBackground
      source={require("../../assets/images/sunrise.png")}
      imageStyle={{ resizeMode: "cover" }}
      className="flex-1"
    >
      <View className="justify-between flex flex-row m-5">
        <Image
          className="w-10 h-10"
          source={require("../../assets/images/favicon-32x32.png")}
        />
        <Pressable className="rounded-lg" onPress={() => {}}>
          <Entypo name="log-out" size={32} color="white" />
        </Pressable>
      </View>
      <Window>
        <Slot />
      </Window>
    </ImageBackground>
  );
}
