import axios from "axios";

const API_BASE_URL =  'https://fakestoreapi.com';

const getDetailProduct = async ({params}) =>{
    try {
        const res = await axios.get(`${API_BASE_URL}/products/${params.id}`);
        if (res) {
          
          let product = {
            ...res.data,
            quantity: 1,
          };

          return { product };
        } else {
          throw console.log("loading data from API...");
        }
    } catch (error) {
       throw console.error('Error fetching productDetail :', error);
    }
};

export default getDetailProduct