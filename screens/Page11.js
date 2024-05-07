import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const Page11 = () => {
  return (
    <View style={styles.page11}>
      <View style={[styles.page8, styles.page8Position]}>
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
        <View style={[styles.bottomNav, styles.page8Position]}>
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
                source={require("../assets/liuser1.png")}
              />
              <Image
                style={styles.profileIcon}
                contentFit="cover"
                source={require("../assets/profile1.png")}
              />
            </View>
          </View>
          <Image
            style={styles.backgroundIcon}
            contentFit="cover"
            source={require("../assets/background.png")}
          />
          <Image
            style={[styles.iphoneIndicatorIcon, styles.page8Position]}
            contentFit="cover"
            source={require("../assets/iphone-indicator.png")}
          />
        </View>
        <View
          style={[styles.chatBubbleSittiUp, styles.chatBubbleSittiUpSpaceBlock]}
        >
          <Text style={[styles.message, styles.messageTypo]}>
            <Text style={styles.heyThereHere}>
              Hey there! Here are some of the
            </Text>
            <Text style={styles.fashion}> fashion</Text>
            <Text style={styles.heyThereHere}>
              {" "}
              related hashtags, that can be used for your next reel
            </Text>
          </Text>
        </View>
        <View style={[styles.chatBubbleSittiUp1, styles.chatPosition]}>
          <Text style={[styles.message1, styles.messageTypo]}>
            #fashion #ootd #style #instafashion #fashionblogger #fashionista
            #streetstyle #outfitoftheday #instastyle #fashioninspiration
            #fashionable #styleinspiration #fashionaddict #fashiongram
            #fashiondiaries
          </Text>
        </View>
        <View style={[styles.chatBubbleSittiUp2, styles.chatPosition]}>
          <Text style={[styles.message, styles.messageTypo]}>
            <Text
              style={styles.heyThereHere}
            >{`Here are some of the most used `}</Text>
            <Text style={styles.reelAudios}>Reel Audios</Text>
            <Text
              style={styles.heyThereHere}
            >{` that would be  perfect for your next reel! `}</Text>
          </Text>
        </View>
        <View
          style={[
            styles.animation300Kg5ef0sf1Wrapper,
            styles.chatBubbleSittiUpSpaceBlock,
          ]}
        >
          <Image
            style={styles.animation300Kg5ef0sf1Icon}
            contentFit="cover"
            source={require("../assets/animation-300-kg5ef0sf-1.png")}
          />
        </View>
        <View style={styles.scrollbar}>
          <View style={styles.thumb}>
            <Text style={styles.vspacer}>{`



`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page8Position: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  lihomeIconLayout: {
    height: 24,
    width: 24,
  },
  chatBubbleSittiUpSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorDarkgray_200,
    flexDirection: "row",
    position: "absolute",
  },
  messageTypo: {
    color: Color.labelColorDarkPrimary,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    flex: 1,
  },
  chatPosition: {
    marginLeft: -202,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorDarkgray_200,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    borderTopLeftRadius: Border.br_5xl,
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
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
    top: 1,
    width: 54,
    left: 0,
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
    overflow: "hidden",
  },
  heyThereHere: {
    fontFamily: FontFamily.interRegular,
  },
  fashion: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    fontStyle: "italic",
  },
  message: {
    textAlign: "left",
  },
  chatBubbleSittiUp: {
    height: "12.02%",
    marginLeft: -200,
    top: "9.87%",
    bottom: "78.11%",
    width: 319,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    borderTopLeftRadius: Border.br_5xl,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorDarkgray_200,
    alignItems: "center",
    left: "50%",
  },
  message1: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  chatBubbleSittiUp1: {
    height: "21.46%",
    top: "24.25%",
    bottom: "54.29%",
    width: 326,
  },
  reelAudios: {
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
  },
  chatBubbleSittiUp2: {
    height: "9.66%",
    top: "47%",
    bottom: "43.35%",
    width: 328,
  },
  animation300Kg5ef0sf1Icon: {
    width: 52,
    opacity: 0.5,
    height: 23,
  },
  animation300Kg5ef0sf1Wrapper: {
    top: 540,
    left: 12,
    width: 85,
    borderRadius: Border.br_5xl,
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
  page8: {
    top: 0,
    backgroundColor: Color.colorLavenderblush,
    overflow: "hidden",
    height: 932,
  },
  page11: {
    width: "100%",
    height: 932,
    flex: 1,
  },
});

export default Page11;
