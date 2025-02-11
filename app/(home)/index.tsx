import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import AlarmRow from "../components/AlarmRow";
import { AlarmData, testData, testGroup } from "../_types";
import GroupRow from "../components/GroupRow";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

export default function Page() {
  const [alarmList, setAlarmList] = useState<AlarmData[]>(testData);
  const tg = [testGroup];

  return (
    <View className="flex flex-col gap-2 w-full px-2">
      <View className="flex flex-row justify-between">
        <Text className="text-xl text-white font-bold">Alarms</Text>
        <Pressable className="rounded-lg" onPress={() => {}}>
          <AntDesign name="plus" size={24} color="white" />
        </Pressable>
      </View>
      <View className="flex flex-col gap-2">
        {alarmList.length > 0 ? (
          alarmList.map((alarm, index) => (
            <AlarmRow alarmData={alarm} key={index} />
          ))
        ) : (
          <View className="flex flex-row justify-between px-2 my-auto items-center w-full h-12 bg-slate-600">
            <Text className="text-xl  text-white">No Alarms Set</Text>
          </View>
        )}
      </View>

      <View className="flex flex-row justify-between">
        <Text className="text-xl text-white font-bold">Flashcard Groups</Text>
        <Pressable className="rounded-lg" onPress={() => {}}>
          <AntDesign name="plus" size={24} color="white" />
        </Pressable>
      </View>

      <View className="flex flex-col gap-2">
        {tg.length > 0 ? (
          tg.map((group, index) => <GroupRow groupData={group} key={index} />)
        ) : (
          <View className="flex flex-row justify-between px-2 my-auto items-center w-full h-12 bg-slate-600">
            <Text className="text-2xl  text-white">No Groups Set</Text>
          </View>
        )}
      </View>
    </View>
  );
}
