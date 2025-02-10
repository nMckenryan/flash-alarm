import { Slot } from "expo-router";
import { ImageBackground, View, Image, Text } from "react-native";

export default function AuthRoutesLayout() {
  return (
    <ImageBackground
      source={require("../../assets/images/sunrise.png")}
      imageStyle={{ resizeMode: "cover" }}
      className="flex-1"
    >
      <View className="rounded-lg items-center justify-center my-auto mx-auto bg-neutral shadow-accent bg-opacity-70 p-5 gap-3 w-[75%]">
        <>
          <Image
            source={require("../../assets/images/apple-touch-icon.png")}
            className="w-32 h-32"
          />
        </>
        <Slot />
      </View>
    </ImageBackground>
  );
}
