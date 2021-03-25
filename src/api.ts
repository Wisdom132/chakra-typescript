// import axios from "axios";

// const API_URL = "https://lekkify-server.herokuapp.com/";

// export async function getProducts() {
//   const response = await axios.get(`${API_URL}`);
//   return response;
// }

import axios, { AxiosResponse } from "axios";
import { ProductType } from "./models/product.interface";

const instance = axios.create({
  baseURL: "https://lekkify-server.herokuapp.com/",
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
};

export const ProductRequest = {
  getProducts: (): Promise<ProductType[]> => requests.get("/"),
  createPost: (product: any): Promise<ProductType> =>
    requests.post("/", product),
};
