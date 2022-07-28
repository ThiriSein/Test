import React, { useState, useCallback, Component } from "react";

import { Alert, Modal, StyleSheet, Text, Pressable, View, ActivityIndicator, TextInput, } from "react-native";

const ModBot = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = useState("");
  const [isSecureTextEntry] = useState(true);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.emailText}>Email</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="username@gmail.com"
              keyboardType="email-address"
              onChangeText={onChangeText}
              value={text}
            />
            <Text style={styles.emailText}>Password</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter Your Password"
              secureTextEntry={isSecureTextEntry} 
            />
            
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Sign In</Text>
            </Pressable>
            <Text style={styles.linkText}>Forget Password?</Text>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Gmail</Text>
      </Pressable>

      <ActivityIndicator size="large" color="violet"/>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 20,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "lightpink",
    marginTop: -250,
    marginBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
  buttonClose: {
    backgroundColor: "lightblue",
    paddingLeft: 120,
    paddingRight:120,
    paddingBottom: 15,
    paddingTop: 15,
    marginTop: 30,
    marginBottom: 50,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  linkText: {
    color: "black",
    fontSize: 10,
    textAlign: "right",
    marginBottom: -20
  },
  emailText: {
    marginBottom: 15,
    color: 'darkblue',
    fontWeight: 'bold',
    
  },
  inputBox: {
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default ModBot;