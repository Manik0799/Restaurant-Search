import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import yelp from "../API/yelp";

const RestaurantDetail = ({ navigation }) => {
  // Getting the id of the restaurant
  const id = navigation.getParam("id");
  // State Management
  const [result, setResult] = useState(null);

  const getData = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getData(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.mainTextStyle}>{result.name}</Text>
      <View style={styles.viewStyle}>
        <View style={styles.displayStyle}>
          <AntDesign name="star" size={24} color="black" />
          <Text style={styles.secondaryTextStyle}>{result.rating} / 5</Text>
        </View>
        <View style={styles.displayStyle}>
          <Entypo name="location" size={24} color="black" />
          <Text style={styles.secondaryTextStyle}>
            {result.location.address1} , {result.location.city}
          </Text>
        </View>
        <View style={styles.displayStyle}>
          <Feather name="phone-call" size={24} color="black" />
          <Text style={styles.secondaryTextStyle}>{result.phone}</Text>
        </View>
      </View>
      <FlatList
        style={{ marginTop: 40 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginLeft: 10,
    marginTop: 16,
  },
  displayStyle: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  mainTextStyle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
  secondaryTextStyle: {
    fontSize: 18,
    marginLeft: 10,
  },
  imageStyle: {
    height: 220,
    width: 280,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

export default RestaurantDetail;
