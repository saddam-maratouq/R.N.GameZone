import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React from "react";

//icon
import { FontAwesome5 } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const Main = ({}) => {
  const navigation = useNavigation();

  //   console.warn('Main screen warn')

  return (
    <>
      <View style={{ marginTop: 50 }}>
        <Text style={styles.title}> Game zone </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
         source={require('../assets/images/homescreen/handel.png') }
          style={styles.MainImage}
          resizeMode='stretch'
        />
      </View>
      <TouchableOpacity
        style={styles.MianButoon}
        onPress={() => navigation.navigate("Home")} 
      >
        <Text style={styles.text}> Let's Begin </Text>
        <FontAwesome5 name="arrow-right" size={24} color="#fff" /> 
      </TouchableOpacity>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    color: "#555",
    fontWeight: "bold",
    textAlign: "center",
  },
  MainImage: {
    width: 300,
    height: 300,
   
  },
  MianButoon: {
    backgroundColor: "#AD40AF",
    width: Dimensions.get("screen").width - 20,
    // padding:15,
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 50,
    padding: 15,
    marginLeft: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
});
