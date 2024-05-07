import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const Page4 = () => {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [dropdownMenuValue, setDropdownMenuValue] = useState();

  return (
    <View style={styles.page4}>
      <Image
        style={styles.logoNew11}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <View style={styles.statusbarTime}>
        <Text style={[styles.text, styles.textClr]}>9:41</Text>
      </View>
      <Image
        style={styles.rightSideIcon}
        contentFit="cover"
        source={require("../assets/right-side1.png")}
      />
      <View style={[styles.textElementsquestionText, styles.textPosition]}>
        <Text
          style={[
            styles.questionTextGoesContainer,
            styles.questionContainerTypo,
          ]}
        >
          <Text style={styles.whatKindOfBusinessDoYouO}>
            <Text
              style={styles.whatKindOf}
            >{`What kind of business do you own? `}</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.selectOneOption1Typo}>Select one option.</Text>
          </Text>
        </Text>
      </View>
      <View style={[styles.dropdownMenu, styles.dropdownMenuPosition]}>
        <DropDownPicker
          style={styles.dropdownpicker}
          open={dropdownMenuOpen}
          setOpen={setDropdownMenuOpen}
          value={dropdownMenuValue}
          setValue={setDropdownMenuValue}
          placeholder="Select an Item"
          items={[]}
          labelStyle={styles.dropdownMenuValue}
          dropDownContainerStyle={styles.dropdownMenudropDownContainer}
        />
      </View>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.selectAnItem, styles.othersTypo]}>
        Select an item
      </Text>
      <View style={[styles.page4Inner, styles.page4InnerLayout]}>
        <View style={[styles.instanceChild, styles.page4Inner1Bg]} />
      </View>
      <View style={[styles.page4Child, styles.frameViewLayout]} />
      <Text style={[styles.skinCare, styles.foodTypo]}>Skin care</Text>
      <Image
        style={[styles.page4Item, styles.page4InnerLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <View style={[styles.rectangleView, styles.page4InnerLayout]}>
        <View style={[styles.instanceChild, styles.page4Inner1Bg]} />
      </View>
      <View style={[styles.frameView, styles.frameViewLayout]} />
      <Text style={[styles.food, styles.foodTypo]}>Food</Text>
      <View style={[styles.page4Inner1, styles.page4Inner1Bg]}>
        <View style={[styles.instanceChild, styles.page4Inner1Bg]} />
      </View>
      <Text style={[styles.jewellery, styles.foodTypo]}>Jewellery</Text>
      <View style={[styles.page4Inner2, styles.page4InnerLayout]}>
        <View style={[styles.instanceChild, styles.page4Inner1Bg]} />
      </View>
      <Text style={[styles.clothingLabel, styles.foodTypo]}>
        Clothing label
      </Text>
      <View style={[styles.page4Inner3, styles.othersPosition]}>
        <View style={[styles.instanceChild2, styles.instanceChildPosition]} />
      </View>
      <Text style={[styles.others, styles.othersPosition]}>others</Text>
      <View style={[styles.textElementsquestionText1, styles.textPosition]}>
        <Text style={[styles.questionTextGoes, styles.selectOneOption1Typo]}>
          Select one option.
        </Text>
      </View>
      <Text
        style={[styles.ifOthersDescribeContainer, styles.questionContainerTypo]}
      >
        <Text style={styles.whatKindOfBusinessDoYouO}>
          <Text
            style={styles.whatKindOf}
          >{`If others, describe your business in few words... `}</Text>
          <Text style={styles.text1}>{` `}</Text>
        </Text>
        <Text style={styles.text1}>
          <Text style={styles.selectOneOption1Typo}>Select one option.</Text>
        </Text>
      </Text>
      <View style={[styles.inputrichTextBox, styles.dropdownMenuPosition]}>
        <View style={styles.inputrichTextBoxChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownMenuValue: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
  dropdownMenudropDownContainer: {
    backgroundColor: "#b4a4a4",
  },
  textClr: {
    color: Color.colorGray_400,
    position: "absolute",
  },
  textPosition: {
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingTop: Padding.p_base,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 396,
    backgroundColor: Color.labelColorDarkPrimary,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 17,
    position: "absolute",
    overflow: "hidden",
  },
  questionContainerTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  dropdownMenuPosition: {
    width: 396,
    left: 17,
    position: "absolute",
    overflow: "hidden",
  },
  othersTypo: {
    fontFamily: FontFamily.interLight,
    fontSize: FontSize.size_sm,
    left: 49,
    fontStyle: "italic",
    textAlign: "left",
  },
  page4InnerLayout: {
    height: 24,
    width: 396,
    left: 17,
  },
  page4Inner1Bg: {
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  frameViewLayout: {
    height: 23,
    width: 91,
    position: "absolute",
    overflow: "hidden",
  },
  foodTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  othersPosition: {
    top: 570,
    position: "absolute",
  },
  instanceChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  selectOneOption1Typo: {
    fontFamily: FontFamily.robotoItalic,
    fontStyle: "italic",
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
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    height: 20,
    fontWeight: "600",
    color: Color.colorGray_400,
    width: 54,
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
  whatKindOf: {
    color: Color.colorBlack,
  },
  text1: {
    color: Color.colorDimgray,
  },
  whatKindOfBusinessDoYouO: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  questionTextGoesContainer: {
    alignSelf: "stretch",
  },
  textElementsquestionText: {
    top: 370,
  },
  dropdownpicker: {
    backgroundColor: Color.colorDarkgray_200,
  },
  dropdownMenu: {
    top: 451,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_xs,
    paddingRight: Padding.p_2xl,
    paddingBottom: Padding.p_xs,
  },
  vectorIcon: {
    top: 753,
    left: 199,
    width: 12,
    height: 7,
    position: "absolute",
  },
  selectAnItem: {
    top: 459,
    width: 144,
    height: 4,
    color: Color.colorGray_400,
    position: "absolute",
  },
  instanceChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  page4Inner: {
    top: 482,
    position: "absolute",
  },
  page4Child: {
    left: 102,
    top: 505,
  },
  skinCare: {
    top: 485,
    width: 84,
    left: 49,
    fontFamily: FontFamily.interSemiBold,
  },
  page4Item: {
    top: 509,
    position: "absolute",
  },
  rectangleView: {
    top: 505,
    position: "absolute",
  },
  frameView: {
    left: 23,
    top: 482,
  },
  food: {
    top: 507,
    width: 97,
    left: 49,
    fontFamily: FontFamily.interSemiBold,
    height: 21,
  },
  page4Inner1: {
    top: 526,
    height: 24,
    width: 396,
    left: 17,
  },
  jewellery: {
    top: 528,
    width: 80,
    left: 49,
    fontFamily: FontFamily.interSemiBold,
    height: 21,
  },
  page4Inner2: {
    top: 544,
    position: "absolute",
  },
  clothingLabel: {
    top: 549,
    left: 46,
    width: 136,
    height: 30,
  },
  instanceChild2: {
    backgroundColor: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  page4Inner3: {
    height: 24,
    width: 396,
    left: 17,
  },
  others: {
    width: 141,
    height: 25,
    fontFamily: FontFamily.interLight,
    fontSize: FontSize.size_sm,
    left: 49,
    fontStyle: "italic",
    textAlign: "left",
    color: Color.colorBlack,
  },
  questionTextGoes: {
    display: "none",
    color: Color.colorDimgray,
    textAlign: "left",
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
  },
  textElementsquestionText1: {
    top: 648,
    height: 59,
  },
  ifOthersDescribeContainer: {
    top: 659,
    width: 388,
    left: 17,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  inputrichTextBoxChild: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 1,
    elevation: 1,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    alignSelf: "stretch",
    backgroundColor: Color.labelColorDarkPrimary,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flex: 1,
  },
  inputrichTextBox: {
    top: 726,
    height: 127,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.labelColorDarkPrimary,
  },
  page4: {
    backgroundColor: Color.colorLavenderblush,
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Page4;
