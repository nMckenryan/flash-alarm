import { tokenCache } from "@/cache";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import "../global.css";
import { ImageBackground } from "react-native";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <ImageBackground
          source={require("../assets/images/sunrise.png")}
          imageStyle={{ resizeMode: "cover" }}
          className="flex-1"
        >
          <Slot />
        </ImageBackground>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
