import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Text from "../text/text";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Header({ backBtn, menu }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable
          style={{ marginRight: 20 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="md-arrow-back-outline" size={24} color="white" />
        </Pressable>
      )}
      <Text preset="h2">THE PLANETS</Text>
      {menu && (
        <Pressable style={{ flex: 1, alignItems: "flex-end" }}>
          <Feather name="menu" size={24} color="white" />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[2],
    borderBottomWidth: 0.25,
    borderBottomColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
});
