import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import slides from "./src/data/slides";
import One from "./src/svg/one";
import Three from "./src/svg/three";
import Two from "./src/svg/two";

export default function App() {
  const [slidesShow, setSlidesShow] = useState(false)
  const renderNextButton = () => {
    return(
      <View><Feather name="arrow-right-circle" size={42} color="black" /></View>
    )
  }
  const renderDoneButton = () => {
    return (
      <View><AntDesign name="checkcircleo" size={42} color="black" /></View>
    )
  };

  const renderItem = ({item}) => {
    return (
      <View style={{flex:1,justifyContent:"center", alignItems:"center", backgroundColor:item.backgroundColor}}>
        <Image source={item.image} style={styles.image} />
      </View>
    )
  }
  return (
    <>
      {
        slidesShow ? (
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
              <One/>
              <Two/>
              <Three/>
              <StatusBar style="auto" />
            </View>
          </SafeAreaView>
        ) : (
          <AppIntroSlider
            data={slides}
            renderItem={renderItem}
            renderDoneButton={renderDoneButton}
            onDone={() => setSlidesShow(true)}
            renderNextButton={renderNextButton}
            dotStyle={{backgroundColor:"#9a9a9a"}}
            activeDotStyle={{backgroundColor:"#242222"}}
            doneLabel="Done"
            nextLabel="Next"

          />
        )
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
  image: {
    width: 400,
    height: 200,
  },

});
