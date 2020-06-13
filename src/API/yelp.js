import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer CSAPx2Ag3iRayr9MHLzKjz2oI6SMte2R43royR1I1DHOwuuSIhIEpu5MO5pQJkJvegy3IKr6WiWHDALn7uaKY1S5Qlr9iabNqhD33VjPvFew3jo6H9ra8fn5FnvkXnYx",
  },
});
