import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";

import React , {useState} from "react";

//icon
import { FontAwesome } from "@expo/vector-icons";

//craosel
import Carousel from "react-native-snap-carousel";
import { sliderData } from "../assets/data/data";
import SliderImage from "../components/SliderImage";

//dimntions width and hight
import { ScreenWidth } from "../assets/utils/Dimnstions";
import CustoemSwitch from "../components/CustoemSwitch";

import ListGame from "../components/ListGame";

//data 
import { freeGames , paidGames} from '../assets/data/data'




const Home = () => {
  

    //to control what data shown ( text , list , component ...  ) by number 
    // same true or false by and  

  const [getTapGame , setTapGame ] = useState(1) 

  const imageHandler = ({ item, idx }) => {
    return <SliderImage crouselData={item} />;
  };

  //take value from touchoppacity pressed  from customSwitch
  const onselectSwitch = (value) => {
    setTapGame(value)  
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 20 }}>
        <View style={styles.headerContent}>
          <Text style={styles.Text}> hello joun Doe </Text>
          <Image
            source={require("../assets/images/user-profile.jpg")}
            style={styles.user}
          />
        </View>
        {/* search Input */}
        <View style={styles.InputContent}>
          <FontAwesome
            name="search"
            size={18}
            color="gray"
            style={{ marginRight: 10 }}
          />
          <TextInput placeholder="search" style={{ fontSize: 20 }} />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginHorizontal: 1,
            alignItems: "center",
          }}
        >
          <Text style={styles.Text}> Upcoming Games </Text>
          <Text style={{ color: "blue", fontSize: 15 }}> see All </Text> 
        </View>
        {/* image slider  */}

        <Carousel
          // ref={(c) => { this._carousel = c; }}
          data={sliderData}
          renderItem={imageHandler}
          sliderWidth={ScreenWidth - 40}
          itemWidth={300}
          loop={true}
        /> 
        <View style={{ marginVertical:10}}>

        <CustoemSwitch 
          option1='free game'
          option2='paid game' 
          SelectionMode={1}
          onselectSwitch = {onselectSwitch}
        />
        </View> 

        { getTapGame == 1 && freeGames.map(item => (
          <ListGame item={item} key={item.id}/> 
        ))}



        { getTapGame == 2 && paidGames.map(item => (
          <ListGame item={item} key={item.id}/>  
        ))}


      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: "row",
    marginTop: 60,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 1,
  },
  Text: {
    fontSize: 17,
    fontWeight: "500",
  },
  user: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },

  InputContent: {
    flexDirection: "row",
    // flex:1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
});
