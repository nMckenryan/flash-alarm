import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, TextInput, Button, View, ImageBackground } from "react-native";
import React from "react";

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handle the submission of the sign-in form
  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <ImageBackground
      source={require("../../assets/images/sunrise.png")}
      imageStyle={{ resizeMode: "cover" }}
      className="flex-1"
    >
      <View className="rounded-lg items-center justify-center my-auto mx-auto bg-slate-600 bg-opacity-70 p-5 gap-3 ">
        <Text className="text-xl font-bold">FlashAlarm</Text>
        <TextInput
          className="text-xl p-2"
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter email"
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
        <TextInput
          className="text-xl p-2"
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <View className="flex flex-row gap-5">
          <Button color={"green"} title="Register" onPress={onSignInPress} />
          <Button title="Sign in" onPress={() => router.navigate("/sign-up")} />
        </View>
      </View>
    </ImageBackground>
  );
}
