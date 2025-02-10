import { isClerkAPIResponseError, useSignIn } from "@clerk/clerk-expo";
import { Link, useNavigation, useRouter } from "expo-router";
import { Text, TextInput, Button, View, ImageBackground } from "react-native";
import React from "react";
import { ClerkAPIError } from "@clerk/types";

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [errors, setErrors] = React.useState<ClerkAPIError[]>([]);
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
      if (isClerkAPIResponseError(err)) setErrors(err.errors);
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

  const navigation = useNavigation();

  return (
    <>
      <Text className="text-xl text-white font-bold">Sign in</Text>
      <View className="flex flex-col w-full gap-2">
        <Text className="text-white">Email</Text>
        <TextInput
          className="text-xl p-2 text-white w-full justify-start"
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter email"
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
          textContentType="emailAddress"
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
        <Button color={"green"} title="Sign In" onPress={onSignInPress} />
        <Text className="text-white">
          New to the App?{" "}
          <Link className="font-bold" href={"/(auth)/sign-up"}>
            Register here
          </Link>
        </Text>
      </View>
    </>
  );
}
