import { Button, Pressable, Text, TextInput, View } from "react-native";
import Window from "../helpers/window";
import { useState } from "react";
import { CardGroup } from "../_types";

export default function Page() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [groupName, setGroupName] = useState("");
  const [flashcardList, setFlashcardList] = useState<CardGroup[]>([]);

  return (
    <Window>
      <Text className="text-xl text-white font-bold">New Flashcard Group</Text>
      <Text className="text-xl text-white font-bold">Question</Text>
      <TextInput
        className="border border-white rounded-lg p-2 w-full h-24 texsdt-white"
        placeholder="Question"
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => setQuestion(text)}
        value={question}
      />

      <Text className="text-xl text-white font-bold">Answer</Text>
      <TextInput
        className="border border-white text-white w-full rounded-lg p-2"
        placeholder="Answer"
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => setAnswer(text)}
        value={answer}
      />

      <Button color={"green"} onPress={() => {}} title="Register" />
    </Window>
  );
}
