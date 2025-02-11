import { Text, View } from "react-native";
import Window from "../helpers/window";

export default function Page() {
  return (
    <Window>
      <View>
        <Text className="text-2xl text-white font-bold">Set new Alarm</Text>
      </View>
    </Window>
  );
}
