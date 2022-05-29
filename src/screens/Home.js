import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Header from "../components/Header/Header";
import { Planet_List } from "../data/planet-list";
import { colors } from "../theme/colors";
import { Feather } from "@expo/vector-icons";
import { spacing } from "../theme/spacing";
import Text from "../components/text/text";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";


export default function Home({ navigation }) {
  const [search, setSearch] = useState("");
  const plants = Planet_List.filter((planet) => {
    return planet.name.toLowerCase().includes(search.toLowerCase());
  });
  const Alert = () => {
    alert("Hello");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.black }}>
      <Header menu={true} />
      <View>
        <View style={styles.searchIcon}>
          <EvilIcons name="search" size={24} color="white" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Type the planet name"
          placeholderTextColor={colors.grey}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.name}
        data={plants}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("Details", { planet: item });
              }}
            >
              <View style={styles.item}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={[styles.circle, { backgroundColor: item.color }]}
                  />
                  <Text preset="h4" style={styles.itemName}>
                    {item.name}
                  </Text>
                </View>
                <Feather name="chevron-right" size={20} color="white" />
              </View>
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <View style={styles.filter}>
        <Pressable onPress={Alert}>
          <AntDesign name="filter" size={28} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  itemName: {
    marginLeft: 20,
    color: colors.white,
    textTransform: "uppercase",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 15,
  },
  separator: {
    height: 0.5,
    backgroundColor: colors.grey,
  },
  input: {
    color: colors.white,
    marginTop: spacing[5],
    marginHorizontal: spacing[4],
    height: 40,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: spacing[8],
  },
  filter: {
    position: "absolute",
    right: spacing[3],
    bottom: 11,
    backgroundColor: colors.white,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon: {
    position: "absolute",
    left: spacing[5],
    bottom: 10,
  },
});
