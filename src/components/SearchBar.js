import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchText, onSearchChange, onTextSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        onChangeText={(newText) => onSearchChange(newText)}
        value={searchText}
        onEndEditing={() => {
          onTextSubmit();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EBEE",
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    color: "black",
  },
  iconStyle: {
    fontSize: 35,
    color: "black",
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
