import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { btn1, colors, hr80, titles } from "../../globals/style";
import {
  AntDesign,
  Feather,
  Entypo,
  Octicons,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";

const SignUpScreen = ({ navigation }) => {
  const [namefocus, setNamefocus] = useState(false);
  const [emailfocus, setEmailfocus] = useState(false);
  const [phonefocus, setPhonefocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [cPasswordfocus, setcPasswordfocus] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);
  const [addressfocus, setAddressfocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Sign Up</Text>

      {/* Name Start */}
      <View style={styles.inputout}>
        <AntDesign
          name="user"
          size={24}
          color={namefocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="Full Name"
          onFocus={() => {
            setNamefocus(true);
            setEmailfocus(false);
            setPhonefocus(false);
            setPasswordfocus(false);
            setShowPassword(false);
            setcPasswordfocus(false);
            setAddressfocus(false);
          }}
        />
      </View>
      {/* Name end */}

      {/* Email Start */}
      <View style={styles.inputout}>
        <Entypo
          name="email"
          size={24}
          color={emailfocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Email"
          onFocus={() => {
            setNamefocus(false);
            setEmailfocus(true);
            setPhonefocus(false);
            setPasswordfocus(false);
            setShowPassword(false);
            setcPasswordfocus(false);
            setAddressfocus(false);
          }}
        />
      </View>
      {/* Email end */}

      {/* Phone Start */}
      <View style={styles.inputout}>
        <Feather
          name="smartphone"
          size={24}
          color={phonefocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="Phone No"
          onFocus={() => {
            setNamefocus(false);
            setEmailfocus(false);
            setPhonefocus(true);
            setPasswordfocus(false);
            setShowPassword(false);
            setcPasswordfocus(false);
            setAddressfocus(false);
          }}
        />
      </View>
      {/* Phone End */}

      {/* Password Start */}
      <View style={styles.inputout}>
        <MaterialCommunityIcons
          name="lock-outline"
          size={24}
          color={passwordfocus == true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={showPassword === false ? true : false}
          onFocus={() => {
            setNamefocus(false);
            setEmailfocus(false);
            setPhonefocus(false);
            setPasswordfocus(true);
            setcPasswordfocus(false);
            setAddressfocus(false);
          }}
        />
        <Octicons
          name={showPassword == false ? "eye-closed" : "eye"}
          size={24}
          color="back"
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>

      <View style={styles.inputout}>
        <MaterialCommunityIcons
          name="lock-outline"
          size={24}
          color={cPasswordfocus == true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={showcPassword === false ? true : false}
          onFocus={() => {
            setNamefocus(false);
            setEmailfocus(false);
            setPhonefocus(false);
            setPasswordfocus(false);
            setcPasswordfocus(true);
            setAddressfocus(false);
          }}
        />
        <Octicons
          name={showcPassword == false ? "eye-closed" : "eye"}
          size={24}
          color="back"
          onPress={() => setShowcPassword(!showcPassword)}
        />
      </View>
      {/* Password End */}

      <Text style={styles.address}>Please enter your address</Text>
      <View style={styles.inputout}>
        <FontAwesome
          name="home"
          size={24}
          color={addressfocus == true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Address"
          onFocus={() => {
            setNamefocus(false);
            setEmailfocus(false);
            setPhonefocus(false);
            setPasswordfocus(false);
            setcPasswordfocus(false);
            setAddressfocus(true);
          }}
        />
      </View>

      <TouchableOpacity style={btn1}>
        <Text
          style={{
            color: colors.col1,
            fontSize: titles.btntext,
            fontWeight: "bold",
          }}
        >
          Sign up
        </Text>
      </TouchableOpacity>

      <Text style={styles.or}>OR</Text>
      <Text style={styles.gftxt}>Sign In With</Text>
      <View style={styles.gf}>
        <TouchableOpacity>
          <View style={styles.gficon}>
            <AntDesign name="google" size={24} color="#EA4335"></AntDesign>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.gficon}>
            <FontAwesome5
              name="facebook-f"
              size={24}
              color="#426782"
            ></FontAwesome5>
          </View>
        </TouchableOpacity>
      </View>
      <View style={hr80}></View>
      <Text>
        Already have an account?
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate("Login")}
        >
          {" "}
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 60,
  },
  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    marginVertical: 10,
  },
  inputout: {
    flexDirection: "row",
    width: "80%",
    marginVertical: 10,
    backgroundColor: colors.col1,
    borderRadius: 10,
    padding: 10,
    // alignSelf: "center",
    elevation: 20,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
  },
  forgot: {
    color: colors.text2,
    marginTop: 20,
    marginBottom: 10,
  },
  or: {
    color: colors.text1,
    marginTop: 10,
    fontWeight: "bold",
  },
  gftxt: {
    color: colors.text2,
    marginVertical: 7,
    fontSize: 25,
  },
  gf: {
    flexDirection: "row",
  },
  gficon: {
    backgroundColor: "white",
    width: 50,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 20,
  },
  signup: {
    color: colors.text1,
  },
  address: {
    fontSize: 18,
    color: colors.text2,
    textAlign: "center",
    marginTop: 7,
  },
});
