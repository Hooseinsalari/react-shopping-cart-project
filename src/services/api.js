import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com"

export const getProductsApi = async () => {
    const {data} = await axios.get("/products")
    return data;
}