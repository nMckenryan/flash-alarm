import * as React from "react";
import { Text, TextInput, Button, View } from "react-native";
import { isClerkAPIResponseError, useSignUp } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { ClerkAPIError } from "@clerk/types";
import { Link } from "expo-router";

export default function SignUpScreen() {
  const { isLoaded, signUp } = useSignUp();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [errors, setErrors] = React.useState<ClerkAPIError[]>([]);
  const [password, setPassword] = React.useState("");

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress,
        password,
      });
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      if (isClerkAPIResponseError(err)) setErrors(err.errors);
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <>
      <Text className="text-xl text-white font-bold">Sign up</Text>
      <View className="flex flex-col w-full gap-2">
        <Text className="text-white">Email</Text>
        <TextInput
          className="text-xl p-2 text-white w-full justify-start"
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter email"
          onChangeText={(email) => setEmailAddress(email)}
          placeholderTextColor="white"
          underlineColorAndroid={"white"}
        />
        <Text className="text-white">Password</Text>
        <TextInput
          className="text-xl p-2 text-white w-full justify-start"
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          placeholderTextColor="white"
          underlineColorAndroid={"white"}
        />
      </View>

      <View>
        {errors.length > 0 && (
          <Text className="text-white">
            {errors.map((e) => e.message).join("\n")}
          </Text>
        )}
      </View>
      <View className="flex flex-col gap-5">
        <Button color={"green"} onPress={onSignUpPress} title="Register" />
        <Text className="text-white">
          Have an account?{" "}
          <Link className="font-bold" href={"/(auth)/sign-in"}>
            Sign In
          </Link>
        </Text>
      </View>
    </>
  );
}
