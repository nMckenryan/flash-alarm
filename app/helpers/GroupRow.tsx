import { Pressable, Text, View } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { CardGroup } from "../_types";
import { useState } from "react";

export default function GroupRow({ groupData }: { groupData: CardGroup }) {
  return (
    <View className="flex flex-row rounded-lg justify-between px-2 my-auto items-center w-full h-12 bg-slate-600">
      <Text className="text-lg md:text-2xl  text-white">{groupData.name}</Text>
      <Text className="text-lg md:text-2xl   text-white ">
        {groupData.percentMemorised}%
      </Text>
      <Text className="text-lg md:text-2xl   text-white ">
        Cards: {groupData.flashCards.length}
      </Text>
      <View className="flex flex-row items-center gap-2">
        <Pressable className="rounded-lg" onPress={() => {}}>
          <AntDesign name="edit" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
}
