import { Button, Text, View } from "react-native";
import { useState } from "react";
import AlarmRow from "../components/AlarmRow";
import { AlarmData, testData } from "../types";

export default function Page() {
  const [alarmList, setAlarmList] = useState<AlarmData[]>(testData);

  return (
    <View className="w-full px-2">
      <Text className="text-2xl text-white font-bold">Alarms</Text>
      <View className="flex flex-col gap-2 my-2">
        {alarmList.length > 0 ? (
          alarmList.map((alarm, index) => (
            <AlarmRow alarmData={alarm} key={index} />
          ))
        ) : (
          <View className="flex flex-row justify-between px-2 my-auto items-center w-full h-12 bg-slate-600">
            <Text className="text-2xl  text-white">No Alarms Set</Text>
          </View>
        )}
      </View>
      <View className="flex flex-row gap-2 justify-center">
        <Button title="Set New Alarm" color={"green"} onPress={() => {}} />
        <Button title="Options" onPress={() => {}} />
      </View>
    </View>
  );
}
