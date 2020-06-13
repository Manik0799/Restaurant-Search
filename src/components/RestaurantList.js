import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ navigation, title, result }) => {
  if (!result.length) {
    return null;
  }
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}>
        {title} ({result.length})
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(restaurant) => restaurant.id}
        data={result}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              // Passing the restaurant id directly to the detail page to display its data
              onPress={() => navigation.navigate("Detail", { id: item.id })}
            >
              <RestaurantCard data={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 15,
  },
  headingStyle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
  },
});

export default withNavigation(RestaurantList);
