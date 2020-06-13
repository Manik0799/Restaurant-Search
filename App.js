import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchSceen";
import RestaurantDetail from "./src/components/RestaurantDetail";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Detail: RestaurantDetail,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

// Create App container converts the navigator to a valid component
export default createAppContainer(navigator);
