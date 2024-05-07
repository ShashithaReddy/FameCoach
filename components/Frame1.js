import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";

const Frame1 = ({ style }) => {
  return (
    <View style={[styles.frame, style]}>
      <RNPTextInput
        style={styles.frameFlexBox}
        placeholder="Enter instagram id"
        mode="flat"
        placeholderTextColor="#afa9a9"
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Bold" } },
          colors: { text: "#afa9a9" },
        }}
      />
      <View
        style={[styles.frame2, styles.frameFlexBox]}
        placeholder="Enter your password"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
    width: 388,
  },
  frame2: {
    marginTop: 20,
  },
  frame: {
    height: 134,
    alignItems: "center",
    overflow: "hidden",
    width: 388,
  },
});

export default Frame1;
