import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantList from "../components/RestaurantList";

const SearchScreen = () => {
  // State for managing the input
  const [searchText, setSearchText] = useState("");

  //   Extracted Hook logic being imparted again
  const [searchAPI, errorMessage, results] = useRestaurants();

  //   Filtering the search results based on price
  const filterRestaurants = (price) => {
    // price = "$" || "$$" || "$$$"
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        searchText={searchText}
        onSearchChange={(newText) => {
          setSearchText(newText);
        }}
        onTextSubmit={() => {
          searchAPI(searchText);
        }}
      />
      {errorMessage ? <Text>Something went wrong !</Text> : null}

      {/* Rendering Lists */}
      <ScrollView>
        <RestaurantList
          title="Cost Effective"
          result={filterRestaurants("$")}
        />
        <RestaurantList title="Bit Pricier" result={filterRestaurants("$$")} />
        <RestaurantList title="Big Spender" result={filterRestaurants("$$$")} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
