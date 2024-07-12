import axios from "axios";

const API_BASE_URL =  'https://fakestoreapi.com';

const getProductsByCategory = async ({params}) =>{

    try {
        const res = await axios.get(`${API_BASE_URL}/products/category/${params.category}`);
        if(res){
            const products = res.data;
            return {products};
        }else{
            throw console.log('loading data from API...');
        }
    } catch (error) {
       throw console.error('Error fetching products by category:', error);
    }
};

export default getProductsByCategory