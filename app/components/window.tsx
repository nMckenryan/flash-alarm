import { Slot } from "expo-router";
import { ImageBackground, View, Image, Text } from "react-native";

import { ReactNode } from "react";

export default function Window({ children }: { children: ReactNode }) {
  return (
    <View className="rounded-lg items-center justify-center my-auto mx-auto bg-neutral shadow-accent bg-opacity-70 p-5 gap-3 w-[75%]">
      {children}
    </View>
  );
}
