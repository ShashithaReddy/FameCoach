const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Page from "./screens/Page";
import Page1 from "./screens/Page1";
import Frame from "./components/Frame";
import Frame1 from "./components/Frame1";
import Page2 from "./screens/Page2";
import Page3 from "./screens/Page3";
import Page4 from "./screens/Page4";
import Page5 from "./screens/Page5";
import Page6 from "./screens/Page6";
import Page7 from "./screens/Page7";
import Page8 from "./screens/Page8";
import Page9 from "./screens/Page9";
import Page10 from "./screens/Page10";
import Page11 from "./screens/Page11";
import Page12 from "./screens/Page12";
import Page13 from "./screens/Page13";
import Page14 from "./screens/Page14";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-LightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="Page"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="Page"
                component={Page}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Page1"
                component={Page1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Page2"
                component={Page2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Page3"
                component={Page3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Page4"
                component={Page4}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Page5"
                component={Page5}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Page6"
                component={Page6}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Page7"
                component={Page7}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Page8"
                component={Page8}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Page9"
                component={Page9}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Page10"
                component={Page10}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Page11"
                component={Page11}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Page12"
                component={Page12}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Page13"
                component={Page13}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Page14"
                component={Page14}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
