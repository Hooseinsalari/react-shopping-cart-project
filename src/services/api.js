import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com"

export const getOneProductApi = async (id) => {
    const {data} = await axios.get(`/products/${id}`)
    return data
}

export const getProductsApi = async () => {
    const {data} = await axios.get("/products")
    return data;
}