import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, Padding, Color, FontFamily } from "../GlobalStyles";

const Page14 = () => {
  return (
    <View style={styles.page14}>
      <View style={[styles.page8, styles.page8Layout]}>
        <View style={[styles.statusbarTime, styles.bottomNavLayout]}>
          <Text style={[styles.text, styles.textTypo]}>9:41</Text>
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
        <View style={[styles.bottomNav, styles.bottomNavLayout]}>
          <View style={[styles.menuList, styles.viewFlexBox]}>
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
            style={[styles.iphoneIndicatorIcon, styles.page8Layout]}
            contentFit="cover"
            source={require("../assets/iphone-indicator.png")}
          />
        </View>
        <View style={[styles.chatBubbleSittiUp, styles.chatLayout]}>
          <Text
            style={styles.message}
          >{`Felling Stuck?... We got you covered! `}</Text>
        </View>
        <View style={[styles.scrollbar, styles.scrollbarLayout]}>
          <View style={[styles.thumb, styles.textPosition]}>
            <Text style={styles.vspacer}>{`



`}</Text>
          </View>
        </View>
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.scrollbar1, styles.image1IconPosition]}>
          <View style={[styles.thumb, styles.textPosition]}>
            <Text style={styles.vspacer}>{`



`}</Text>
          </View>
        </View>
        <View style={[styles.chatBubbleSittiUp1, styles.chatLayout]}>
          <Text style={styles.message}>
            Hope we got you covered for today ;)
          </Text>
        </View>
        <View style={[styles.view, styles.viewFlexBox]}>
          <Text style={[styles.message2, styles.textTypo]}>{`No! I need more
 help!`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page8Layout: {
    width: 430,
    left: 0,
  },
  bottomNavLayout: {
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    letterSpacing: 0,
  },
  viewFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  lihomeIconLayout: {
    height: 24,
    width: 24,
  },
  chatLayout: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 314,
    backgroundColor: Color.colorDarkgray_200,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    borderTopLeftRadius: Border.br_5xl,
    height: "7.3%",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  scrollbarLayout: {
    width: 30,
    backgroundColor: Color.colorGray_200,
  },
  textPosition: {
    top: 1,
    position: "absolute",
  },
  image1IconPosition: {
    height: 375,
    top: 215,
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.sFProText,
    color: Color.colorGray_400,
    height: 20,
    top: 1,
    position: "absolute",
    width: 54,
    left: 0,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.size_mid,
  },
  statusbarTime: {
    marginLeft: -193,
    height: 21,
    width: 54,
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
  page8Child: {
    top: 505,
    left: 102,
    width: 91,
    height: 23,
    overflow: "hidden",
    position: "absolute",
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
    width: 430,
    left: 0,
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
    position: "absolute",
  },
  bottomNav: {
    top: 814,
    backgroundColor: Color.colorWhitesmoke,
    height: 129,
    overflow: "hidden",
    width: 430,
    left: 0,
  },
  message: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLavenderblush,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    flex: 1,
  },
  chatBubbleSittiUp: {
    marginLeft: -200,
    top: "12.23%",
    bottom: "80.47%",
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
    left: "50%",
  },
  scrollbar: {
    top: 40,
    left: 400,
    height: 773,
    position: "absolute",
  },
  image1Icon: {
    left: 15,
    width: 298,
  },
  scrollbar1: {
    left: 306,
    width: 30,
    backgroundColor: Color.colorGray_200,
  },
  chatBubbleSittiUp1: {
    marginLeft: -204,
    top: "66.85%",
    bottom: "25.86%",
  },
  message2: {
    fontFamily: FontFamily.interSemiBold,
    color: Color.labelColorDarkPrimary,
  },
  view: {
    marginTop: 249,
    marginLeft: -130,
    top: "50%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkgray_100,
    paddingHorizontal: Padding.p_25xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    left: "50%",
  },
  page8: {
    top: 0,
    backgroundColor: Color.colorLavenderblush,
    overflow: "hidden",
    position: "absolute",
    height: 932,
  },
  page14: {
    width: "100%",
    height: 932,
    flex: 1,
  },
});

export default Page14;
