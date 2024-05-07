import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { RadioGroup, Radio } from "@ui-kitten/components";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Page7 = () => {
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
  const [
    inputMultipleChoiceAnswer5selectedIndex,
    setInputMultipleChoiceAnswer5selectedIndex,
  ] = useState(undefined);
  const [
    inputMultipleChoiceAnswer6selectedIndex,
    setInputMultipleChoiceAnswer6selectedIndex,
  ] = useState(undefined);
  const [
    inputMultipleChoiceAnswer7selectedIndex,
    setInputMultipleChoiceAnswer7selectedIndex,
  ] = useState(undefined);
  const [
    inputMultipleChoiceAnswer8selectedIndex,
    setInputMultipleChoiceAnswer8selectedIndex,
  ] = useState(undefined);
  const [
    inputMultipleChoiceAnswer9selectedIndex,
    setInputMultipleChoiceAnswer9selectedIndex,
  ] = useState(undefined);

  return (
    <View style={styles.page7}>
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
        <Text style={[styles.questionTextGoesContainer, styles.containerTypo]}>
          <Text style={styles.whatWouldBeYourPreferredA}>
            <Text
              style={styles.whatWouldBe}
            >{`What would be your preferred area of growth? `}</Text>
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
      <View style={styles.page7Child} />
      <Image
        style={[styles.page7Item, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <Text style={[styles.whatIsAreContainer, styles.containerTypo]}>
        <Text style={styles.whatWouldBeYourPreferredA}>
          <Text
            style={styles.whatWouldBe}
          >{`What is/ are your most preferred engagement tool. `}</Text>
          <Text style={styles.text1}>{` `}</Text>
        </Text>
        <Text style={styles.text1}>
          <Text style={styles.selectOneOr}>Select one option.</Text>
        </Text>
      </Text>
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
      <Text style={styles.likes}>Likes</Text>
      <Text style={[styles.engagementThroughComments, styles.sharesTypo]}>
        Engagement through comments
      </Text>
      <Text style={styles.reach}>Reach</Text>
      <Text style={[styles.shares, styles.sharesTypo]}>Shares</Text>
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
      <Text style={[styles.customerReach, styles.sharesTypo]}>
        Customer Reach
      </Text>
      <RadioGroup
        style={[
          styles.inputmultipleChoiceAnswer5,
          styles.inputmultiplePosition,
        ]}
        selectedIndex={inputMultipleChoiceAnswer5selectedIndex}
        onChange={setInputMultipleChoiceAnswer5selectedIndex}
      >
        <Radio>
          {() => (
            <Text style={styles.inputMultipleChoiceAnswer5Text}>
              {" "}
              A Business
            </Text>
          )}
        </Radio>
      </RadioGroup>
      <RadioGroup
        style={[
          styles.inputmultipleChoiceAnswer6,
          styles.inputmultiplePosition,
        ]}
        selectedIndex={inputMultipleChoiceAnswer6selectedIndex}
        onChange={setInputMultipleChoiceAnswer6selectedIndex}
      >
        <Radio>
          {() => (
            <Text style={styles.inputMultipleChoiceAnswer6Text}>
              {" "}
              A Business
            </Text>
          )}
        </Radio>
      </RadioGroup>
      <RadioGroup
        style={[
          styles.inputmultipleChoiceAnswer7,
          styles.inputmultiplePosition,
        ]}
        selectedIndex={inputMultipleChoiceAnswer7selectedIndex}
        onChange={setInputMultipleChoiceAnswer7selectedIndex}
      >
        <Radio>
          {() => (
            <Text style={styles.inputMultipleChoiceAnswer7Text}>
              {" "}
              A Business
            </Text>
          )}
        </Radio>
      </RadioGroup>
      <RadioGroup
        style={[
          styles.inputmultipleChoiceAnswer8,
          styles.inputmultiplePosition,
        ]}
        selectedIndex={inputMultipleChoiceAnswer8selectedIndex}
        onChange={setInputMultipleChoiceAnswer8selectedIndex}
      >
        <Radio>
          {() => (
            <Text style={styles.inputMultipleChoiceAnswer8Text}>
              {" "}
              A Business
            </Text>
          )}
        </Radio>
      </RadioGroup>
      <RadioGroup
        style={[
          styles.inputmultipleChoiceAnswer9,
          styles.inputmultiplePosition,
        ]}
        selectedIndex={inputMultipleChoiceAnswer9selectedIndex}
        onChange={setInputMultipleChoiceAnswer9selectedIndex}
      >
        <Radio>
          {() => (
            <Text style={styles.inputMultipleChoiceAnswer9Text}>
              {" "}
              A Business
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
  inputMultipleChoiceAnswer5Text: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
    color: "#000",
  },
  inputMultipleChoiceAnswer6Text: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
    color: "#000",
  },
  inputMultipleChoiceAnswer7Text: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
    color: "#000",
  },
  inputMultipleChoiceAnswer8Text: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
    color: "#000",
  },
  inputMultipleChoiceAnswer9Text: {
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
  containerTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  inputmultiplePosition: {
    paddingRight: 8,
    paddingTop: 8,
    flexDirection: "row",
    width: 390,
    position: "absolute",
    overflow: "hidden",
  },
  sharesTypo: {
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
  whatWouldBe: {
    color: Color.colorBlack,
  },
  text1: {
    color: Color.colorDimgray,
  },
  whatWouldBeYourPreferredA: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  selectOneOr: {
    fontStyle: "italic",
    fontFamily: FontFamily.robotoItalic,
  },
  questionTextGoesContainer: {
    alignSelf: "stretch",
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
  page7Child: {
    top: 505,
    left: 102,
    width: 91,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  page7Item: {
    top: 509,
    height: 24,
  },
  whatIsAreContainer: {
    top: 659,
    width: 388,
    left: 17,
    position: "absolute",
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
  likes: {
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
  engagementThroughComments: {
    top: 520,
    left: 47,
  },
  reach: {
    top: 466,
    width: 209,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base_7,
    left: 49,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  shares: {
    top: 549,
    left: 49,
    width: 282,
  },
  inputmultipleChoiceAnswer4: {
    top: 578,
    left: 17,
  },
  customerReach: {
    top: 580,
    left: 49,
    width: 282,
  },
  inputmultipleChoiceAnswer5: {
    top: 710,
    left: 18,
    paddingRight: 8,
    paddingTop: 8,
    flexDirection: "row",
    width: 390,
  },
  inputmultipleChoiceAnswer6: {
    top: 739,
    left: 18,
    paddingRight: 8,
    paddingTop: 8,
    flexDirection: "row",
    width: 390,
  },
  inputmultipleChoiceAnswer7: {
    top: 768,
    left: 17,
  },
  inputmultipleChoiceAnswer8: {
    top: 800,
    left: 18,
    paddingRight: 8,
    paddingTop: 8,
    flexDirection: "row",
    width: 390,
  },
  inputmultipleChoiceAnswer9: {
    top: 832,
    left: 18,
    paddingRight: 8,
    paddingTop: 8,
    flexDirection: "row",
    width: 390,
  },
  page7: {
    backgroundColor: Color.colorLavenderblush,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Page7;
