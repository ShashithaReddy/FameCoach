import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Page8 = () => {
  return (
    <View style={styles.page8}>
      <Image
        style={styles.logoNew11}
        contentFit="cover"
        source={require("../assets/logo-new-1-1.png")}
      />
      <View style={styles.statusbarTime}>
        <Text style={styles.text}>9:41</Text>
      </View>
      <Image
        style={styles.rightSideIcon}
        contentFit="cover"
        source={require("../assets/right-side1.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={styles.page8Child} />
      <Image
        style={[styles.page8Item, styles.page8ItemLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <View
        style={[styles.textElementsmessagingBanner, styles.page8ItemLayout]}
      >
        <View style={[styles.messagingBannerWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.messagingBanner}>
            We are glad that you know what you want!
          </Text>
        </View>
        <View
          style={[
            styles.useThisComponentToMessageWrapper,
            styles.wrapperFlexBox,
          ]}
        >
          <Text style={[styles.useThisComponent, styles.giveUsAClr]}>
            Please complete this document to help us improve future sessions.
          </Text>
        </View>
      </View>
      <Text style={[styles.giveUsA, styles.giveUsAClr]}>
        Give us a moment to generate the best insights for you....
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page8ItemLayout: {
    width: 396,
    position: "absolute",
  },
  wrapperFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  giveUsAClr: {
    color: Color.colorBlack,
    textAlign: "left",
    lineHeight: 22,
  },
  logoNew11: {
    top: 43,
    right: 83,
    width: 269,
    height: 289,
    position: "absolute",
  },
  text: {
    top: 1,
    left: 0,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.colorGray_400,
    textAlign: "center",
    height: 20,
    lineHeight: 22,
    width: 54,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -193,
    left: "50%",
    borderRadius: Border.br_5xl,
    height: 21,
    width: 54,
    top: 10,
    position: "absolute",
  },
  rightSideIcon: {
    left: 329,
    width: 77,
    height: 13,
    top: 10,
    position: "absolute",
  },
  vectorIcon: {
    top: 753,
    left: 199,
    width: 12,
    height: 7,
    position: "absolute",
  },
  page8Child: {
    top: 505,
    left: 102,
    width: 91,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  page8Item: {
    top: 509,
    left: 17,
    height: 24,
  },
  messagingBanner: {
    color: Color.colorDarkgray_200,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    flex: 1,
  },
  messagingBannerWrapper: {
    height: 38,
    padding: Padding.p_5xs,
  },
  useThisComponent: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    flex: 1,
  },
  useThisComponentToMessageWrapper: {
    paddingHorizontal: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    display: "none",
  },
  textElementsmessagingBanner: {
    top: 305,
    left: 34,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke,
    height: 74,
    padding: Padding.p_5xs,
    overflow: "hidden",
  },
  giveUsA: {
    top: 450,
    left: 47,
    width: 360,
    height: 310,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  page8: {
    backgroundColor: Color.colorLavenderblush,
    width: "100%",
    height: 932,
    overflow: "hidden",
    flex: 1,
  },
});

export default Page8;
