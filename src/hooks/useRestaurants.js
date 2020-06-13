// This file has the extracted hook logic which has been used to make the API request for the Restaurant Search

import { useState, useEffect } from "react";
import yelp from "../API/yelp";

export default () => {
  //   State for managing the results from the Yelp API -
  const [results, setResults] = useState([]);
  //   State for handling errors on Api search
  const [errorMessage, setErrorMessage] = useState("");
  // Making the API search using axios library
  const searchAPI = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });

      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  //   To display the results the first time the component is rendered on the screen
  useEffect(() => {
    searchAPI("pasta");
  }, []);

  return [searchAPI, errorMessage, results];
};
