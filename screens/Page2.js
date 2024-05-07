import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { RadioGroup, Radio } from "@ui-kitten/components";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Page2 = () => {
  const [
    inputMultipleChoiceAnswerselectedIndex,
    setInputMultipleChoiceAnswerselectedIndex,
  ] = useState(undefined);
  const [
    inputMultipleChoiceAnswer1selectedIndex,
    setInputMultipleChoiceAnswer1selectedIndex,
  ] = useState(undefined);
  const [
    inputMultipleChoiceAnswer2selectedIndex,
    setInputMultipleChoiceAnswer2selectedIndex,
  ] = useState(undefined);

  return (
    <View style={styles.page2}>
      <Image
        style={styles.logoNew11}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <View style={styles.statusbarTime}>
        <Text style={[styles.text, styles.textPosition]}>9:41</Text>
      </View>
      <View style={[styles.rightSide, styles.rightSidePosition]}>
        <Image
          style={[styles.batteryIcon, styles.rightSidePosition]}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.iconMobileSignal, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/icon--mobile-signal.png")}
        />
      </View>
      <View style={styles.textElementsmessagingBanner}>
        <View style={styles.messagingBannerWrapper}>
          <Text
            style={[styles.messagingBanner, styles.messagingBannerTypo]}
          >{`Thank you for joining us!  `}</Text>
        </View>
        <View style={styles.useThisComponentToMessageWrapper}>
          <Text style={[styles.useThisComponent, styles.pleaseAnswerTheTypo]}>
            Please complete this document to help us improve future sessions.
          </Text>
        </View>
      </View>
      <Text style={[styles.pleaseAnswerThe, styles.pleaseAnswerTheTypo]}>
        Please answer the following questions in order to move forward...
      </Text>
      <View style={styles.textElementsquestionText}>
        <Text style={styles.questionTextGoesContainer}>
          <Text style={styles.messagingBannerTypo}>
            <Text
              style={styles.whatDoYou}
            >{`What do you consider yourself as? `}</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.selectOneOption1}>Select one option.</Text>
          </Text>
        </Text>
      </View>
      <RadioGroup
        style={[styles.inputmultipleChoiceAnswer, styles.inputmultiplePosition]}
        selectedIndex={inputMultipleChoiceAnswerselectedIndex}
        onChange={setInputMultipleChoiceAnswerselectedIndex}
      >
        <Radio>
          {() => (
            <Text style={styles.inputMultipleChoiceAnswerText}>
              {" "}
              A Business
            </Text>
          )}
        </Radio>
      </RadioGroup>
      <RadioGroup
        style={[
          styles.inputmultipleChoiceAnswer1,
          styles.inputmultiplePosition,
        ]}
        selectedIndex={inputMultipleChoiceAnswer1selectedIndex}
        onChange={setInputMultipleChoiceAnswer1selectedIndex}
      >
        <Radio>
          {() => (
            <Text style={styles.inputMultipleChoiceAnswer1Text}>
              {" "}
              An Influencer
            </Text>
          )}
        </Radio>
      </RadioGroup>
      <RadioGroup
        style={styles.inputmultipleChoiceAnswer2}
        selectedIndex={inputMultipleChoiceAnswer2selectedIndex}
        onChange={setInputMultipleChoiceAnswer2selectedIndex}
      >
        <Radio>
          {() => (
            <Text style={styles.inputMultipleChoiceAnswer2Text}>
              {" "}
              A Content Creator
            </Text>
          )}
        </Radio>
      </RadioGroup>
    </View>
  );
};

const styles = StyleSheet.create({
  inputMultipleChoiceAnswerText: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
    color: "#000",
  },
  inputMultipleChoiceAnswer1Text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#000",
  },
  inputMultipleChoiceAnswer2Text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#000",
  },
  textPosition: {
    top: 1,
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  messagingBannerTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  pleaseAnswerTheTypo: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    lineHeight: 22,
  },
  inputmultiplePosition: {
    paddingRight: 8,
    paddingTop: 8,
    width: 390,
    left: 22,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  logoNew11: {
    top: 43,
    right: 83,
    width: 269,
    height: 289,
    position: "absolute",
  },
  text: {
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
  },
  statusbarTime: {
    marginLeft: -193,
    borderRadius: Border.br_5xl,
    height: 21,
    width: 54,
    left: "50%",
    top: 10,
    position: "absolute",
  },
  batteryIcon: {
    marginLeft: 11.3,
    top: 0,
    width: 27,
  },
  wifiIcon: {
    width: 17,
    height: 12,
  },
  iconMobileSignal: {
    marginLeft: -38.7,
    width: 18,
    height: 12,
    left: "50%",
  },
  rightSide: {
    marginLeft: 114,
    width: 77,
    top: 10,
  },
  messagingBanner: {
    color: Color.colorDarkgray_200,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    flex: 1,
  },
  messagingBannerWrapper: {
    height: 38,
    flexDirection: "row",
    alignSelf: "stretch",
    padding: Padding.p_5xs,
  },
  useThisComponent: {
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  useThisComponentToMessageWrapper: {
    paddingHorizontal: Padding.p_5xs,
    display: "none",
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textElementsmessagingBanner: {
    top: 332,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke,
    padding: Padding.p_5xs,
    width: 396,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  pleaseAnswerThe: {
    top: 444,
    color: Color.colorGray_300,
    width: 414,
    height: 36,
    fontSize: FontSize.size_xl,
    left: 16,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  whatDoYou: {
    color: Color.colorBlack,
  },
  text1: {
    color: Color.colorDimgray,
  },
  selectOneOption1: {
    fontStyle: "italic",
    fontFamily: FontFamily.robotoItalic,
  },
  questionTextGoesContainer: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    alignSelf: "stretch",
  },
  textElementsquestionText: {
    top: 510,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.labelColorDarkPrimary,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    width: 396,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  inputmultipleChoiceAnswer: {
    top: 599,
  },
  inputmultipleChoiceAnswer1: {
    top: 630,
  },
  inputmultipleChoiceAnswer2: {
    top: 660,
    paddingTop: Padding.p_5xs,
    width: 390,
    left: 22,
    paddingRight: Padding.p_5xs,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  page2: {
    backgroundColor: Color.colorLavenderblush,
    width: "100%",
    height: 932,
    overflow: "hidden",
    flex: 1,
  },
});

export default Page2;
