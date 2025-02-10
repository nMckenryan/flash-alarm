import { Pressable, Text, View } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { AlarmData } from "../types";
import { useState } from "react";

export default function AlarmRow({ alarmData }: { alarmData: AlarmData }) {
  const [isEnabled, setIsEnabled] = useState(alarmData.enabled);

  const toggleEnabled = () => {
    setIsEnabled(!isEnabled);
    alarmData.enabled = !isEnabled;
  };

  return (
    <View className="flex flex-row rounded-lg justify-between px-2 my-auto items-center w-full h-12 bg-slate-600">
      <Text className="text-lg md:text-2xl font-bold text-white">
        {`${alarmData.time
          .getHours()
          .toString()
          .padStart(2, "0")}:${alarmData.time
          .getMinutes()
          .toString()
          .padStart(2, "0")}`}
      </Text>
      <Text className="text-base md:text-2xl  text-white hidden md:block">
        {alarmData.days.join(", ")}
      </Text>
      <Text className="text-base md:text-2xl  text-white ">
        {alarmData.group.name}
      </Text>
      <View className="flex flex-row items-center gap-2">
        <Pressable className="rounded-lg" onPress={() => {}}>
          <AntDesign name="edit" size={24} color="white" />
        </Pressable>
        <ToggleSwitch
          isOn={isEnabled}
          onColor="green"
          offColor="darkred"
          labelStyle={{ color: "black", fontWeight: "900", borderRadius: 10 }}
          size="medium"
          onToggle={toggleEnabled}
        />
      </View>
    </View>
  );
}
