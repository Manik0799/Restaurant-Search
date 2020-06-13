import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const RestaurantCard = ({ data }) => {
  return (
    <View style={styles.viewStyle}>
      <Image style={styles.imageStyle} source={{ uri: data.image_url }} />
      <Text style={styles.nameStyle}>{data.name}</Text>
      <Text style={styles.detailStyle}>
        {data.rating} <AntDesign name="star" size={16} color="black" /> ,{" "}
        {data.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginLeft: 20,
    marginTop: 8,
  },
  imageStyle: {
    height: 160,
    width: 250,
    borderRadius: 8,
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },
  detailStyle: {
    fontSize: 16,
    marginTop: 2,
  },
});

export default RestaurantCard;
