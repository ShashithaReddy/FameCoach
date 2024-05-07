import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Page3 = () => {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [dropdownMenuValue, setDropdownMenuValue] = useState();

  return (
    <View style={styles.page3}>
      <Image
        style={styles.logoNew11}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <View style={styles.statusbarTime}>
        <Text style={styles.text}>9:41</Text>
      </View>
      <Image
        style={styles.rightSideIcon}
        contentFit="cover"
        source={require("../assets/right-side1.png")}
      />
      <View style={[styles.textElementsquestionText, styles.textPosition]}>
        <Text style={styles.questionTextGoesContainer}>
          <Text style={styles.whatKindOfBusinessDoYouO}>
            <Text
              style={styles.whatKindOf}
            >{`What kind of business do you own? `}</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.selectOneOption1}>Select one option.</Text>
          </Text>
        </Text>
      </View>
      <View style={[styles.dropdownMenu, styles.textPosition]}>
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
      <Text style={[styles.selectAnItem, styles.jewelleryTypo]}>
        Select an item
      </Text>
      <View style={[styles.page3Inner, styles.page3InnerLayout]}>
        <View style={[styles.componentChild, styles.instanceItemPosition]} />
      </View>
      <View style={[styles.page3Child, styles.frameViewLayout]} />
      <Text style={[styles.skinCare, styles.foodTypo]}>Skin care</Text>
      <Image
        style={[styles.page3Item, styles.page3InnerLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <View style={[styles.rectangleView, styles.page3InnerLayout]}>
        <View style={[styles.componentChild, styles.instanceItemPosition]} />
      </View>
      <View style={[styles.frameView, styles.frameViewLayout]} />
      <Text style={[styles.food, styles.foodTypo]}>Food</Text>
      <View style={[styles.page3Inner1, styles.page3Inner1Bg]}>
        <View style={[styles.instanceItem, styles.page3Inner1Bg]} />
      </View>
      <Text style={[styles.jewellery, styles.jewelleryTypo]}>Jewellery</Text>
      <View style={[styles.page3Inner2, styles.page3InnerLayout]}>
        <View style={[styles.componentChild, styles.instanceItemPosition]} />
      </View>
      <Text style={[styles.clothingLabel, styles.foodTypo]}>
        Clothing label
      </Text>
      <View style={[styles.page3Inner3, styles.page3InnerLayout]}>
        <View style={[styles.componentChild, styles.instanceItemPosition]} />
      </View>
      <Text style={[styles.others, styles.foodTypo]}>others</Text>
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
  textPosition: {
    width: 396,
    left: 17,
    position: "absolute",
    overflow: "hidden",
  },
  jewelleryTypo: {
    fontFamily: FontFamily.interLight,
    fontSize: FontSize.size_sm,
    left: 49,
    fontStyle: "italic",
    textAlign: "left",
    position: "absolute",
  },
  page3InnerLayout: {
    height: 24,
    width: 396,
    left: 17,
  },
  instanceItemPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
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
  page3Inner1Bg: {
    backgroundColor: Color.colorGray_100,
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
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    height: 20,
    color: Color.colorGray_400,
    fontWeight: "600",
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
  selectOneOption1: {
    fontFamily: FontFamily.robotoItalic,
    fontStyle: "italic",
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
  },
  componentChild: {
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  page3Inner: {
    top: 482,
    position: "absolute",
  },
  page3Child: {
    left: 102,
    top: 505,
  },
  skinCare: {
    top: 485,
    width: 84,
    left: 49,
    fontFamily: FontFamily.interSemiBold,
  },
  page3Item: {
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
  instanceItem: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  page3Inner1: {
    top: 526,
    height: 24,
    width: 396,
    left: 17,
  },
  jewellery: {
    top: 528,
    width: 80,
    color: Color.colorBlack,
    height: 21,
  },
  page3Inner2: {
    top: 552,
    position: "absolute",
  },
  clothingLabel: {
    top: 553,
    width: 136,
    height: 30,
    left: 49,
    fontFamily: FontFamily.interSemiBold,
  },
  page3Inner3: {
    top: 576,
    position: "absolute",
  },
  others: {
    top: 573,
    left: 50,
    width: 141,
    height: 25,
  },
  page3: {
    backgroundColor: Color.colorLavenderblush,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Page3;
