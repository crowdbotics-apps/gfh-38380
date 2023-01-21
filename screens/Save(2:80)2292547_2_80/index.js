import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03e9919e-ee7a-4026-9765-44b20dd72be7"
        }}
        style={styles.TouchableOpacity_2_82}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_43"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29382f0d-c1fc-435f-9c08-2cd14b3a5aef"
        }}
        style={styles.ImageBackground_2_85}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eaf33dbf-1ba8-405f-8b91-24cc8e1a0c17"
        }}
        style={styles.ImageBackground_2_86}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48dd439e-5f14-4af2-a6a1-4fe2de71bcc7"
        }}
        style={styles.ImageBackground_2_89}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00358c54-3001-41ac-9654-8ba390a2bc30"
        }}
        style={styles.TouchableOpacity_2_92}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_43"))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("219%") },
  TouchableOpacity_2_82: {
    width: wp("15%"),
    height: hp("14%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  ImageBackground_2_85: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("182%")
  },
  ImageBackground_2_86: {
    width: wp("12%"),
    height: hp("12%"),
    top: hp("184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_2_89: {
    width: wp("12%"),
    height: hp("12%"),
    top: hp("184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  TouchableOpacity_2_92: {
    width: wp("7%"),
    height: hp("11%"),
    top: hp("185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
