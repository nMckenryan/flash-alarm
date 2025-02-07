import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  const { user } = useUser();

  const isSignedIn = user !== null;

  return (
    <View>
      <Link href="/(auth)/sign-in">
        <Text>Sign in</Text>
      </Link>
      <Link href="/(auth)/sign-up">
        <Text>Sign up</Text>
      </Link>
    </View>
  );
}
