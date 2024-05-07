import * as React from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Padding } from "../GlobalStyles";

const Page = () => {
  return (
    <View style={styles.page1}>
      <View style={[styles.frame, styles.frameLayout]}>
        <View style={[styles.frame1, styles.frameLayout]}>
          <StatusBar barStyle="default" />
          <Image
            style={styles.rightSideIcon}
            contentFit="cover"
            source={require("../assets/right-side.png")}
          />
        </View>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <View style={styles.logoNew11Layout}>
            <View style={[styles.frame3, styles.framePosition]}>
              <Text style={styles.login}>Login</Text>
            </View>
            <Image
              style={[styles.frameIcon, styles.framePosition]}
              contentFit="cover"
              source={require("../assets/frame.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 384,
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  framePosition: {
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rightSideIcon: {
    width: 77,
    height: 13,
    marginLeft: 253,
  },
  frame1: {
    flexDirection: "row",
    height: 21,
  },
  login: {
    fontSize: 34,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDarkgray_200,
    textAlign: "left",
    width: 239,
    height: 54,
  },
  frame3: {
    top: 289,
    width: 331,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  frameIcon: {
    top: 0,
    height: 289,
    width: 269,
  },
  logoNew11Layout: {
    height: 289,
    width: 269,
  },
  frame2: {
    width: 325,
    marginTop: 12,
    overflow: "hidden",
  },
  frame: {
    height: 322,
  },
  vectorIcon: {
    width: 369,
    height: 434,
    marginTop: 102,
  },
  page1: {
    backgroundColor: Color.colorLavenderblush,
    flex: 1,
    width: "100%",
    height: 932,
    paddingLeft: 22,
    paddingTop: Padding.p_3xs,
    paddingRight: 6,
    paddingBottom: Padding.p_3xs,
    overflow: "hidden",
  },
});

export default Page;
