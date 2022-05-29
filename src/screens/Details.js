import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import { colors } from "../theme/colors";
import Text from "../components/text/text";
import { EvilIcons } from "@expo/vector-icons";

export default function Details({ route }) {
  const { planet } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn={true} />
      <View style={{ flex: 0.95, alignItems: "center" }}>
        <Image source={{ uri: planet.image }} style={styles.img} />
        <Text
          preset="h2"
          style={{ color: colors.white, textTransform: "uppercase" }}
        >
          {planet.name}
        </Text>
        <Text
          preset="h4"
          style={{
            color: colors.white,
            textAlign: "justify",
            marginHorizontal: 13,
            marginVertical: 15,
          }}
        >
          {planet.description}
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL(planet.wikiLink)}>
          <Text>
            Source: Wikipedia
            <EvilIcons name="external-link" size={24} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <Text>Rotation Time</Text><Text preset="h4"> {planet.rotationTime} DAYS</Text>
      </View>
      <View style={styles.box}>
        <Text>Revolution Time</Text><Text preset="h4"> {planet.revolutionTime}</Text>
      </View>
      <View style={styles.box}>
        <Text>Radius</Text><Text preset="h4"> {planet.radius} KM</Text>
      </View>
      <View style={styles.box}>
        <Text>Average Temp</Text><Text preset="h4"> {planet.avgTemp}</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  img: {
    marginVertical: 70,
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: colors.grey,
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});
