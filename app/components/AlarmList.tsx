import { Button, Pressable, Text, View } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function AlarmList() {
  return (
    <View className="flex flex-row justify-between px-2 my-auto items-center w-full h-12 bg-slate-600">
      <Text className="text-4xl text-white">9:00am</Text>
      <Text className="text-2xl  text-white ">MTWTFSS</Text>
      <Text className="text-2xl  text-white ">Group</Text>
      <View className="flex flex-row items-center gap-2">
        <Pressable onPress={() => {}}>
          <AntDesign name="edit" size={24} color="white" />
        </Pressable>
        <ToggleSwitch
          isOn={false}
          onColor="green"
          offColor="darkred"
          labelStyle={{ color: "black", fontWeight: "900" }}
          size="large"
          onToggle={(isOn) => console.log("changed to : ", isOn)}
        />
      </View>
    </View>
  );
}
