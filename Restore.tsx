import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { NavigationContainer } from '@react-navigation/native';

function RegisterScreen({ navigation }) {
  const [textInputValue, setTextInputValue] = useState("");
  const [Uname, getName] = useState("");
  const [nameErr, getNameErr] = useState("");

  const [email, setEmail] = useState("");
  const [Umail, getEmail] = useState("");
  const [emailErr, getEmailErr] = useState("");

  const [phone, setPhone] = useState("");
  const [Uph, getPhone] = useState("");
  const [phErr, getphErr] = useState("");

  const [passWord, setPassword] = useState("");
  const [Upw, getPw] = useState("");
  const [pwErr, getPwErr] = useState("");

  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [UCPs, getCPassword] = useState("");
  const [pwComfirmErr, getpwComfirmErr] = useState("");

  const registerSubmit = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z]{2,8}])?/g;
    if (textInputValue.length == 0) {
      getNameErr("Enter Full Name. ");
    } else {
      getNameErr("");
      AsyncStorage.setItem("NAME", textInputValue);
      setTextInputValue("");
    }
    if (email.length == 0) {
      getEmailErr("Enter your email Address.");
    } else if (!regEx.test(email)) {
      getEmailErr("Correct your email type.");
    } else {
      getEmailErr("");
      AsyncStorage.setItem("mail", email);
      setEmail("");
    }
    if (phone.length == 0) {
      getphErr("Enter a phone number. ");
    } else if (phone.length < 10 || phone.length > 10) {
      getphErr("Phone number must be 10 digits. ");
    } else if (phone) {
      getphErr("");
      AsyncStorage.setItem("ph_number", phone);
      setPhone("");
    }
    if (passWord.length == 0) {
      getPwErr("Enter Password.");
    } else if (passWord.length < 8 || passWord.length > 12) {
      getPwErr("Enter Password between 8 to 12.");
    } else if (passWord) {
      getPwErr("");
      AsyncStorage.setItem("passcode", passWord);
      setPassword("");
    }
    if (ConfirmPassword.length == 0) {
      getpwComfirmErr(" Enter Password Confirmation.");
    } else if (ConfirmPassword.length < 8 || ConfirmPassword.length > 12) {
      getpwComfirmErr("Enter the same password.");
    } else if (ConfirmPassword !== passWord) {
      getpwComfirmErr(" Password must be the same.");
    } else {
      getpwComfirmErr("");
      AsyncStorage.setItem("Confirmpasscode", ConfirmPassword);
      setConfirmPassword("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}> Registration Form </Text>

      <Text style={styles.head}> Full Name</Text>
      <TextInput
        placeholder=" Enter Some Text Here"
        value={textInputValue}
        onChangeText={(data) => setTextInputValue(data)}
        //underlineColorAndroid='transparent'
        style={styles.border}
      />
      {nameErr.length > 0 && <Text style={{ color: "red" }}>{nameErr} </Text>}

      <Text style={styles.head}>Email Address</Text>
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={(data) => setEmail(data)}
        style={styles.border}
      />
      {emailErr.length > 0 && <Text style={{ color: "red" }}>{emailErr}</Text>}

      <Text style={styles.head}>Phone (enter only 10 digits number ) </Text>
      <TextInput
        placeholder=" Phone Number"
        keyboardType="number-pad"
        value={phone}
        onChangeText={(data) => setPhone(data)}
        style={styles.border}
      />
      {phErr.length > 0 && <Text style={{ color: "red" }}>{phErr}</Text>}

      <Text style={styles.head}>Password</Text>
      <TextInput
        placeholder="Password"
        value={passWord}
        onChangeText={(data) => setPassword(data)}
        secureTextEntry={true}
        style={styles.border}
      />
      {pwErr.length > 0 && <Text style={{ color: "red" }}>{pwErr}</Text>}

      <Text style={styles.head}>Confirm Password</Text>
      <TextInput
        placeholder=" Confirm Password"
        value={ConfirmPassword}
        onChangeText={(data) => setConfirmPassword(data)}
        secureTextEntry={true}
        style={styles.border}
      />
      {pwComfirmErr.length > 0 && (
        <Text style={{ color: "red" }}> {pwComfirmErr}</Text>
      )}

      <View style={styles.row}>
        <TouchableOpacity style={styles.loginBtn} onPress={registerSubmit}>
          <Text> Register </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Data")}
          style={styles.loginBtn}
        >
          <Text> Saved Data </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
{
  /*<Button title="Go back" onPress={() => navigation.goBack()} />*/
}

function SavedDataScreen({ navigation }) {
  const [textInputValue, setTextInputValue] = useState("");
  const [Uname, getName] = useState("");

  const [email, setEmail] = useState("");
  const [Umail, getEmail] = useState("");

  const [phone, setPhone] = useState("");
  const [Uph, getPhone] = useState("");

  const [passWord, setPassword] = useState("");
  const [Upw, getPw] = useState("");

  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [UCPs, getCPassword] = useState("");

  const getValue = () => {
    AsyncStorage.getItem("NAME").then((Uname) => {
      return getName(Uname);
    });
    AsyncStorage.getItem("mail").then((Umail) => {
      return getEmail(Umail);
    });
    AsyncStorage.getItem("ph_number").then((Uph) => {
      return getPhone(Uph);
    });
    AsyncStorage.getItem("passcode").then((Upw) => {
      return getPw(Upw);
    });
    AsyncStorage.getItem("Confirmpasscode").then((UCPs) => {
      return getCPassword(UCPs);
    });
  };

  //  const removeValue = () => {
  //      const keys = [Uname , Umail, Upw, UCPs];
  //const keys = [Uname, 'mail' , 'ph_number' , 'passcode', 'Confirmpasscode']
  //    AsyncStorage.multiRemove(keys);
  //  };
  // const removeValue = async () => {
  //    const keys = [Uname, Umail ,Uph ,Upw, UCPs,]
  //    try {
  //      await AsyncStorage.multiRemove(keys)
  //    } catch(e) {
  //      // remove error
  //    }
  //
  //    console.log('Done')
  //  }

  const removeValue = async () => {
    try {
      AsyncStorage.removeItem("NAME").then((Uname) => {
        return getName("");
      });
      AsyncStorage.removeItem("mail").then((Umail) => {
        return getEmail("");
      });
      AsyncStorage.removeItem("ph_number").then((Uph) => {
        return getPhone("");
      });
      AsyncStorage.removeItem("passcode").then((Upw) => {
        return getPw("");
      });
      AsyncStorage.removeItem("Confirmpasscode").then((UCPs) => {
        return getCPassword("");
      });
    } catch (e) {
      // remove error
    }

    console.log("Done");
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.loginBtn}
      >
        <Text> Go Back </Text>
      </TouchableOpacity>
      {/*<Button title="Go back" onPress={() => navigation.goBack()} style={styles.loginBtn}/>*/}

      <Text style={styles.showText}> Name : {Uname} </Text>
      <Text style={styles.showText}> Email : {Umail} </Text>
      <Text style={styles.showText}> Phone : {Uph} </Text>
      <Text style={styles.showText}> Password : {Upw} </Text>
      <Text style={styles.showText}> Confirm Password : {UCPs}</Text>

      <View style={styles.row}>
        <TouchableOpacity onPress={getValue} style={styles.showBtn}>
          <Text> Look User Data </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={removeValue} style={styles.removeBtn}>
          <Text> Remove Data </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register Form"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Data"
        component={SavedDataScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function Restore() {
  return <MyStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20,
  },
  border: {
    borderColor: "black",
    borderWidth: 1,
    height: 30,
  },
  head: {
    paddingBottom: 10,
    paddingTop: 20,
  },
  loginBtn: {
    width: "40%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginRight: 40,
    marginBottom: 20,
    marginLeft: 10,
    backgroundColor: "lightblue",
  },
  row: {
    flexDirection: "row",
  },
  removeBtn: {
    width: "40%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginRight: 40,
    marginBottom: 20,
    marginLeft: 10,
    backgroundColor: "#db7165",
    color: "#fff",
  },
  showBtn: {
    width: "40%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginRight: 40,
    marginBottom: 20,
    marginLeft: 10,
    backgroundColor: "lightgreen",
    color: "#fff",
  },
  showText: {
    fontSize: 20,
    paddingBottom: 10,
  },
});
