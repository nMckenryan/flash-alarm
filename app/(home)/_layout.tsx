import { Slot } from "expo-router";
import { Stack } from "expo-router/stack";
import { ImageBackground } from "react-native";
import Window from "../components/window";

export default function Layout() {
  return (
    <ImageBackground
      source={require("../../assets/images/sunrise.png")}
      imageStyle={{ resizeMode: "cover" }}
      className="flex-1"
    >
      <Window>
        <Slot />
      </Window>
    </ImageBackground>
  );
}
