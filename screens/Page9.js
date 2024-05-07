import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const Page9 = () => {
  return (
    <View style={styles.page9}>
      <View style={[styles.statusbarTime, styles.textLayout]}>
        <Text style={[styles.text, styles.textTypo2]}>9:41</Text>
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
      <View style={styles.page9Child} />
      <Image
        style={styles.page9Item}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Image
        style={styles.page9Inner}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.posts, styles.postsTypo]}>posts</Text>
      <Text style={[styles.followers, styles.postsTypo]}>followers</Text>
      <Text style={[styles.following, styles.postsTypo]}>following</Text>
      <Text style={[styles.text1, styles.textTypo]}>6</Text>
      <Text style={[styles.text2, styles.textTypo]}>103</Text>
      <Text style={[styles.text3, styles.textTypo]}>1</Text>
      <Image
        style={styles.whatsappImage20240417At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240417-at-1323-1.png")}
      />
      <View style={styles.view}>
        <Text style={[styles.message, styles.textTypo2]}>{`Get started with 
Analytics`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    width: 54,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_mid,
  },
  postsTypo: {
    height: 34,
    width: 95,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    position: "absolute",
  },
  textTypo: {
    height: 35,
    width: 60,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  text: {
    top: 1,
    left: 0,
    fontFamily: FontFamily.sFProText,
    color: Color.colorGray_400,
    height: 20,
    width: 54,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -193,
    borderRadius: Border.br_5xl,
    height: 21,
    left: "50%",
    top: 10,
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
  page9Child: {
    top: 505,
    left: 102,
    width: 91,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  page9Item: {
    top: 509,
    left: 17,
    width: 396,
    height: 24,
    position: "absolute",
  },
  page9Inner: {
    top: 112,
    left: 134,
    width: 162,
    height: 160,
    position: "absolute",
  },
  posts: {
    left: 26,
    top: 413,
    height: 34,
    width: 95,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  followers: {
    top: 416,
    left: 175,
  },
  following: {
    left: 338,
    top: 413,
    height: 34,
    width: 95,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  text1: {
    left: 23,
    top: 394,
    height: 35,
    width: 60,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
  },
  text2: {
    top: 392,
    left: 186,
  },
  text3: {
    left: 372,
    top: 394,
    height: 35,
    width: 60,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
  },
  whatsappImage20240417At1: {
    top: 478,
    left: 12,
    width: 406,
    height: 248,
    position: "absolute",
  },
  message: {
    fontFamily: FontFamily.interSemiBold,
    color: Color.labelColorDarkPrimary,
  },
  view: {
    marginTop: 334,
    marginLeft: -102,
    top: "50%",
    borderRadius: 32,
    backgroundColor: Color.colorDarkgray_200,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_25xl,
    paddingVertical: Padding.p_base,
    left: "50%",
    position: "absolute",
  },
  page9: {
    backgroundColor: Color.colorLavenderblush,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Page9;
