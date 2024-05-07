import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { RadioGroup, Radio } from "@ui-kitten/components";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Page6 = () => {
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
  const [
    inputMultipleChoiceAnswer3selectedIndex,
    setInputMultipleChoiceAnswer3selectedIndex,
  ] = useState(undefined);
  const [
    inputMultipleChoiceAnswer4selectedIndex,
    setInputMultipleChoiceAnswer4selectedIndex,
  ] = useState(undefined);

  return (
    <View style={styles.page6}>
      <Image
        style={styles.logoNew11}
        contentFit="cover"
        source={require("../assets/logo-new-1-1.png")}
      />
      <View style={[styles.statusbarTime, styles.textLayout]}>
        <Text style={[styles.text, styles.textLayout]}>9:41</Text>
      </View>
      <Image
        style={styles.rightSideIcon}
        contentFit="cover"
        source={require("../assets/right-side1.png")}
      />
      <View style={[styles.textElementsquestionText, styles.textPosition]}>
        <Text style={styles.questionTextGoesContainer}>
          <Text style={styles.whichAreaDoYouWantInfluen}>
            <Text
              style={styles.whichAreaDo}
            >{`Which area do you want influence people  in? `}</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.selectOneOr}>Select one or more options.</Text>
          </Text>
        </Text>
      </View>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={styles.page6Child} />
      <Image
        style={[styles.page6Item, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
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
              A Business
            </Text>
          )}
        </Radio>
      </RadioGroup>
      <RadioGroup
        style={[
          styles.inputmultipleChoiceAnswer2,
          styles.inputmultiplePosition,
        ]}
        selectedIndex={inputMultipleChoiceAnswer2selectedIndex}
        onChange={setInputMultipleChoiceAnswer2selectedIndex}
      >
        <Radio>
          {() => (
            <Text style={styles.inputMultipleChoiceAnswer2Text}>
              {" "}
              A Business
            </Text>
          )}
        </Radio>
      </RadioGroup>
      <RadioGroup
        style={[
          styles.inputmultipleChoiceAnswer3,
          styles.inputmultiplePosition,
        ]}
        selectedIndex={inputMultipleChoiceAnswer3selectedIndex}
        onChange={setInputMultipleChoiceAnswer3selectedIndex}
      >
        <Radio>
          {() => (
            <Text style={styles.inputMultipleChoiceAnswer3Text}>
              {" "}
              A Business
            </Text>
          )}
        </Radio>
      </RadioGroup>
      <Text style={styles.selfImprovement}>Self Improvement</Text>
      <Text style={[styles.yoga, styles.yogaTypo]}>Yoga</Text>
      <Text style={styles.fashion}>Fashion</Text>
      <Text style={[styles.skinCare, styles.yogaTypo]}>Skin care</Text>
      <RadioGroup
        style={[
          styles.inputmultipleChoiceAnswer4,
          styles.inputmultiplePosition,
        ]}
        selectedIndex={inputMultipleChoiceAnswer4selectedIndex}
        onChange={setInputMultipleChoiceAnswer4selectedIndex}
      >
        <Radio>
          {() => (
            <Text style={styles.inputMultipleChoiceAnswer4Text}>
              {" "}
              A Business
            </Text>
          )}
        </Radio>
      </RadioGroup>
      <Text style={[styles.stockMarket, styles.yogaTypo]}>Stock Market</Text>
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
    fontSize: 17,
    color: "#000",
  },
  inputMultipleChoiceAnswer2Text: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
    color: "#000",
  },
  inputMultipleChoiceAnswer3Text: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
    color: "#000",
  },
  inputMultipleChoiceAnswer4Text: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
    color: "#000",
  },
  textLayout: {
    width: 54,
    position: "absolute",
  },
  textPosition: {
    width: 396,
    left: 17,
    position: "absolute",
  },
  inputmultiplePosition: {
    paddingRight: 8,
    paddingTop: 8,
    flexDirection: "row",
    width: 390,
    position: "absolute",
    overflow: "hidden",
  },
  yogaTypo: {
    width: 282,
    height: 26,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base_7,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
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
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.colorGray_400,
    textAlign: "center",
    height: 20,
  },
  statusbarTime: {
    marginLeft: -193,
    left: "50%",
    borderRadius: Border.br_5xl,
    height: 21,
    top: 10,
  },
  rightSideIcon: {
    left: 329,
    width: 77,
    height: 13,
    top: 10,
    position: "absolute",
  },
  whichAreaDo: {
    color: Color.colorBlack,
  },
  text1: {
    color: Color.colorDimgray,
  },
  whichAreaDoYouWantInfluen: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  selectOneOr: {
    fontStyle: "italic",
    fontFamily: FontFamily.robotoItalic,
  },
  questionTextGoesContainer: {
    alignSelf: "stretch",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  textElementsquestionText: {
    top: 370,
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
    overflow: "hidden",
  },
  vectorIcon: {
    top: 753,
    left: 199,
    width: 12,
    height: 7,
    position: "absolute",
  },
  page6Child: {
    top: 505,
    left: 102,
    width: 91,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  page6Item: {
    top: 509,
    height: 24,
  },
  inputmultipleChoiceAnswer: {
    top: 453,
    left: 18,
    paddingRight: 8,
    paddingTop: 8,
    flexDirection: "row",
    width: 390,
  },
  inputmultipleChoiceAnswer1: {
    top: 484,
    left: 18,
    paddingRight: 8,
    paddingTop: 8,
    flexDirection: "row",
    width: 390,
  },
  inputmultipleChoiceAnswer2: {
    top: 515,
    left: 18,
    paddingRight: 8,
    paddingTop: 8,
    flexDirection: "row",
    width: 390,
  },
  inputmultipleChoiceAnswer3: {
    top: 546,
    left: 18,
    paddingRight: 8,
    paddingTop: 8,
    flexDirection: "row",
    width: 390,
  },
  selfImprovement: {
    top: 490,
    height: 26,
    width: 209,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base_7,
    left: 49,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  yoga: {
    top: 520,
    left: 47,
  },
  fashion: {
    top: 466,
    width: 209,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base_7,
    left: 49,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  skinCare: {
    top: 549,
    left: 49,
    width: 282,
  },
  inputmultipleChoiceAnswer4: {
    top: 578,
    paddingRight: 8,
    paddingTop: 8,
    flexDirection: "row",
    width: 390,
    left: 17,
  },
  stockMarket: {
    top: 580,
    left: 49,
    width: 282,
  },
  page6: {
    backgroundColor: Color.colorLavenderblush,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Page6;
