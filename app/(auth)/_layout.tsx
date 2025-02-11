import { Slot } from "expo-router";
import { ImageBackground, View, Image, Text } from "react-native";
import Window from "../helpers/window";

export default function AuthRoutesLayout() {
  return (
    // <ImageBackground
    //   source={require("../../assets/images/sunrise.png")}
    //   imageStyle={{ resizeMode: "cover" }}
    //   className="flex-1"
    // >
    <Window>
      <Image
        source={require("../../assets/images/apple-touch-icon.png")}
        className="w-32 h-32"
      />

      <Slot />
    </Window>
    // </ImageBackground>
  );
}
