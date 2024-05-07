import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame = ({ style }) => {
  return (
    <View style={[styles.frame, style]}>
      <View style={styles.frame1}>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <View style={styles.frame3}>
            <Image
              style={[styles.groupIcon, styles.frame2Position]}
              contentFit="cover"
              source={require("../assets/group.png")}
            />
            <View style={styles.frame4}>
              <Text style={styles.or}>OR</Text>
              <View style={styles.frameChild} />
            </View>
          </View>
        </View>
        <View style={[styles.frame5, styles.framePosition]}>
          <Pressable style={[styles.frame6, styles.frameFlexBox]}>
            <View style={styles.frame7}>
              <Image
                style={[styles.frameItem, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-5.png")}
              />
              <Text style={styles.logIn}>Log in</Text>
            </View>
          </Pressable>
          <Text style={[styles.forgotPassword, styles.signUpFlexBox]}>
            Forgot password
          </Text>
        </View>
      </View>
      <Pressable style={[styles.frame8, styles.frameFlexBox]}>
        <Text style={[styles.signUp, styles.signUpFlexBox]}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  frame2Position: {
    left: 0,
    position: "absolute",
  },
  framePosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  signUpFlexBox: {
    height: 50,
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  groupIcon: {
    top: 15,
    maxHeight: "100%",
    width: 138,
  },
  or: {
    width: 61,
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    alignItems: "center",
    height: 29,
    justifyContent: "center",
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 161,
    height: 1,
  },
  frame4: {
    left: 146,
    flexDirection: "row",
    alignItems: "center",
    top: 0,
    height: 29,
    position: "absolute",
    overflow: "hidden",
  },
  frame3: {
    width: 367,
    height: 29,
    overflow: "hidden",
  },
  frame2: {
    top: 160,
    width: 388,
    left: 0,
    position: "absolute",
  },
  frameItem: {
    borderRadius: 4,
    width: 369,
    height: 60,
  },
  logIn: {
    top: 11,
    left: 123,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    width: 260,
    height: 37,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  frame7: {
    width: 383,
    height: 60,
    overflow: "hidden",
  },
  frame6: {
    width: 402,
  },
  forgotPassword: {
    width: "90.55%",
    top: "0%",
    textDecoration: "underline",
    color: Color.colorDarkgray_200,
    marginLeft: 36,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    height: 50,
  },
  frame5: {
    height: 110,
    overflow: "hidden",
    width: 402,
  },
  frame1: {
    height: 189,
    overflow: "hidden",
    width: 402,
  },
  signUp: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_300,
    width: 345,
  },
  frame8: {
    width: 366,
    marginTop: 22,
  },
  frame: {
    height: 261,
    overflow: "hidden",
    width: 402,
  },
});

export default Frame;
