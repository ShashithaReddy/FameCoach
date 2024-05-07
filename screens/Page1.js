import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { RadioGroup, Radio } from "@ui-kitten/components";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Page1 = () => {
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
    <View style={styles.page15}>
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
      <View style={styles.page15Child} />
      <View style={[styles.bottomNav, styles.bottomNavPosition]}>
        <View style={styles.menuList}>
          <View style={styles.menu1}>
            <View style={styles.lihomeIconLayout}>
              <View style={styles.menu11}>
                <Image
                  style={[styles.lihomeIcon, styles.lihomeIconLayout]}
                  contentFit="cover"
                  source={require("../assets/lihome.png")}
                />
              </View>
            </View>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
          </View>
          <View style={styles.menu1}>
            <Image
              style={[styles.lihomeIcon, styles.lihomeIconLayout]}
              contentFit="cover"
              source={require("../assets/lipiechart.png")}
            />
            <Image
              style={styles.analyticsIcon}
              contentFit="cover"
              source={require("../assets/analytics.png")}
            />
          </View>
          <View style={styles.menu1}>
            <Image
              style={[styles.lihomeIcon, styles.lihomeIconLayout]}
              contentFit="cover"
              source={require("../assets/liuser.png")}
            />
            <Image
              style={styles.profileIcon}
              contentFit="cover"
              source={require("../assets/profile.png")}
            />
          </View>
        </View>
        <Image
          style={styles.backgroundIcon}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <Image
          style={[styles.iphoneIndicatorIcon, styles.bottomNavPosition]}
          contentFit="cover"
          source={require("../assets/iphone-indicator.png")}
        />
      </View>
      <View style={[styles.chatBubbleSittiUp, styles.chatPosition]}>
        <Text style={[styles.message, styles.messageTypo]}>
          What exactly are you looking for today?
        </Text>
      </View>
      <View style={styles.scrollbar}>
        <View style={styles.thumb}>
          <Text style={styles.vspacer}>{`



`}</Text>
        </View>
      </View>
      <View style={styles.image1} />
      <View style={[styles.chatBubbleSittiUp1, styles.chatPosition]}>
        <Text style={[styles.message, styles.messageTypo]}>
          Here are some brands that you might be interested in
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
      <View style={styles.chatBubbleSittiUp2}>
        <Text style={[styles.message2, styles.messageTypo]}>{`Urban Outfitters
BK Beauty
Nike
Daniel Wellington
 Adidas
`}</Text>
      </View>
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
  bottomNavPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  lihomeIconLayout: {
    height: 24,
    width: 24,
  },
  chatPosition: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 314,
    backgroundColor: Color.colorDarkgray_200,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    borderTopLeftRadius: Border.br_5xl,
    marginLeft: -200,
    height: "7.3%",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  messageTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    flex: 1,
  },
  inputmultiplePosition: {
    paddingRight: 8,
    paddingTop: 8,
    width: 310,
    left: 15,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.colorGray_400,
    textAlign: "center",
    height: 20,
    lineHeight: 22,
    letterSpacing: 0,
    left: 0,
    top: 1,
    width: 54,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -193,
    height: 21,
    width: 54,
    left: "50%",
    borderRadius: Border.br_5xl,
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
  page15Child: {
    top: 505,
    left: 102,
    width: 91,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  lihomeIcon: {
    overflow: "hidden",
  },
  menu11: {
    height: "100%",
    width: "307.5%",
    top: "0%",
    right: "-103.75%",
    bottom: "0%",
    left: "-103.75%",
    alignItems: "center",
    position: "absolute",
  },
  homeIcon: {
    width: 34,
    height: 8,
    marginTop: 6,
  },
  menu1: {
    alignItems: "center",
    flex: 1,
  },
  analyticsIcon: {
    width: 55,
    height: 12,
    marginTop: 6,
  },
  profileIcon: {
    width: 35,
    height: 9,
    marginTop: 6,
  },
  menuList: {
    bottom: 30,
    backgroundColor: Color.labelColorDarkPrimary,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    width: 430,
    left: 0,
    position: "absolute",
  },
  backgroundIcon: {
    top: 41,
    left: 169,
    width: 56,
    height: 2,
    position: "absolute",
  },
  iphoneIndicatorIcon: {
    bottom: 0,
    height: 30,
  },
  bottomNav: {
    top: 814,
    backgroundColor: Color.colorWhitesmoke,
    height: 129,
    borderRadius: Border.br_5xl,
    width: 430,
    overflow: "hidden",
  },
  message: {
    color: Color.colorLavenderblush,
    textAlign: "left",
  },
  chatBubbleSittiUp: {
    top: "13.41%",
    bottom: "79.29%",
  },
  vspacer: {
    fontSize: FontSize.size_9xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorSilver,
    width: 13,
    textAlign: "left",
  },
  thumb: {
    marginLeft: -4,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorSilver,
    width: 8,
    top: 1,
    left: "50%",
    position: "absolute",
  },
  scrollbar: {
    top: 40,
    left: 400,
    backgroundColor: Color.colorGray_200,
    width: 30,
    height: 773,
    position: "absolute",
  },
  image1: {
    width: 298,
    height: 375,
    left: 15,
    top: 215,
    position: "absolute",
  },
  chatBubbleSittiUp1: {
    top: "34.98%",
    bottom: "57.73%",
  },
  inputmultipleChoiceAnswer: {
    top: 215,
    paddingRight: 8,
    paddingTop: 8,
  },
  inputmultipleChoiceAnswer1: {
    top: 244,
  },
  inputmultipleChoiceAnswer2: {
    top: 273,
  },
  message2: {
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
  },
  chatBubbleSittiUp2: {
    top: 416,
    height: 141,
    width: 310,
    left: 15,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorDarkgray_200,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    borderTopLeftRadius: Border.br_5xl,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  page15: {
    backgroundColor: Color.colorLavenderblush,
    width: "100%",
    height: 932,
    overflow: "hidden",
    flex: 1,
  },
});

export default Page1;
